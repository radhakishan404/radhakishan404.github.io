const fs = require("fs");
const path = require("path");
const softdata = require("../src/softdata.json");

const siteUrl = "https://radhakishan404.is-a.dev";
const articlesSource = fs.readFileSync(
    path.resolve(__dirname, "../src/data/articles.js"),
    "utf8"
);

const articleBlock = articlesSource.match(/const ARTICLE_DATA = \[([\s\S]*?)\n\];/);

if (!articleBlock) {
    throw new Error("Could not find ARTICLE_DATA while generating the sitemap.");
}

const articleSlugs = [...articleBlock[1].matchAll(/slug:\s*"([^"]+)"/g)]
    .map((match) => match[1]);

const permalinkGenerate = (value) => value
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/\s+/g, "-");

const paths = new Set([
    "/",
    "/about/",
    "/contact/",
    "/portfolio/",
    "/articles/",
    "/portfolio/infolive/",
    "/portfolio/yourvay/",
    "/portfolio/transformo/",
    ...softdata.project.map((project) => `/portfolio/${permalinkGenerate(project.title)}/`),
    ...articleSlugs.map((slug) => `/articles/${slug}/`)
]);

const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...paths].map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`),
    '</urlset>',
    ''
].join("\n");

fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
console.log(`Generated sitemap with ${paths.size} URLs.`);
