import React, { useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { getArticleBySlug } from "../content/articles";
import useDocumentMeta from "../hooks/useDocumentMeta";

function HtmlArticlePage({ match }) {
    const article = getArticleBySlug(match.params.slug);
    const history = useHistory();
    const containerRef = useRef(null);
    const cleanupRef = useRef([]);
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";

    useDocumentMeta({
        title: article ? `${article.title} | rk.codex` : "Article | rk.codex",
        description: article?.excerpt || "",
        image: article?.coverImage || "",
        type: "article",
        structuredData: article ? {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.sortDate || undefined,
            author: { "@type": "Person", name: "Radhakishan Jangid" },
            publisher: { "@type": "Person", name: "Radhakishan Jangid" },
            mainEntityOfPage: `${siteUrl}/articles/${article.slug}/`,
            image: article.coverImage
                ? new URL(article.coverImage, siteUrl).href
                : undefined,
            keywords: article.tags.join(", ") || undefined
        } : undefined
    });

    useEffect(() => {
        if (!article?.raw || !containerRef.current) return;

        const root = document.getElementById("root");
        const parser = new DOMParser();
        const doc = parser.parseFromString(article.raw, "text/html");

        root.style.display = "none";

        const wrapper = containerRef.current;
        document.body.appendChild(wrapper);
        wrapper.style.display = "block";

        const headEls = [];
        doc.head.querySelectorAll("style, link[rel='stylesheet'], link[rel='preconnect']").forEach((el) => {
            const clone = document.importNode(el, true);
            document.head.appendChild(clone);
            headEls.push(clone);
        });
        cleanupRef.current = headEls;

        const bodyClasses = doc.body.className;
        const bodyStyle = doc.body.getAttribute("style") || "";
        if (bodyClasses) document.body.className = bodyClasses;
        if (bodyStyle) document.body.setAttribute("style", bodyStyle);

        const cssVars = doc.querySelector(":root")?.getAttribute("style");
        if (cssVars) document.documentElement.setAttribute("style", cssVars);

        const bodyNodes = Array.from(doc.body.childNodes).map((n) => document.importNode(n, true));
        bodyNodes.forEach((n) => wrapper.appendChild(n));

        wrapper.querySelectorAll("script").forEach((old) => {
            const s = document.createElement("script");
            if (old.src) {
                s.src = old.src;
            } else {
                s.textContent = old.textContent;
            }
            old.parentNode.replaceChild(s, old);
        });

        const backBtn = document.createElement("a");
        backBtn.textContent = "← Back to Articles";
        backBtn.href = "/articles";
        Object.assign(backBtn.style, {
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: "9999",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "13px",
            fontFamily: "system-ui, sans-serif",
            fontWeight: "600",
            textDecoration: "none",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            transition: "opacity 0.2s"
        });
        backBtn.addEventListener("click", (e) => {
            e.preventDefault();
            history.push("/articles");
        });
        wrapper.appendChild(backBtn);

        return () => {
            cleanupRef.current.forEach((el) => el.remove());
            cleanupRef.current = [];
            wrapper.textContent = "";
            wrapper.style.display = "none";
            document.body.className = "";
            document.body.removeAttribute("style");
            document.documentElement.removeAttribute("style");
            root.style.display = "";
            document.body.prepend(root);
        };
    }, [article?.slug]);

    if (!article || article.kind !== "html") {
        return <Redirect to={article ? `/articles/${article.slug}` : "/articles"} />;
    }

    return <div ref={containerRef} id="html-article-root" style={{ display: "none" }} />;
}

export default HtmlArticlePage;
