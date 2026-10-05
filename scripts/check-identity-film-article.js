const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const directory = path.resolve(__dirname, "../public/articles/identity-film-prompt");
const source = fs.readFileSync(path.join(directory, "index.html"), "utf8");
const document = new JSDOM(source).window.document;
const url = "https://radhakishan404.is-a.dev/articles/identity-film-prompt/";

assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelector('link[rel="canonical"]').href, url);
assert.equal(document.querySelector('meta[property="og:image"]').content, url + "cover.png");
assert.ok(document.querySelector('meta[name="description"]').content.length > 80);
JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  assert.ok(document.getElementById(link.hash.slice(1)), "Missing anchor: " + link.hash);
});
document.querySelectorAll("img[src], video[src], video[poster], script[src], link[rel=stylesheet]").forEach((asset) => {
  for (const attr of ["src", "poster", "href"]) {
    const src = asset.getAttribute(attr);
    if (!src || src.startsWith("https://")) continue;
    const file = src.startsWith("/")
      ? path.resolve(__dirname, "../public", decodeURIComponent(src.slice(1)))
      : path.resolve(directory, src);
    assert.ok(fs.existsSync(file), "Missing asset: " + file);
  }
});
const cover = fs.readFileSync(path.join(directory, "cover.png"));
assert.equal(cover.readUInt32BE(16), 1200);
assert.equal(cover.readUInt32BE(20), 630);
assert.ok(document.getElementById("template-prompt").textContent.includes("{{FULL NAME}}"));
assert.ok(document.getElementById("exact-prompt").textContent.startsWith("Create a premium cinematic 12-second"));
const interactive = new JSDOM(source, { url, runScripts: "outside-only" });
let copied = "";
Object.defineProperty(interactive.window, "isSecureContext", { value: true });
Object.defineProperty(interactive.window.navigator, "clipboard", { value: { writeText: async (text) => { copied = text; } } });
interactive.window.eval(fs.readFileSync(path.join(directory, "article.js"), "utf8"));
interactive.window.document.querySelector('[data-target="template-prompt"]').click();
assert.equal(copied, interactive.window.document.getElementById("template-prompt").textContent);
console.log("Article checks passed: identity film prompt, metadata, anchors, assets, copy action, and 1200x630 cover.");
