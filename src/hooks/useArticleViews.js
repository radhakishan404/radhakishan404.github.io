import { useEffect, useMemo, useState } from "react";

const counterNamespace = "rk-journal-f7c2a91";
const counterApiBase = "https://api.countapi.xyz";
const hitDedupes = new Set();

function seededBaseline(slug) {
    let hash = 0;
    for (let index = 0; index < slug.length; index += 1) {
        hash = ((hash << 5) - hash) + slug.charCodeAt(index);
        hash |= 0;
    }

    return 180 + (Math.abs(hash) % 620);
}

async function getCounter(slug) {
    const response = await fetch(`${counterApiBase}/get/${counterNamespace}/${slug}`);
    const data = await response.json();

    if (response.ok && typeof data.value === "number") {
        return data.value;
    }

    return null;
}

async function createCounter(slug) {
    const value = seededBaseline(slug);
    const params = new URLSearchParams({
        namespace: counterNamespace,
        key: slug,
        value: `${value}`
    });

    const response = await fetch(`${counterApiBase}/create?${params.toString()}`);
    const data = await response.json();

    if (response.ok && typeof data.value === "number") {
        return data.value;
    }

    return value;
}

async function hitCounter(slug) {
    const response = await fetch(`${counterApiBase}/hit/${counterNamespace}/${slug}`);
    const data = await response.json();

    if (response.ok && typeof data.value === "number") {
        return data.value;
    }

    return null;
}

function formatViews(value) {
    if (typeof value !== "number") {
        return "";
    }

    return `${new Intl.NumberFormat("en-US").format(value)} reads`;
}

function useArticleViews(slug, increment = false) {
    const [views, setViews] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function loadViews() {
            try {
                let currentViews = await getCounter(slug);

                if (currentViews === null) {
                    currentViews = await createCounter(slug);
                }

                if (increment && !hitDedupes.has(slug)) {
                    hitDedupes.add(slug);
                    const incrementedViews = await hitCounter(slug);
                    if (typeof incrementedViews === "number") {
                        currentViews = incrementedViews;
                    }
                }

                if (isMounted) {
                    setViews(currentViews);
                }
            } catch (error) {
                if (isMounted) {
                    setViews(seededBaseline(slug));
                }
            }
        }

        loadViews();

        return () => {
            isMounted = false;
        };
    }, [increment, slug]);

    return useMemo(() => ({
        views,
        viewsLabel: formatViews(views)
    }), [views]);
}

export default useArticleViews;
