import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { articles, getArticleTags } from "../content/articles";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ArticlesPage() {
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
        image: featuredArticle?.coverImage || "/images/rk-formal.jpg",
        type: "website",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Articles by Radhakishan Jangid",
            description: "AI prompts, developer content systems, public write-ups, and practical technical articles.",
            url: "https://radhakishan404.github.io/articles",
            mainEntity: filteredArticles.slice(0, 10).map((article) => ({
                "@type": "Article",
                headline: article.title,
                url: `https://radhakishan404.github.io/articles/${article.slug}`,
                datePublished: article.sortDate || undefined
            }))
        }
    });

    return (
        <div className="page-shell shell">
            <section className="articles-hero">
                <div className="articles-hero-copy">
                    <span className="eyebrow">Articles</span>
                    <h1>Prompts, AI workflows, dev content, and creator systems.</h1>
                    <p className="lede">
                        Better articles for AI learners, developers, and tech creators. Less filler, more useful content.
                    </p>
                    <div className="article-hero-stats">
                        <div className="hero-stat">
                            <strong>{articles.length}</strong>
                            <span>Published pieces</span>
                        </div>
                        <div className="hero-stat">
                            <strong>{tags.length}</strong>
                            <span>Topics covered</span>
                        </div>
                        <div className="hero-stat">
                            <strong>{articles.filter((item) => item.kind === "html").length}</strong>
                            <span>Interactive pages</span>
                        </div>
                    </div>
                </div>

                {featuredArticle ? (
                    <Link className="featured-article" to={`/articles/${featuredArticle.slug}`}>
                        <div
                            className={`featured-article-media${featuredArticle.coverImage ? " has-image" : ""}`}
                            style={featuredArticle.coverImage ? { backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.7)), url(${featuredArticle.coverImage})` } : undefined}
                        >
                            <div className="featured-article-inner">
                                <span className="featured-label">Featured</span>
                                <h2>{featuredArticle.title}</h2>
                                <p>{featuredArticle.excerpt}</p>
                                <div className="article-card-meta">
                                    <span className="meta-pill">{featuredArticle.category}</span>
                                    <span>{featuredArticle.readingTime}</span>
                                    {featuredArticle.date ? <span>{featuredArticle.date}</span> : null}
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : null}
            </section>

            <section className="surface-card filter-panel">
                <div className="filter-panel-row">
                    <label className="search-field">
                        <span>Search</span>
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search title, excerpt, or topic"
                        />
                    </label>

                    <div className="filter-group">
                        <span>Type</span>
                        <div className="tag-row">
                            {["all", "markdown", "html"].map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    className={`tag-chip${typeFilter === option ? " is-active" : ""}`}
                                    onClick={() => setTypeFilter(option)}
                                >
                                    {option === "all" ? "All" : option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {tags.length ? (
                        <div className="filter-group">
                            <span>Tags</span>
                            <div className="tag-row">
                                <button
                                    type="button"
                                    className={`tag-chip${tagFilter === "all" ? " is-active" : ""}`}
                                    onClick={() => setTagFilter("all")}
                                >
                                    All
                                </button>
                                {tags.map((tag) => (
                                    <button
                                        key={tag}
                                        type="button"
                                        className={`tag-chip${tagFilter === tag ? " is-active" : ""}`}
                                        onClick={() => setTagFilter(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </section>

            <section className="article-grid article-grid-large">
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                ))}
            </section>
        </div>
    );
}

export default ArticlesPage;
