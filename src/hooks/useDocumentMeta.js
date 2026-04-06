import { useEffect } from "react";

function useDocumentMeta(input, fallbackDescription) {
    const config = typeof input === "object"
        ? input
        : {
            title: input,
            description: fallbackDescription
        };

    useEffect(() => {
        const currentUrl = typeof window !== "undefined" ? window.location.href : "";

        if (config.title) {
            document.title = config.title;
        }

        const setMeta = (selector, value) => {
            if (!value) {
                return;
            }

            const meta = document.querySelector(selector);
            if (meta) {
                meta.setAttribute("content", value);
            }
        };

        if (config.description) {
            setMeta('meta[name="description"]', config.description);
            setMeta('meta[property="og:description"]', config.description);
            setMeta('meta[name="twitter:description"]', config.description);
        }

        if (config.title) {
            setMeta('meta[property="og:title"]', config.title);
            setMeta('meta[name="twitter:title"]', config.title);
        }

        if (config.image) {
            setMeta('meta[property="og:image"]', config.image);
            setMeta('meta[name="twitter:image"]', config.image);
        }

        if (currentUrl) {
            setMeta('meta[property="og:url"]', currentUrl);
        }

        setMeta('meta[property="og:type"]', config.type || "website");
        setMeta('meta[name="twitter:card"]', config.twitterCard || "summary_large_image");

        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink && currentUrl) {
            canonicalLink.setAttribute("href", currentUrl);
        }

        const ldScript = document.querySelector('script[data-dynamic-seo="true"]');
        if (ldScript) {
            ldScript.remove();
        }

        if (config.structuredData) {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.dataset.dynamicSeo = "true";
            script.text = JSON.stringify(config.structuredData);
            document.head.appendChild(script);
        }
    }, [config.description, config.image, config.structuredData, config.title, config.twitterCard, config.type]);
}

export default useDocumentMeta;
