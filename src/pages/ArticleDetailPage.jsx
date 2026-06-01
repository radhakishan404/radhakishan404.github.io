import React from "react";
import { Link, Redirect } from "react-router-dom";
import ArticleFrame from "../components/ArticleFrame";
import { getArticleBySlug } from "../content/articles";
import { profileImages } from "../data/images";
import useArticleViews from "../hooks/useArticleViews";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ArticleDetailPage({ match }) {
    const article = getArticleBySlug(match.params.slug);
    const { views, viewsLabel } = useArticleViews(match.params.slug, true);
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";

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
            author: {
                "@type": "Person",
                name: "Radhakishan Jangid"
            },
            publisher: {
                "@type": "Person",
                name: "Radhakishan Jangid"
            },
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

    if (!article) {
        return <Redirect to="/articles" />;
    }

    if (article.kind === "html") {
        return <ArticleFrame html={article.raw} title={article.title} />;
    }

    return (
        <div className="page-wrap">
            <div className="container">
                <Link className="back-link" to="/articles">Back to Articles</Link>

                <div className="article-detail-header" data-reveal>
                    <div className="article-detail-meta">
                        <span>{article.kind === "html" ? "HTML" : "Markdown"}</span>
                        <span>{article.readingTime}</span>
                        {article.date ? <span>{article.date}</span> : null}
                        {viewsLabel ? <span>{viewsLabel}</span> : null}
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

                <article className="article-prose" data-reveal dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
            </div>
        </div>
    );
}

export default ArticleDetailPage;
