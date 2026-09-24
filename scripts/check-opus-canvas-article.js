const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const directory = path.resolve(__dirname, "../public/articles/opus-canvas-prompts");
const source = fs.readFileSync(path.join(directory, "index.html"), "utf8");
const document = new JSDOM(source).window.document;
const url = "https://radhakishan404.is-a.dev/articles/opus-canvas-prompts/";

assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelectorAll(".slide-card").length, 9);
assert.equal(document.querySelector('link[rel="canonical"]').href, url);
assert.equal(document.querySelector('meta[property="og:image"]').content, url + "cover.png");
assert.ok(document.querySelector("#slide-3-prompt").textContent.includes("Introducing Opus 5.5"));
assert.ok(document.querySelector("#slide-4-prompt").textContent.includes("procedural animated film"));
assert.ok(document.querySelector("#slide-7-ar").textContent.includes("INTELLIGENCE, IN YOUR LINE OF SIGHT."));
assert.ok(document.querySelector("#slide-8-prompt").textContent.includes("conversion strategist"));
["https://aureliengmz.github.io/clearwater/", "https://valley.mengto.here.now/", "https://small-world.dominikmartn.workers.dev/", "https://github.com/sevenevesai/riso-windowseat", "https://sael.net/plane-of-focus/"].forEach((href) => {
    assert.ok(source.includes(href), "Missing link " + href);
});
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    assert.ok(document.getElementById(link.hash.slice(1)), "Missing anchor: " + link.hash);
});
const cover = fs.readFileSync(path.join(directory, "cover.png"));
assert.equal(cover.readUInt32BE(16), 1200);
assert.equal(cover.readUInt32BE(20), 630);
const interactive = new JSDOM(source, { url, runScripts: "outside-only" });
let copied = "";
Object.defineProperty(interactive.window, "isSecureContext", { value: true });
Object.defineProperty(interactive.window.navigator, "clipboard", { value: { writeText: async (text) => { copied = text; } } });
interactive.window.eval(fs.readFileSync(path.join(directory, "article.js"), "utf8"));
interactive.window.document.querySelector("[data-target='slide-3-prompt']").click();
assert.equal(copied, interactive.window.document.getElementById("slide-3-prompt").textContent);
console.log("Opus canvas article checks passed.");
