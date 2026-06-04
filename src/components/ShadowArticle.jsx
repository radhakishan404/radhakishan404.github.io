import React, { useEffect, useRef } from "react";

function ShadowArticle({ html, className }) {
    const hostRef = useRef(null);

    useEffect(() => {
        if (!hostRef.current || !html) return;

        let shadow = hostRef.current.shadowRoot;
        if (!shadow) {
            shadow = hostRef.current.attachShadow({ mode: "open" });
        }

        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        Array.from(doc.head.children).forEach((node) => {
            shadow.appendChild(document.importNode(node, true));
        });

        const wrapper = document.createElement("div");
        wrapper.className = "shadow-article-body";
        const bodyStyle = doc.body?.getAttribute("style");
        if (bodyStyle) wrapper.setAttribute("style", bodyStyle);

        Array.from(doc.body.children).forEach((node) => {
            wrapper.appendChild(document.importNode(node, true));
        });

        shadow.appendChild(wrapper);

        shadow.querySelectorAll("a[href]").forEach((a) => {
            const href = a.getAttribute("href");
            if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
                a.setAttribute("target", "_blank");
                a.setAttribute("rel", "noopener noreferrer");
            }
        });
    }, [html]);

    return <div ref={hostRef} className={className} />;
}

export default ShadowArticle;
