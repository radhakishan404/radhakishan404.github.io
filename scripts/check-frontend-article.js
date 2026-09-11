const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const directory = path.resolve(__dirname, "../public/articles/frontend-agent-skills");
const source = fs.readFileSync(path.join(directory, "index.html"), "utf8");
const document = new JSDOM(source).window.document;
const snapshot = JSON.parse(fs.readFileSync(path.join(directory, "repositories.json"), "utf8"));
const url = "https://radhakishan404.is-a.dev/articles/frontend-agent-skills/";
assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelectorAll(".repo-card").length, 10);
assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1);
assert.equal(document.querySelector('link[rel="canonical"]').href, url);
assert.equal(document.querySelector('meta[property="og:url"]').content, url);
assert.equal(document.querySelector('meta[property="og:image"]').content, url + "cover.png");
assert.equal(document.querySelector('meta[name="twitter:image"]').content, url + "cover.png");
assert.ok(document.querySelector('meta[name="description"]').content.length > 80);
assert.ok(!document.querySelector('meta[name="robots"]').content.includes("noindex"));
const schema = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
assert.equal(schema["@graph"].find((item) => item["@type"] === "ItemList").numberOfItems, 10);
assert.equal(schema["@graph"].find((item) => item["@type"] === "TechArticle").datePublished, "2026-09-11");
snapshot.repositories.forEach((repo) => {
    const card = document.getElementById("skill-" + repo.rank);
    assert.equal(card.querySelector("h2").textContent, repo.title);
    assert.equal(card.querySelector(".owner a").href, repo.html_url);
    assert.equal(card.querySelector(".stars").textContent.trim(), repo.stargazers_count.toLocaleString("en-US"));
    assert.equal(card.querySelector(".stars").href, repo.html_url + "/stargazers");
    assert.equal(Boolean(card.querySelector(".archived")), repo.archived);
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
assert.equal(cover.toString("hex", 0, 8), "89504e470d0a1a0a");
assert.equal(cover.readUInt32BE(16), 1200);
assert.equal(cover.readUInt32BE(20), 630);
const interactive = new JSDOM(source, { url, runScripts: "outside-only" });
let copied = "";
Object.defineProperty(interactive.window, "isSecureContext", { value: true });
Object.defineProperty(interactive.window.navigator, "clipboard", {
    value: { writeText: async (text) => { copied = text; } }
});
interactive.window.eval(fs.readFileSync(path.join(directory, "article.js"), "utf8"));
interactive.window.document.getElementById("copy-links").click();
assert.equal(copied.split("\n\n").length, 10);
snapshot.repositories.forEach((repo) => assert.ok(copied.includes(repo.html_url)));
interactive.window.document.getElementById("copy-prompt").click();
assert.equal(copied, interactive.window.document.getElementById("starter-prompt").textContent);
console.log("Article checks passed: 10 repositories, exact star snapshots, images, anchors, metadata, schema, copy actions, and 1200×630 share image.");
