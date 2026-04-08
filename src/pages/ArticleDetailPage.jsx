import React from "react";
import { Link, Redirect } from "react-router-dom";
import ArticleFrame from "../components/ArticleFrame";
import { getArticleBySlug } from "../content/articles";
import useArticleViews from "../hooks/useArticleViews";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ArticleDetailPage({ match }) {
    const article = getArticleBySlug(match.params.slug);
    const { views, viewsLabel } = useArticleViews(match.params.slug, true);

    useDocumentMeta({
        title: article ? `${article.title} | Articles | Radhakishan Jangid` : "Article | Radhakishan Jangid",
        description: article?.excerpt || "Article detail",
        image: article?.coverImage || "/images/rk-formal.jpg",
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
            mainEntityOfPage: `https://radhakishan404.github.io/articles/${article.slug}`,
            image: article.coverImage
                ? `https://radhakishan404.github.io${article.coverImage}`
                : "https://radhakishan404.github.io/images/rk-formal.jpg",
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
        <div className="page-shell shell">
            <section className="article-detail-header">
                <Link className="back-link" to="/articles">Back to articles</Link>
                <div className="article-card-meta">
                    <span className="meta-pill">{article.kind === "html" ? "HTML" : "Markdown"}</span>
                    <span>{article.readingTime}</span>
                    {article.date ? <span>{article.date}</span> : null}
                    {viewsLabel ? <span>{viewsLabel}</span> : null}
                </div>
                <h1>{article.title}</h1>
                <p className="lede article-lede">{article.excerpt}</p>
                {article.tags.length ? (
                    <div className="tag-row">
                        {article.tags.map((tag) => (
                            <span key={tag} className="tag-chip tag-chip-static">{tag}</span>
                        ))}
                    </div>
                ) : null}
            </section>

            <article className="article-prose" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
        </div>
    );
}

export default ArticleDetailPage;
