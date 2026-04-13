import fs from "fs";
import path from "path";

const rootDir = path.resolve();
const buildDir = path.join(rootDir, "build");
const sitemapPath = path.join(buildDir, "sitemap.xml");
const indexPath = path.join(buildDir, "index.html");

if (!fs.existsSync(buildDir) || !fs.existsSync(indexPath) || !fs.existsSync(sitemapPath)) {
  console.log("Skipping article route generation. Build or sitemap missing.");
  process.exit(0);
}

const html = fs.readFileSync(indexPath, "utf8");
const sitemap = fs.readFileSync(sitemapPath, "utf8");

const articleUrls = Array.from(
  sitemap.matchAll(/<loc>https:\/\/[^<]+\/articles(?:\/([^<]+))?<\/loc>/g)
).map((match) => (match[1] ? match[1].replace(/\/$/, "") : ""));

const uniqueSlugs = Array.from(new Set(articleUrls.filter(Boolean)));

const articlesRoot = path.join(buildDir, "articles");
fs.mkdirSync(articlesRoot, { recursive: true });

const writeIndex = (targetDir) => {
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), html);
};

writeIndex(articlesRoot);

uniqueSlugs.forEach((slug) => {
  writeIndex(path.join(articlesRoot, slug));
});

console.log(`Generated article routes: ${uniqueSlugs.length + 1}`);
