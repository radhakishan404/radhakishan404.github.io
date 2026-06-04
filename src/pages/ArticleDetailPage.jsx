import React from "react";
import { Link, Redirect } from "react-router-dom";
import AdSlot from "../components/AdSlot";
import MagneticButton from "../components/MagneticButton";
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
                    {(article.tags.length > 0 || article.githubUrl) && (
                        <div className="article-detail-actions">
                            {article.tags.length > 0 && (
                                <div className="tag-row">
                                    {article.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                            {article.githubUrl && (
                                <MagneticButton
                                    as="a"
                                    className="btn btn-github"
                                    href={article.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }}>
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                    View on GitHub
                                </MagneticButton>
                            )}
                        </div>
                    )}
                </div>

                <AdSlot slot="ARTICLE_TOP_SLOT" className="article-ad-slot" />

                <article className="article-prose" data-reveal dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />

                <AdSlot slot="ARTICLE_BOTTOM_SLOT" className="article-ad-slot" />

                <div className="article-footer-nav" data-reveal>
                    {article.githubUrl && (
                        <a className="btn" href={article.githubUrl} target="_blank" rel="noreferrer" style={{ marginRight: 12 }}>
                            View Source Code
                        </a>
                    )}
                    <Link className="btn" to="/articles">Browse All Articles</Link>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetailPage;
