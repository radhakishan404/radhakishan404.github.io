const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const directory = path.resolve(__dirname, "../public/articles/karpathy-rules");
const source = fs.readFileSync(path.join(directory, "index.html"), "utf8");
const document = new JSDOM(source).window.document;
const url = "https://radhakishan404.is-a.dev/articles/karpathy-rules/";

assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelector('link[rel="canonical"]').href, url);
assert.equal(document.querySelector('meta[property="og:url"]').content, url);
assert.equal(document.querySelector('meta[property="og:image"]').content, url + "cover.png");
assert.equal(document.querySelector('meta[name="twitter:image"]').content, url + "cover.png");
assert.ok(document.querySelector('meta[name="description"]').content.length > 80);
assert.ok(source.includes("github.com/multica-ai/andrej-karpathy-skills"));
assert.ok(source.includes("x.com/karpathy/status/2015883857489522876"));
["Think Before Coding", "Simplicity First", "Surgical Changes", "Goal-Driven Execution"].forEach((rule) => {
  assert.ok(source.toLowerCase().includes(rule.toLowerCase()), "Missing rule: " + rule);
});
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
doc.querySelector('button[data-copy="cmd-new"]').click();
assert.equal(copied, "curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md");
["cmd-append", "cmd-market", "cmd-plugin"].forEach((id) => {
  doc.querySelector(`button[data-copy="${id}"]`).click();
  assert.equal(copied, doc.getElementById(id).textContent.trim());
});
console.log("Article checks passed: four rules, install commands, source links, metadata, anchors, assets, copy actions, and 1200x630 cover.");
