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
/* ── Reset & strip duplicate chrome ── */
html, body { margin: 0; padding: 0; overflow-x: hidden; }
body > * { position: relative; z-index: 1; }
body { cursor: auto !important; -webkit-overflow-scrolling: touch; }
::-webkit-scrollbar { width: 0; height: 0; }
body { scrollbar-width: none; }

header, footer, nav,
.topbar, .topbar-inner,
.cursor, .cursor-ring,
#progress,
[class*="site-header"], [class*="site-footer"],
[class*="back-to-top"] {
    display: none !important;
}

/* ── Mobile-first overrides ── */
@media (max-width: 768px) {
    body {
        font-size: 15px !important;
        line-height: 1.7 !important;
        padding: 0 16px !important;
    }

    /* Force all grids to single column */
    [style*="grid-template-columns"],
    .grid, .card-grid, .prompt-grid, .section-grid,
    .two-col, .three-col, .hero, .hero-grid,
    .tools-grid, .courses-grid, .domains-grid,
    .flow-list, .example-grid {
        display: block !important;
    }

    /* Force all flex wraps to column */
    [style*="display: flex"],
    [style*="display:flex"] {
        flex-wrap: wrap !important;
    }

    /* Readable headings */
    h1 { font-size: 28px !important; line-height: 1.15 !important; }
    h2 { font-size: 22px !important; line-height: 1.2 !important; }
    h3 { font-size: 18px !important; line-height: 1.3 !important; }

    /* Readable body text */
    p, li, td, th, span, div {
        max-width: 100% !important;
        word-break: break-word !important;
    }

    /* Touch-friendly buttons and links */
    button, a, .btn, [class*="btn"],
    .filter-btn, .copy-btn, .tag, .pill, .chip {
        min-height: 44px !important;
        min-width: 44px !important;
        padding: 10px 16px !important;
        font-size: 14px !important;
        touch-action: manipulation !important;
    }

    /* Cards — full width, readable */
    [class*="card"], .panel, .block, .item,
    .prompt-card, .tool-card, .course-card,
    .domain-card, .section-card {
        width: 100% !important;
        max-width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        border-radius: 12px !important;
        margin-bottom: 16px !important;
    }

    /* Images scale properly */
    img, video, iframe, svg {
        max-width: 100% !important;
        height: auto !important;
    }

    /* Code blocks scroll horizontally */
    pre, code, .code-block {
        max-width: 100% !important;
        overflow-x: auto !important;
        font-size: 13px !important;
        white-space: pre-wrap !important;
        word-break: break-all !important;
    }

    /* Tables scroll */
    table {
        display: block !important;
        overflow-x: auto !important;
        width: 100% !important;
    }

    /* Kill fixed/sticky elements inside articles */
    [style*="position: fixed"],
    [style*="position:fixed"],
    [style*="position: sticky"],
    [style*="position:sticky"] {
        position: relative !important;
    }

    /* Hero sections — simplify */
    .hero, [class*="hero"] {
        min-height: auto !important;
        height: auto !important;
        padding: 32px 0 !important;
    }

    /* Remove decorative noise overlays */
    body::before, body::after {
        display: none !important;
    }

    /* Sections — proper spacing */
    section, [class*="section"], .shell {
        padding-left: 0 !important;
        padding-right: 0 !important;
        max-width: 100% !important;
    }

    /* Filter bars wrap */
    .filters, [class*="filter"], .search-bar {
        flex-wrap: wrap !important;
        gap: 8px !important;
    }

    input[type="search"], input[type="text"] {
        width: 100% !important;
        min-width: 0 !important;
        font-size: 16px !important;
    }
}

/* ── Tablet tweaks ── */
@media (min-width: 769px) and (max-width: 1024px) {
    body { padding: 0 24px !important; }

    [style*="grid-template-columns"] {
        grid-template-columns: 1fr 1fr !important;
    }
}
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
        githubUrl: attributes.github || "",
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
    const githubUrl = doc.querySelector('meta[name="github"]')?.content || "";
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
        githubUrl,
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

export function getArticleCategories() {
    return Array.from(new Set(articles.map((a) => a.category || "Article").filter(Boolean))).sort((a, b) => a.localeCompare(b));
}
