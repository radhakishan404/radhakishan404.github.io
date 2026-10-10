const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
require("sucrase/register");
const softdata = require("../src/softdata.json");
const { applyPageMetadata, getPageMetadata } = require("../src/seo");

const buildDirectory = path.resolve(__dirname, "../build");
const entrypoint = path.join(buildDirectory, "index.html");

const permalinkGenerate = (value) => value.trim().replace(/\s+/g, " ").toLowerCase().replace(/\s+/g, "-");

const portfolioRoutes = [
    "portfolio",
    "portfolio/infolive",
    "portfolio/yourvay",
    "portfolio/transformo",
    ...softdata.project.map((project) => `portfolio/${permalinkGenerate(project.title)}`)
];

const legacyProjectRedirects = [
    "notch-prompter",
    "hero-match-arena",
    "asmc",
    "antaraal",
    "velivings",
    "magiclock",
    "matterclock",
    "ritu-polymers",
    "linepop",
    "nanhipathshala",
    "replybox",
    "pookiemouse"
];

const routes = [
    "about",
    "contact",
    "articles",
    ...portfolioRoutes,
    ...portfolioRoutes.map((route) => route.replace(/^portfolio/, "projects"))
];

function redirectDocument(destination) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <link rel="canonical" href="https://radhakishan404.is-a.dev${destination}">
  <meta http-equiv="refresh" content="0; url=${destination}">
  <title>Redirecting</title>
</head>
<body>
  <p><a href="${destination}">Continue</a></p>
</body>
</html>
`;
}

if (!fs.existsSync(entrypoint)) {
    throw new Error("Build entrypoint not found. Run the production build first.");
}

// Each static entrypoint gets its own title, description, canonical, Open Graph and JSON-LD,
// so crawlers and link previews see the right page before JavaScript runs.
const template = fs.readFileSync(entrypoint, "utf8");
function documentFor(route) {
    const dom = new JSDOM(template);
    const metadata = getPageMetadata(`/${route}`);
    if (/not found/i.test(metadata.title)) {
        throw new Error(`No page metadata for /${route}/`);
    }
    applyPageMetadata(dom.window.document, metadata);
    return dom.serialize();
}

fs.writeFileSync(entrypoint, documentFor(""));
for (const route of new Set(routes)) {
    const routeDirectory = path.join(buildDirectory, route);
    fs.mkdirSync(routeDirectory, { recursive: true });
    fs.writeFileSync(path.join(routeDirectory, "index.html"), documentFor(route));
}

for (const slug of legacyProjectRedirects) {
    const routeDirectory = path.join(buildDirectory, "projects", slug);
    fs.mkdirSync(routeDirectory, { recursive: true });
    fs.writeFileSync(path.join(routeDirectory, "index.html"), redirectDocument("/portfolio/"));
}

console.log(`Created static entrypoints for ${new Set(routes).size} routes.`);
