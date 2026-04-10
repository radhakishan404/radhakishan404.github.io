import React from "react";
import { Link } from "react-router-dom";
import useArticleViews from "../hooks/useArticleViews";

function ArticleCard({ article }) {
    const { viewsLabel } = useArticleViews(article.slug);
    const coverStyle = article.coverImage
        ? { backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62)), url(${article.coverImage})` }
        : article.accent
            ? { background: `linear-gradient(135deg, ${article.accent}22 0%, transparent 70%), var(--page-bg)` }
            : undefined;

    return (
        <article className="article-card" data-reveal>
            <Link className="article-card-preview" to={`/articles/${article.slug}`} aria-label={`Open ${article.title}`}>
                <div className={`article-card-cover${article.coverImage ? " has-image" : ""}`} style={coverStyle}>
                    <div className="article-card-cover-top">
                        <span className="article-cover-category">{article.category || "Article"}</span>
                        <span className="article-cover-kind">{article.kind === "html" ? "HTML" : "Markdown"}</span>
                    </div>
                    <div className="article-card-cover-body">
                        <h4>{article.title}</h4>
                        <p>{article.excerpt}</p>
                    </div>
                </div>
            </Link>

            <div className="article-card-body">
                <div className="article-card-meta">
                    <span className="meta-pill">{article.category || "Article"}</span>
                    <span>{article.readingTime}</span>
                    {article.date ? <span>{article.date}</span> : null}
                    {viewsLabel ? <span>{viewsLabel}</span> : null}
                </div>

                <h3>
                    <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                </h3>
                <p>{article.excerpt}</p>

                {article.tags.length ? (
                    <div className="tag-row">
                        {article.tags.slice(0, 4).map((tag) => (
                            <button key={tag} type="button" className="tag-chip tag-chip-static">
                                {tag}
                            </button>
                        ))}
                    </div>
                ) : null}

                <Link className="inline-link" to={`/articles/${article.slug}`}>[ open_article ]</Link>
            </div>
        </article>
    );
}

export default ArticleCard;
