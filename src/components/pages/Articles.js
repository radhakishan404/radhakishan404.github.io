import React, { useMemo, useState } from "react";
import PageFrame from "../common/PageFrame";
import { ARTICLES, ARTICLE_TOPICS } from "../../data/articles";

function ArticleRow({ article, index }) {
    return (
        <li className="article-index__item">
            <a href={article.href} target="_blank" rel="noreferrer">
                <span className="article-index__number">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <div className="article-index__image">
                    {article.cover ? (
                        <img
                            src={article.cover}
                            alt={`${article.title} cover`}
                            loading="lazy"
                        />
                    ) : (
                        <span className="article-index__fallback" aria-hidden="true">
                            <small>{article.category}</small>
                            <strong>{article.title}</strong>
                        </span>
                    )}
                </div>
                <div className="article-index__copy">
                    <span>{article.category}</span>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                </div>
                {article.date ? <time>{article.date}</time> : <span aria-hidden="true" />}
                <span className="article-index__action">
                    Read <b aria-hidden="true">↗</b>
                </span>
            </a>
        </li>
    );
}

function Articles() {
    const [query, setQuery] = useState("");
    const [topic, setTopic] = useState("All");

    const visibleArticles = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return ARTICLES.filter((article) => {
            const matchesTopic = topic === "All" || article.topic === topic;
            const matchesQuery = !normalizedQuery
                || article.title.toLowerCase().includes(normalizedQuery)
                || article.excerpt.toLowerCase().includes(normalizedQuery)
                || article.category.toLowerCase().includes(normalizedQuery)
                || article.topic.toLowerCase().includes(normalizedQuery);
            return matchesTopic && matchesQuery;
        });
    }, [query, topic]);

    const isFiltering = Boolean(query.trim()) || topic !== "All";
    const featuredArticle = ARTICLES[0];
    const indexedArticles = isFiltering ? visibleArticles : visibleArticles.slice(1);

    const clearFilters = () => {
        setQuery("");
        setTopic("All");
    };

    return (
        <PageFrame className="articles-page articles-page--editorial" title="Articles">
            <section className="page-hero page-hero--compact page-shell articles-hero">
                <div className="page-hero__copy">
                    <p className="page-eyebrow">Writing</p>
                    <h1>Guides you can use, not just bookmark.</h1>
                    <p>Start with one practical guide or browse the full archive by topic.</p>
                </div>
                <p className="articles-hero__count">
                    <strong>{ARTICLES.length}</strong>
                    <span>Published articles</span>
                </p>
            </section>

            <section className="articles-index page-shell" aria-label="Article collection">
                <div className="article-browser">
                    <div className="article-search">
                        <label htmlFor="article-search">
                            <span>Search the archive</span>
                            <input
                                id="article-search"
                                type="search"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Try prompts, models, career..."
                            />
                        </label>
                    </div>

                    <fieldset className="article-topic-filter">
                        <legend>Browse by topic</legend>
                        <div>
                            {ARTICLE_TOPICS.map((item) => (
                                <button
                                    type="button"
                                    className={topic === item ? "is-active" : ""}
                                    aria-pressed={topic === item}
                                    onClick={() => setTopic(item)}
                                    key={item}
                                >
                                    {item === "All" ? "All writing" : item}
                                </button>
                            ))}
                        </div>
                    </fieldset>

                    <div className="article-browser__status" role="status">
                        <p>
                            Showing <strong>{visibleArticles.length}</strong> of {ARTICLES.length}
                        </p>
                        {isFiltering ? (
                            <button type="button" onClick={clearFilters}>Clear filters</button>
                        ) : null}
                    </div>
                </div>

                {!isFiltering ? (
                    <section className="article-feature" aria-labelledby="featured-article-title">
                        <div className="article-section-heading">
                            <p className="page-eyebrow">Start here</p>
                            <span>Featured guide</span>
                        </div>
                        <a href={featuredArticle.href} target="_blank" rel="noreferrer">
                            <figure>
                                <img
                                    src={featuredArticle.cover}
                                    alt={`${featuredArticle.title} cover`}
                                />
                            </figure>
                            <div className="article-feature__copy">
                                <div>
                                    <span>{featuredArticle.category}</span>
                                    <time>{featuredArticle.date}</time>
                                </div>
                                <h2 id="featured-article-title">{featuredArticle.title}</h2>
                                <p>{featuredArticle.excerpt}</p>
                                <strong>Read featured guide <b aria-hidden="true">↗</b></strong>
                            </div>
                        </a>
                    </section>
                ) : null}

                <section className="article-archive" aria-labelledby="article-archive-title">
                    <div className="article-section-heading">
                        <div>
                            <p className="page-eyebrow">{isFiltering ? "Results" : "Full archive"}</p>
                            <h2 id="article-archive-title">
                                {isFiltering ? "Matching articles" : "Browse all writing"}
                            </h2>
                        </div>
                        <span>{indexedArticles.length} {indexedArticles.length === 1 ? "article" : "articles"}</span>
                    </div>

                    {indexedArticles.length ? (
                        <ol className="article-index">
                            {indexedArticles.map((article, index) => (
                                <ArticleRow article={article} index={index} key={article.slug} />
                            ))}
                        </ol>
                    ) : (
                        <div className="articles-empty">
                            <h2>No matching articles</h2>
                            <p>Try another word or choose a broader topic.</p>
                            <button type="button" onClick={clearFilters}>Show all writing</button>
                        </div>
                    )}
                </section>
            </section>
        </PageFrame>
    );
}

export default Articles;
