import { CURRENT_PROJECTS } from "./data/portfolioProjects";
import { ARTICLES } from "./data/articles";
import softdata from "./softdata.json";
import { permalinkGenerate } from "./Helper";

export const SITE_URL = "https://radhakishan404.is-a.dev";
export const VERIFICATION = "X3yExWHLcyhIPrHMHjKg6pIex1aSyL3Atw1hDdecGL0";
const NAME = "Radhakishan Jangid";
const PORTRAIT = `${SITE_URL}/images/radhakishan-red-portrait.png`;
export const normalizePath = (path) => `${path.split(/[?#]/)[0].replace(/\/+$/, "")}/`;
export const absoluteUrl = (path) => new URL(path, SITE_URL).href;

export const PAGE_METADATA = {
    "/": {
        title: `${NAME} | Product Engineer in Mumbai`,
        description: "I'm Radhakishan Jangid, a product engineer in Mumbai. Explore my websites, mobile apps, backend systems, open-source projects, and practical guides.",
        label: "Home"
    },
    "/about/": {
        title: `About ${NAME} | Software Engineering Journey`,
        description: "Meet Radhakishan Jangid, a Mumbai-based engineer building software since 2018. My journey from PHP to React, Node.js, mobile apps, and product systems.",
        label: "About", type: "ProfilePage"
    },
    "/portfolio/": {
        title: `Projects & Case Studies | ${NAME}`,
        description: "Explore InfoLive, YOURVAY, Transformo, and more: software case studies, client projects, and open-source tools built by Radhakishan Jangid.",
        label: "Portfolio", type: "CollectionPage"
    },
    "/articles/": {
        title: `Articles & Developer Guides | ${NAME}`,
        description: "Practical guides on AI tools, coding agents, developer workflows, prompts, and learning resources. Read the full article collection by Radhakishan Jangid.",
        label: "Articles", type: "CollectionPage"
    },
    "/contact/": {
        title: `Contact ${NAME} | Let's Build Something`,
        description: "Have a website, mobile app, backend, or automation project in mind? Get in touch with Radhakishan Jangid, a product engineer based in Mumbai, India.",
        label: "Contact", type: "ContactPage"
    }
};

CURRENT_PROJECTS.filter((project) => project.caseStudy).forEach((project) => {
    PAGE_METADATA[`/portfolio/${project.slug}/`] = {
        title: `${project.title} Case Study | ${NAME}`,
        description: project.description,
        image: absoluteUrl(project.image), label: project.title
    };
});
softdata.project.forEach((project) => {
    PAGE_METADATA[`/portfolio/${permalinkGenerate(project.title)}/`] = {
        title: `${project.title} | ${NAME} Portfolio`,
        description: `${project.description} Explore the technology and development work by ${NAME}.`,
        image: absoluteUrl(project.thumbnail), label: project.title
    };
});

export function getPageMetadata(pathname) {
    const path = normalizePath(pathname);
    const page = PAGE_METADATA[path];
    if (!page) return {
        title: `Page Not Found | ${NAME}`,
        description: "This page could not be found. Browse Radhakishan Jangid's portfolio, articles, or contact page.",
        robots: "noindex, follow", image: PORTRAIT, structuredData: null
    };
    const url = absoluteUrl(path);
    const person = {
        "@type": "Person", "@id": `${SITE_URL}/#person`, name: NAME,
        url: `${SITE_URL}/`, image: PORTRAIT, jobTitle: "Product Engineer",
        homeLocation: { "@type": "Place", name: "Mumbai, India" },
        sameAs: ["https://github.com/radhakishan404", "https://www.linkedin.com/in/radhakishanjangid", "https://dev.to/radhakishanjangid404"]
    };
    const graph = [person,
        { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: NAME, publisher: { "@id": person["@id"] } },
        { "@type": page.type || "WebPage", "@id": `${url}#webpage`, url, name: page.title,
            description: page.description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` },
            ...(page.type === "ProfilePage" ? { mainEntity: { "@id": person["@id"] } } : { about: { "@id": person["@id"] } }) }
    ];
    if (path !== "/") {
        const crumbs = [{ name: "Home", item: `${SITE_URL}/` }];
        if (path.startsWith("/portfolio/" ) && path !== "/portfolio/") crumbs.push({ name: "Portfolio", item: `${SITE_URL}/portfolio/` });
        crumbs.push({ name: page.label, item: url });
        graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })) });
    }
    if (path === "/articles/") graph.push({
        "@type": "ItemList", name: "Articles and developer guides",
        itemListElement: ARTICLES.map((article, i) => ({ "@type": "ListItem", position: i + 1, name: article.title, url: article.href }))
    });
    return { ...page, canonical: url, image: page.image || PORTRAIT,
        robots: "index, follow, max-image-preview:large", structuredData: { "@context": "https://schema.org", "@graph": graph } };
}

// Shared by client-side navigation and the static HTML generator.
export function applyPageMetadata(document, metadata) {
    document.title = metadata.title;
    const setMeta = (attribute, key, value) => {
        const matches = [...document.head.querySelectorAll(`meta[${attribute}="${key}"]`)];
        const node = matches.shift() || document.createElement("meta");
        matches.forEach((duplicate) => duplicate.remove());
        node.setAttribute(attribute, key);
        node.setAttribute("content", value);
        document.head.appendChild(node);
    };
    for (const [key, value] of Object.entries({
        description: metadata.description, robots: metadata.robots,
        author: NAME, "google-site-verification": VERIFICATION,
        "twitter:card": "summary_large_image", "twitter:title": metadata.title,
        "twitter:description": metadata.description, "twitter:image": metadata.image,
        "twitter:image:alt": metadata.label ? `${metadata.label} — ${NAME}` : NAME
    })) setMeta("name", key, value);
    for (const [key, value] of Object.entries({
        "og:title": metadata.title, "og:description": metadata.description, "og:type": "website",
        "og:site_name": NAME, "og:locale": "en_IN", "og:image": metadata.image,
        "og:image:alt": metadata.label ? `${metadata.label} — ${NAME}` : NAME
    })) setMeta("property", key, value);
    document.head.querySelectorAll('link[rel="canonical"], meta[property="og:url"]').forEach((node) => node.remove());
    if (metadata.canonical) {
        const canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = metadata.canonical;
        document.head.appendChild(canonical);
        setMeta("property", "og:url", metadata.canonical);
    }
    document.getElementById("site-structured-data")?.remove();
    if (metadata.structuredData) {
        const script = document.createElement("script");
        script.id = "site-structured-data";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(metadata.structuredData).replace(/</g, "\\u003c");
        document.head.appendChild(script);
    }
}
