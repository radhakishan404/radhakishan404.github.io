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

const rootDir = process.cwd();
const siteUrl = getSiteUrl(rootDir);
const buildDir = path.join(rootDir, "build");
const articlesDir = path.join(rootDir, "src", "content", "articles");
const softdataPath = path.join(rootDir, "src", "softdata.json");

function slugify(value) {
  return `${value}`
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readArticleFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
}

const softdata = JSON.parse(fs.readFileSync(softdataPath, "utf8"));

const staticRoutes = [
  "/",
  "/about",
  "/projects",
  "/articles",
  "/contact",
  "/privacy-policy.html"
];

const projectRoutes = softdata.project.map((project) => `/projects/${slugify(project.title)}`);

const markdownRoutes = readArticleFiles(path.join(articlesDir, "md"))
  .filter((file) => file.endsWith(".md"))
  .map((file) => `/articles/${slugify(file.replace(/\.md$/, ""))}`);

const htmlRoutes = readArticleFiles(path.join(articlesDir, "html"))
  .filter((file) => file.endsWith(".html"))
  .map((file) => `/articles/${slugify(file.replace(/\.html$/, ""))}`);

const routes = [...new Set([...staticRoutes, ...projectRoutes, ...markdownRoutes, ...htmlRoutes])]
  .map((route) => {
    // Prefer trailing slashes for folder-based routes. Keep .html as-is.
    if (route === "/" || route.endsWith(".html")) {
      return route;
    }
    return route.endsWith("/") ? route : `${route}/`;
  });

const today = new Date().toISOString();
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemapXml, "utf8");
console.log(`Sitemap generated with ${routes.length} URLs.`);
