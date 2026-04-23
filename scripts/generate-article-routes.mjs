import fs from "node:fs";
import path from "node:path";

function getSiteUrl(rootDir) {
  const cnamePath = path.join(rootDir, "public", "CNAME");
  if (fs.existsSync(cnamePath)) {
    const cname = fs.readFileSync(cnamePath, "utf8").trim();
    if (cname) {
      return `https://${cname.replace(/^https?:\/\//, "")}`;
    }
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, "package.json"), "utf8"));
    if (pkg.homepage) {
      return `${pkg.homepage}`.replace(/\/$/, "");
    }
  } catch {
    // ignore
  }

  return "https://radhakishan404.is-a.dev";
}

const authorName = "Radhakishan Jangid";

const rootDir = path.resolve();
const siteUrl = getSiteUrl(rootDir);
const buildDir = path.join(rootDir, "build");
const sitemapPath = path.join(buildDir, "sitemap.xml");
const indexPath = path.join(buildDir, "index.html");
const softdataPath = path.join(rootDir, "src", "softdata.json");
const articlesDir = path.join(rootDir, "src", "content", "articles");

if (!fs.existsSync(buildDir) || !fs.existsSync(indexPath) || !fs.existsSync(sitemapPath)) {
  console.log("Skipping SEO prerender. Build or sitemap missing.");
  process.exit(0);
}

