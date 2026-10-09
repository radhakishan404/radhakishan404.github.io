const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const directory = path.resolve(__dirname, "../public/articles/claude-loops");
const source = fs.readFileSync(path.join(directory, "index.html"), "utf8");
const document = new JSDOM(source).window.document;
const url = "https://radhakishan404.is-a.dev/articles/claude-loops/";

assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelectorAll(".audit").length, 3);
assert.ok(source.includes("RkQQ7WEor7w"));
assert.equal(document.querySelector('link[rel="canonical"]').href, url);
assert.equal(document.querySelector('meta[property="og:url"]').content, url);
assert.equal(document.querySelector('meta[property="og:image"]').content, url + "cover.png");
assert.equal(document.querySelector('meta[name="twitter:image"]').content, url + "cover.png");
assert.ok(document.querySelector('meta[name="description"]').content.length > 80);
const schema = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
assert.equal(schema["@graph"].find((item) => item["@type"] === "TechArticle").datePublished, "2026-10-10");
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  assert.ok(document.getElementById(link.hash.slice(1)), "Missing anchor: " + link.hash);
});
document.querySelectorAll("img, script[src], link[rel=stylesheet]").forEach((asset) => {
  const src = asset.getAttribute("src") || asset.getAttribute("href");
  if (src.startsWith("https://")) return;
  const file = src.startsWith("/")
    ? path.resolve(__dirname, "../public", decodeURIComponent(src.slice(1)))
    : path.resolve(directory, src);
  assert.ok(fs.existsSync(file), "Missing asset: " + file);
});
const cover = fs.readFileSync(path.join(directory, "cover.png"));
assert.equal(cover.readUInt32BE(16), 1200);
assert.equal(cover.readUInt32BE(20), 630);
const interactive = new JSDOM(source, { url, runScripts: "outside-only" });
let copied = "";
Object.defineProperty(interactive.window, "isSecureContext", { value: true });
Object.defineProperty(interactive.window.navigator, "clipboard", { value: { writeText: async (text) => { copied = text; } } });
interactive.window.eval(fs.readFileSync(path.join(directory, "article.js"), "utf8"));
const doc = interactive.window.document;
doc.querySelector('.audit button[data-copy="cmd-goal"]').click();
assert.ok(copied.startsWith("/goal "));
doc.querySelector('button[data-copy="cmd-ralph"]').click();
assert.ok(copied.includes("/plugin install ralph-wiggum@claude-code-plugins"));
doc.querySelector('button[data-copy="cmd-loop"]').click();
assert.ok(copied.startsWith("/loop "));
doc.querySelector('button[data-copy="finish"]').click();
assert.equal(copied, doc.getElementById("finish").textContent.trim());
console.log("Article checks passed: 3 loop setups, finish-line template, metadata, anchors, assets, copy actions, and 1200x630 cover.");
