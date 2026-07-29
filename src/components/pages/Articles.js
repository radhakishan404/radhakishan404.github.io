import React, { useMemo, useState } from "react";
import PageFrame from "../common/PageFrame";
import { ARTICLES, ARTICLE_CATEGORIES } from "../../data/articles";

function Articles() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");

    const visibleArticles = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return ARTICLES.filter((article) => {
            const matchesCategory = category === "All" || article.category === category;
            const matchesQuery = !normalizedQuery
                || article.title.toLowerCase().includes(normalizedQuery)
                || article.excerpt.toLowerCase().includes(normalizedQuery);
            return matchesCategory && matchesQuery;
        });
    }, [category, query]);

    return (
        <PageFrame className="articles-page" title="Articles">
            <section className="page-hero page-hero--compact page-shell">
                <div className="page-hero__copy">
                    <p className="page-eyebrow">Articles</p>
                    <h1>Practical writing for developers and creators.</h1>
                    <p>Guides, prompt libraries, open-source breakdowns, and notes from building real products.</p>
                </div>
            </section>

            <section className="articles-index page-shell" aria-label="Article collection">
                <div className="article-controls">
                    <label>
                        <span>Search articles</span>
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search by title or topic"
                        />
                    </label>
                    <label>
                        <span>Category</span>
                        <select value={category} onChange={(event) => setCategory(event.target.value)}>
                            {ARTICLE_CATEGORIES.map((item) => (
                                <option value={item} key={item}>{item}</option>
                            ))}
                        </select>
                    </label>
                    <p>{visibleArticles.length} articles</p>
                </div>

                {visibleArticles.length ? (
                    <div className="articles-grid">
                        {visibleArticles.map((article) => (
                            <article className="article-card" key={article.slug}>
                                <a href={article.href} target="_blank" rel="noreferrer">
                                    <div className="article-card__image">
                                        <img src={article.cover} alt="" loading="lazy" />
                                    </div>
                                    <div className="article-card__body">
                                        <span>{article.category}</span>
                                        <h2>{article.title}</h2>
                                        <p>{article.excerpt}</p>
                                        <small>{article.date}</small>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="articles-empty">
                        <h2>No matching articles</h2>
                        <p>Try a broader search or choose another category.</p>
                        <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>
                            Clear filters
                        </button>
                    </div>
                )}
            </section>
        </PageFrame>
    );
}

export default Articles;