function slugify(value) {
  return `${value}`
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripTags(value) {
  return `${value}`.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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

  return { attributes, body };
}

function normalizeKeywords(value) {
  if (!value) {
    return "";
  }
  const cleaned = `${value}`.trim();
  if (!cleaned) {
    return "";
  }
  // Support YAML-ish "[a, b]" and "a, b".
  return cleaned
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(",")
    .map((item) => item.replace(/^["']|["']$/g, "").trim())
    .filter(Boolean)
    .join(", ");
}

function normalizeAbsoluteUrl(value) {
  if (!value) {
    return "";
  }
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `${siteUrl}${value.startsWith("/") ? value : `/${value}`}`;
}

function replaceTag(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  return html.replace("</head>", `${replacement}\n  </head>`);
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
}

function setMeta(html, { attr, key, content }) {
  if (!content) {
    return html;
  }

  const escaped = String(content).replace(/"/g, "&quot;");
  const matcher = new RegExp(`<meta\\s+[^>]*${attr}="${key}"[^>]*>`, "i");
  const tag = `<meta ${attr}="${key}" content="${escaped}" />`;
  return replaceTag(html, matcher, tag);
}

function setCanonical(html, href) {
  if (!href) {
    return html;
  }

  const escaped = String(href).replace(/"/g, "&quot;");
  const matcher = /<link\s+[^>]*rel="canonical"[^>]*>/i;
  const tag = `<link rel="canonical" href="${escaped}" />`;
  return replaceTag(html, matcher, tag);
}

function setLdJson(html, data) {
  const matcher = /<script[^>]*id="seo-ld-json"[^>]*>[\s\S]*?<\/script>/i;
  if (!data) {
    return html.replace(matcher, "");
  }

  const tag = `<script id="seo-ld-json" type="application/ld+json">${JSON.stringify(data)}</script>`;
  return replaceTag(html, matcher, tag);
}

function buildSeoHtml(template, seo) {
  const resolvedTitle = seo.title || authorName;
  const resolvedDescription = seo.description || "";
  const resolvedUrl = seo.url || siteUrl;
  const resolvedImage = normalizeAbsoluteUrl(seo.image || "/images/500%20X%20500%20Transparent.png");

  let html = template;
  html = setTitle(html, resolvedTitle);
  html = setMeta(html, { attr: "name", key: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" });
  html = setMeta(html, { attr: "name", key: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" });
  html = setMeta(html, { attr: "name", key: "author", content: authorName });
  html = setMeta(html, { attr: "name", key: "description", content: resolvedDescription });
  html = setMeta(html, { attr: "property", key: "og:title", content: resolvedTitle });
  html = setMeta(html, { attr: "property", key: "og:description", content: resolvedDescription });
  html = setMeta(html, { attr: "property", key: "og:type", content: seo.type || "website" });
  html = setMeta(html, { attr: "property", key: "og:url", content: resolvedUrl });
  html = setMeta(html, { attr: "property", key: "og:image", content: resolvedImage });
  html = setMeta(html, { attr: "name", key: "twitter:card", content: seo.twitterCard || "summary_large_image" });
  html = setMeta(html, { attr: "name", key: "twitter:title", content: resolvedTitle });
  html = setMeta(html, { attr: "name", key: "twitter:description", content: resolvedDescription });
  html = setMeta(html, { attr: "name", key: "twitter:image", content: resolvedImage });
  html = setCanonical(html, resolvedUrl);
  html = setLdJson(html, seo.structuredData || null);
  return html;
}

function readDirFiles(dir, extensions) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => extensions.some((ext) => name.endsWith(ext)));
}

function buildArticleMetaMap() {
  const map = new Map();

  const mdDir = path.join(articlesDir, "md");
  readDirFiles(mdDir, [".md"]).forEach((file) => {
    const raw = fs.readFileSync(path.join(mdDir, file), "utf8");
    const { attributes, body } = parseFrontmatter(raw);
    const filename = file.replace(/\.md$/, "");
    const firstHeadingMatch = body.match(/^#\s+(.+)$/m);
    const title = attributes.title || (firstHeadingMatch ? firstHeadingMatch[1].trim() : filename);
    const slug = attributes.slug || slugify(filename);
    const plainText = body
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/[*_`>#-]/g, " ")
      .replace(/\[(.*?)\]\((.*?)\)/g, "$1");
    const excerpt = attributes.excerpt || stripTags(plainText).slice(0, 180).trim();

    map.set(slug, {
      slug,
      title,
      description: excerpt,
      datePublished: attributes.date || "",
      tags: normalizeKeywords(attributes.tags || ""),
      coverImage: attributes.cover || `/articles/${slug}.png`
    });
  });

  const htmlDir = path.join(articlesDir, "html");
  readDirFiles(htmlDir, [".html"]).forEach((file) => {
    const raw = fs.readFileSync(path.join(htmlDir, file), "utf8");
    const slug = slugify(file.replace(/\.html$/, ""));
    const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = (titleMatch ? stripTags(titleMatch[1]) : slug).trim();
    const descMatch = raw.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i);
    const description = (descMatch ? descMatch[1] : "").trim();
    const coverMatch =
      raw.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
      raw.match(/<meta[^>]+name=["']cover["'][^>]+content=["']([^"']+)["'][^>]*>/i);

    map.set(slug, {
      slug,
      title,
      description: description || "Article by Radhakishan Jangid.",
      datePublished: "",
      tags: normalizeKeywords(raw.match(/<meta[^>]+name=["']keywords["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1] || ""),
      coverImage: coverMatch ? coverMatch[1] : `/articles/${slug}.png`
    });
  });

  return map;
}

function buildProjectMetaMap() {
  if (!fs.existsSync(softdataPath)) {
    return new Map();
  }
  const softdata = JSON.parse(fs.readFileSync(softdataPath, "utf8"));
  const map = new Map();

  (softdata.project || []).forEach((project) => {
    const slug = slugify(project.title);
    map.set(slug, {
      slug,
      title: project.title,
      description: project.description || "",
      image: project.thumbnail || "",
      datePublished: project.date || ""
    });
  });

  return map;
}

const templateHtml = fs.readFileSync(indexPath, "utf8");
const sitemap = fs.readFileSync(sitemapPath, "utf8");

const urlMatches = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map((match) => match[1]);
const paths = urlMatches
  .map((loc) => loc.replace(siteUrl, ""))
  .filter((route) => route && route.startsWith("/"));

const articleMeta = buildArticleMetaMap();
const projectMeta = buildProjectMetaMap();

const pageDefaults = new Map([
  ["/", { title: authorName, description: "Senior software engineer building product systems, frontend experiences, public projects, and technical content.", type: "website" }],
  ["/about/", { title: `About | ${authorName}`, description: "Experience, technical strengths, and current focus areas.", type: "profile" }],
  ["/projects/", { title: `Projects | ${authorName}`, description: "Selected projects across product UI, web applications, shipped client work, and public software tools.", type: "website" }],
  ["/articles/", { title: `Articles | ${authorName}`, description: "AI prompts, developer content systems, and practical technical articles for developers and creators.", type: "website" }],
  ["/contact/", { title: `Contact | ${authorName}`, description: "Get in touch for engineering work, collaboration, and consulting.", type: "website" }]
]);

function ensureDirForRoute(routePath) {
  const cleaned = routePath.replace(/^\//, "");
  if (!cleaned) {
    return buildDir;
  }
  // Only folder routes are pre-rendered to /path/index.html. Keep .html files as-is.
  const dir = routePath.endsWith("/") ? cleaned.slice(0, -1) : cleaned;
  const targetDir = path.join(buildDir, dir);
  fs.mkdirSync(targetDir, { recursive: true });
  return targetDir;
}

function buildSeoForRoute(routePath) {
  const url = `${siteUrl}${routePath}`;

  if (routePath.startsWith("/articles/") && routePath !== "/articles/") {
    const slug = routePath.replace("/articles/", "").replace(/\/$/, "");
    const meta = articleMeta.get(slug);
    if (!meta) {
      return null;
    }

    return {
      title: `${meta.title} | Articles | ${authorName}`,
      description: meta.description,
      image: meta.coverImage,
      url,
      type: "article",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        datePublished: meta.datePublished || undefined,
        author: { "@type": "Person", name: authorName },
        publisher: { "@type": "Person", name: authorName },
        mainEntityOfPage: url,
        image: normalizeAbsoluteUrl(meta.coverImage),
        keywords: meta.tags || undefined
      }
    };
  }

  if (routePath.startsWith("/projects/") && routePath !== "/projects/") {
    const slug = routePath.replace("/projects/", "").replace(/\/$/, "");
    const meta = projectMeta.get(slug);
    if (!meta) {
      return null;
    }

    return {
      title: `${meta.title} | Projects | ${authorName}`,
      description: meta.description,
      image: meta.image,
      url,
      type: "website",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: meta.title,
        description: meta.description,
        url,
        datePublished: meta.datePublished || undefined,
        author: { "@type": "Person", name: authorName },
        image: meta.image ? normalizeAbsoluteUrl(meta.image) : undefined
      }
    };
  }

  const defaults = pageDefaults.get(routePath);
  if (defaults) {
    return { ...defaults, url };
  }

  // Fallback: keep the default SPA meta tags for unknown routes.
  return { url, type: "website" };
}

let renderedCount = 0;
paths.forEach((routePath) => {
  // Skip writing .html files as folder routes; these are real files from /public.
  if (routePath.endsWith(".html")) {
    return;
  }

  const targetDir = ensureDirForRoute(routePath);
  const outputPath = path.join(targetDir, "index.html");

  // Root route already exists as build/index.html; overwrite it with SEO-enriched defaults.
  const seo = buildSeoForRoute(routePath);
  const outputHtml = buildSeoHtml(templateHtml, seo || {});

  fs.writeFileSync(outputPath, outputHtml, "utf8");
  renderedCount += 1;
});

console.log(`SEO prerendered routes: ${renderedCount}`);
