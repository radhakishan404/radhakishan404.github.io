import React, { useEffect, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import AdSlot from "../components/AdSlot";
import { getArticleBySlug } from "../content/articles";
import { profileImages } from "../data/images";
import useArticleViews from "../hooks/useArticleViews";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ArticleDetailPage({ match }) {
    const article = getArticleBySlug(match.params.slug);
    const { views, viewsLabel } = useArticleViews(match.params.slug, true);
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";
    const iframeRef = useRef(null);

    useDocumentMeta({
        title: article ? `${article.title} | Articles | Radhakishan Jangid` : "Article | Radhakishan Jangid",
        description: article?.excerpt || "Article detail",
        image: article?.coverImage || profileImages.article,
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
                ? `${siteUrl}${article.coverImage}`
                : `${siteUrl}${profileImages.article}`,
            keywords: article.tags.join(", "),
            interactionStatistic: typeof views === "number" ? {
                "@type": "InteractionCounter",
                interactionType: "https://schema.org/ReadAction",
                userInteractionCount: views
            } : undefined
        } : undefined
    });

    useEffect(() => {
        if (article?.kind !== "html" || !iframeRef.current) return;

        const iframe = iframeRef.current;
        const resizeIframe = () => {
            try {
                const doc = iframe.contentDocument || iframe.contentWindow?.document;
                if (doc?.body) {
                    iframe.style.height = `${doc.body.scrollHeight + 40}px`;
                }
            } catch (_) { /* cross-origin fallback */ }
        };

        iframe.addEventListener("load", resizeIframe);
        const interval = setInterval(resizeIframe, 1000);

        return () => {
            iframe.removeEventListener("load", resizeIframe);
            clearInterval(interval);
        };
    }, [article]);

    if (!article) {
        return <Redirect to="/articles" />;
    }

    return (
        <div className="page-wrap">
            <div className="container">
                <Link className="back-link" to="/articles">Back to Articles</Link>

                <div className="article-detail-header" data-reveal>
                    <div className="article-detail-meta">
                        <span className="badge">{article.category || "Article"}</span>
                        <span>{article.readingTime}</span>
                        {article.date && <span>{article.date}</span>}
                        {viewsLabel && <span>{viewsLabel}</span>}
                    </div>
                    <h1>{article.title}</h1>
                    <p style={{ color: "var(--color-text-muted)", fontSize: 18 }}>{article.excerpt}</p>
                    {article.tags.length > 0 && (
                        <div className="tag-row">
                            {article.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>

                <AdSlot slot="ARTICLE_TOP_SLOT" className="article-ad-slot" />

                {article.kind === "html" ? (
                    <div className="article-html-wrap" data-reveal>
                        <iframe
                            ref={iframeRef}
                            className="article-html-frame"
                            title={article.title}
                            srcDoc={article.raw}
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        />
                    </div>
                ) : (
                    <article className="article-prose" data-reveal dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
                )}

                <AdSlot slot="ARTICLE_BOTTOM_SLOT" className="article-ad-slot" />

                <div className="article-footer-nav" data-reveal>
                    <Link className="btn" to="/articles">Browse All Articles</Link>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetailPage;
