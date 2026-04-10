import { marked } from "marked";
import { slugify } from "../lib/slug";

marked.setOptions({
    breaks: true,
    gfm: true
});

const markdownModules = import.meta.glob("./articles/md/*.md", {
    eager: true,
    import: "default",
    query: "?raw"
});

const htmlModules = import.meta.glob("./articles/html/*.html", {
    eager: true,
    import: "default",
    query: "?raw"
});

function buildEmbeddedHtml(raw) {
    const baseHref =
        typeof window !== "undefined"
            ? `${window.location.origin}${import.meta.env.BASE_URL || "/"}`
            : import.meta.env.BASE_URL || "/";
    const helperMarkup = `
<base href="${baseHref}" target="_blank">
<style>
html, body { margin: 0; padding: 0; }
body > * { position: relative; z-index: 1; }
</style>`;

    if (/<head[^>]*>/i.test(raw)) {
        return raw.replace(/<head([^>]*)>/i, `<head$1>${helperMarkup}`);
    }

    return `<!DOCTYPE html><html><head>${helperMarkup}</head><body>${raw}</body></html>`;
}

function fileNameFromPath(path) {
    return path.split("/").pop().replace(/\.(md|html)$/, "");
}

function inferredCoverImage(slug) {
    return `/articles/${slug}.png`;
}

function stripTags(value) {
    return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function getReadingTime(text) {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 220));
    return `${minutes} min read`;
}

function normalizeTags(value) {
    if (!value) {
        return [];
    }

    if (Array.isArray(value)) {
        return value.map((item) => `${item}`.trim()).filter(Boolean);
    }

    return `${value}`
        .replace(/^\[/, "")
        .replace(/\]$/, "")
        .split(",")
        .map((item) => item.replace(/^["']|["']$/g, "").trim())
        .filter(Boolean);
}

function parseBoolean(value) {
    return `${value}`.trim().toLowerCase() === "true";
}

function formatDisplayDate(value) {
    if (!value) {
        return "";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(date);
}

function parseFrontmatter(raw) {
    if (!raw.startsWith("---")) {
        return { attributes: {}, body: raw };
    }

    const closingIndex = raw.indexOf("\n---", 3);
    if (closingIndex === -1) {
        return { attributes: {}, body: raw };
    }

    const header = raw.slice(3, closingIndex).trim();
    const body = raw.slice(closingIndex + 4).trim();
    const attributes = {};

    header.split("\n").forEach((line) => {
        const separatorIndex = line.indexOf(":");
        if (separatorIndex === -1) {
            return;
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        attributes[key] = value.replace(/^["']|["']$/g, "");
    });

    if (attributes.tags) {
        attributes.tags = normalizeTags(attributes.tags);
    }

    return { attributes, body };
}

function buildMarkdownPreview(title, excerpt) {
    return `
        <div class="article-card-markdown-inner">
            <span class="article-preview-type">Markdown</span>
            <h4>${title}</h4>
            <p>${excerpt}</p>
        </div>
    `;
}

function buildMarkdownArticle([path, raw]) {
    const { attributes, body } = parseFrontmatter(raw);
    const plainText = body
        .replace(/^#{1,6}\s+/gm, "")
        .replace(/[*_`>#-]/g, " ")
        .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
        .replace(/\s+/g, " ")
        .trim();

    const firstHeadingMatch = body.match(/^#\s+(.+)$/m);
    const excerpt = attributes.excerpt || plainText.slice(0, 180).trim();
    const title = attributes.title || (firstHeadingMatch ? firstHeadingMatch[1].trim() : fileNameFromPath(path));
    const slug = attributes.slug || slugify(fileNameFromPath(path));
    const coverImage = inferredCoverImage(slug);

    return {
        slug,
        title,
        date: formatDisplayDate(attributes.date || ""),
        sortDate: attributes.date || "",
        excerpt,
        tags: normalizeTags(attributes.tags),
        readingTime: getReadingTime(plainText),
        kind: "markdown",
        category: attributes.category || "Article",
        coverImage: coverImage || attributes.cover || "",
        accent: attributes.accent || "",
        featured: parseBoolean(attributes.featured || "false"),
        bodyHtml: marked.parse(body),
        previewHtml: buildMarkdownPreview(title, excerpt)
    };
}

function buildHtmlArticle([path, raw]) {
    const embeddedHtml = buildEmbeddedHtml(raw);
    const parser = new DOMParser();
    const doc = parser.parseFromString(embeddedHtml, "text/html");
    const title = doc.title || fileNameFromPath(path);
    const metaDescription = doc.querySelector('meta[name="description"]')?.content || "";
    const keywords = doc.querySelector('meta[name="keywords"]')?.content || "";
    const firstParagraph = doc.querySelector("p")?.textContent?.trim() || "";
    const articleDate =
        doc.querySelector('meta[property="article:published_time"]')?.content ||
        doc.querySelector('meta[name="date"]')?.content ||
        "";
    const category = doc.querySelector('meta[name="category"]')?.content || "Article";
    const slug = slugify(fileNameFromPath(path));
    const coverImage = inferredCoverImage(slug)
        || doc.querySelector('meta[property="og:image"]')?.content
        || doc.querySelector('meta[name="cover"]')?.content
        || "";
    const accent = doc.querySelector('meta[name="theme-color"]')?.content || "";
    const featured = parseBoolean(doc.querySelector('meta[name="featured"]')?.content || "false");
    const excerpt = metaDescription || firstParagraph || "Standalone HTML article rendered inside the React reader.";
    const plainText = stripTags(doc.body?.innerHTML || raw);

    return {
        slug,
        title,
        date: formatDisplayDate(articleDate),
        sortDate: articleDate,
        excerpt,
        tags: normalizeTags(keywords),
        readingTime: getReadingTime(plainText),
        kind: "html",
        category,
        coverImage,
        accent,
        featured,
        raw: embeddedHtml
    };
}

export const articles = [
    ...Object.entries(markdownModules).map(buildMarkdownArticle),
    ...Object.entries(htmlModules).map(buildHtmlArticle)
].sort((a, b) => {
    if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
    }

    const dateA = a.sortDate ? new Date(a.sortDate).getTime() : 0;
    const dateB = b.sortDate ? new Date(b.sortDate).getTime() : 0;
    if (dateA !== dateB) {
        return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
});

export function getArticleBySlug(slug) {
    return articles.find((article) => article.slug === slug);
}

export function getArticleTags() {
    return Array.from(new Set(articles.flatMap((article) => article.tags))).sort((a, b) => a.localeCompare(b));
}
