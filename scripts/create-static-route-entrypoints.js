const fs = require("fs");
const path = require("path");
const softdata = require("../src/softdata.json");

const buildDirectory = path.resolve(__dirname, "../build");
const entrypoint = path.join(buildDirectory, "index.html");

const permalinkGenerate = (value) => value.trim().replace(/\s+/g, " ").toLowerCase().replace(/\s+/g, "-");

const routes = [
    "about",
    "contact",
    "articles",
    "portfolio",
    "portfolio/infolive",
    "portfolio/yourvay",
    "portfolio/transformo",
    ...softdata.project.map((project) => `portfolio/${permalinkGenerate(project.title)}`)
];

if (!fs.existsSync(entrypoint)) {
    throw new Error("Build entrypoint not found. Run the production build first.");
}

for (const route of new Set(routes)) {
    const routeDirectory = path.join(buildDirectory, route);
    fs.mkdirSync(routeDirectory, { recursive: true });
    fs.copyFileSync(entrypoint, path.join(routeDirectory, "index.html"));
}

console.log(`Created static entrypoints for ${new Set(routes).size} routes.`);
