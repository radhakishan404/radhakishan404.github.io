import React, { useState } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";
import TiltCard from "../components/TiltCard";
import { articles, getArticleTags } from "../content/articles";
import { profileImages } from "../data/images";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ArticlesPage() {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";
    const [query, setQuery] = useState("");
    const [tagFilter, setTagFilter] = useState("all");

    const tags = getArticleTags();
    const normalizedQuery = query.trim().toLowerCase();
    const filteredArticles = articles.filter((article) => {
        const matchesQuery =
            !normalizedQuery ||
            article.title.toLowerCase().includes(normalizedQuery) ||
            article.excerpt.toLowerCase().includes(normalizedQuery);
        const matchesTag = tagFilter === "all" || article.tags.includes(tagFilter);
        return matchesQuery && matchesTag;
    });

    const featuredArticle = filteredArticles.find((a) => a.featured) || filteredArticles[0];
    const restArticles = filteredArticles.filter((a) => a !== featuredArticle);

    useDocumentMeta({
        title: "Articles | Radhakishan Jangid",
        description: "AI prompts, developer content systems, carousel workflows, public write-ups, and practical technical articles for developers and creators.",
        image: featuredArticle?.coverImage || profileImages.article,
        type: "website",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Articles by Radhakishan Jangid",
            description: "AI prompts, developer content systems, public write-ups, and practical technical articles.",
            url: `${siteUrl}/articles/`,
            mainEntity: filteredArticles.slice(0, 10).map((article) => ({
                "@type": "Article",
                headline: article.title,
                url: `${siteUrl}/articles/${article.slug}/`,
                datePublished: article.sortDate || undefined
            }))
        }
    });

    return (
        <div className="page-wrap">
            <div className="container">
                <section data-reveal>
                    <p className="page-eyebrow">Blog &amp; Guides</p>
                    <h1 style={{ marginBottom: 12 }}>Articles</h1>
                    <p style={{ color: "var(--color-text-muted)", fontSize: 18, maxWidth: 640, marginBottom: 40 }}>
                        AI prompts, developer content systems, and practical technical articles for developers and creators.
                    </p>
                </section>

                <div className="filter-bar" data-reveal>
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search articles..."
                    />
                    <button
                        type="button"
                        className={`filter-chip${tagFilter === "all" ? " is-active" : ""}`}
                        onClick={() => setTagFilter("all")}
                    >
                        All
                    </button>
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            className={`filter-chip${tagFilter === tag ? " is-active" : ""}`}
                            onClick={() => setTagFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {featuredArticle && (
                    <Link className="article-featured" to={`/articles/${featuredArticle.slug}`} data-reveal>
                        <div className="article-featured-img">
                            <img
                                src={featuredArticle.coverImage}
                                alt={featuredArticle.title}
                                loading="eager"
                                onError={(e) => { e.target.style.display = "none"; }}
                            />
                        </div>
                        <div className="article-featured-body">
                            <div className="article-featured-badges">
                                {featuredArticle.featured && <span className="badge badge--featured">Featured</span>}
                                <span className="badge">{featuredArticle.category || "Article"}</span>
                            </div>
                            <h2>{featuredArticle.title}</h2>
                            <p>{featuredArticle.excerpt}</p>
                            <div className="article-featured-meta">
                                <span>{featuredArticle.readingTime}</span>
                                {featuredArticle.date && <span>{featuredArticle.date}</span>}
                            </div>
                        </div>
                    </Link>
                )}

                <div className="article-card-grid">
                    {restArticles.map((article, i) => (
                        <TiltCard key={article.slug} className="article-card shine-card" data-reveal data-reveal-delay={`${(i % 3) + 1}`}>
                            <Link to={`/articles/${article.slug}`} className="article-card-link">
                                <div className="article-card-cover">
                                    <img
                                        src={article.coverImage}
                                        alt={article.title}
                                        loading="lazy"
                                        onError={(e) => { e.target.style.display = "none"; }}
                                    />
                                    <span className="article-card-category">{article.category || "Article"}</span>
                                </div>
                                <div className="article-card-body">
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt.slice(0, 120)}{article.excerpt.length > 120 ? "..." : ""}</p>
                                    <div className="article-card-meta">
                                        <span>{article.readingTime}</span>
                                        {article.date && <span>{article.date}</span>}
                                    </div>
                                </div>
                            </Link>
                        </TiltCard>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <p style={{ color: "var(--color-text-muted)", textAlign: "center", padding: "60px 0" }} data-reveal>
                        No articles match your search.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ArticlesPage;
