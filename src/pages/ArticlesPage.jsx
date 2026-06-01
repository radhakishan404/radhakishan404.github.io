import React, { useState } from "react";
import { Link } from "react-router-dom";
import { articles, getArticleTags } from "../content/articles";
import { profileImages } from "../data/images";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ArticlesPage() {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [tagFilter, setTagFilter] = useState("all");

    const tags = getArticleTags();
    const normalizedQuery = query.trim().toLowerCase();
    const filteredArticles = articles.filter((article) => {
        const matchesQuery =
            !normalizedQuery ||
            article.title.toLowerCase().includes(normalizedQuery) ||
            article.excerpt.toLowerCase().includes(normalizedQuery);
        const matchesType = typeFilter === "all" || article.kind === typeFilter;
        const matchesTag = tagFilter === "all" || article.tags.includes(tagFilter);
        return matchesQuery && matchesType && matchesTag;
    });

    const featuredArticle = articles.find((article) => article.featured) || articles[0];

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
                    {["all", "markdown", "html"].map((option) => (
                        <button
                            key={option}
                            type="button"
                            className={`filter-chip${typeFilter === option ? " is-active" : ""}`}
                            onClick={() => setTypeFilter(option)}
                        >
                            {option === "all" ? "All" : option.toUpperCase()}
                        </button>
                    ))}
                </div>

                {tags.length > 0 && (
                    <div className="filter-bar" style={{ marginBottom: 48 }} data-reveal>
                        <button
                            type="button"
                            className={`filter-chip${tagFilter === "all" ? " is-active" : ""}`}
                            onClick={() => setTagFilter("all")}
                        >
                            All Tags
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
                )}

                <div className="article-list">
                    {filteredArticles.map((article) => (
                        <Link key={article.slug} className="article-list-item" to={`/articles/${article.slug}`} data-reveal>
                            <div>
                                <h3>{article.title}</h3>
                                <p style={{ color: "var(--color-text-dim)", fontSize: 14, marginTop: 4 }}>{article.excerpt.slice(0, 120)}</p>
                            </div>
                            <div className="article-list-meta">
                                <span>{article.readingTime}</span>
                                {article.date ? <span>{article.date}</span> : null}
                                <span style={{ textTransform: "uppercase", fontSize: 11 }}>{article.kind}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <p style={{ color: "var(--color-text-muted)", textAlign: "center", padding: "60px 0" }} data-reveal>
                        No articles match your filters.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ArticlesPage;
