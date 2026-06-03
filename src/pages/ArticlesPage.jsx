import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard";
import { articles, getArticleCategories, getArticleTags } from "../content/articles";
import { profileImages } from "../data/images";
import useDocumentMeta from "../hooks/useDocumentMeta";

const SORT_OPTIONS = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "title-az", label: "Title A–Z" },
    { value: "title-za", label: "Title Z–A" },
    { value: "reading-time", label: "Quick Reads First" }
];

function ArticlesPage() {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [tag, setTag] = useState("all");
    const [sortBy, setSortBy] = useState("newest");

    const categories = getArticleCategories();
    const tags = getArticleTags();

    const filteredArticles = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        const filtered = articles.filter((article) => {
            if (normalizedQuery && !article.title.toLowerCase().includes(normalizedQuery) && !article.excerpt.toLowerCase().includes(normalizedQuery)) return false;
            if (category !== "all" && (article.category || "Article") !== category) return false;
            if (tag !== "all" && !article.tags.includes(tag)) return false;
            return true;
        });

        const sorted = [...filtered];
        switch (sortBy) {
            case "oldest":
                sorted.sort((a, b) => {
                    const da = a.sortDate ? new Date(a.sortDate).getTime() : 0;
                    const db = b.sortDate ? new Date(b.sortDate).getTime() : 0;
                    return da - db;
                });
                break;
            case "title-az":
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "title-za":
                sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "reading-time":
                sorted.sort((a, b) => {
                    const ma = parseInt(a.readingTime) || 0;
                    const mb = parseInt(b.readingTime) || 0;
                    return ma - mb;
                });
                break;
            default:
                break;
        }

        return sorted;
    }, [query, category, tag, sortBy]);

    const featuredArticle = sortBy === "newest"
        ? (filteredArticles.find((a) => a.featured) || filteredArticles[0])
        : filteredArticles[0];
    const restArticles = filteredArticles.filter((a) => a !== featuredArticle);

    const hasActiveFilters = category !== "all" || tag !== "all" || sortBy !== "newest" || query.trim();

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

                <div className="article-filters" data-reveal>
                    <div className="article-filters-row">
                        <input
                            type="search"
                            className="filter-search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles..."
                        />
                        <select
                            className="filter-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {categories.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <select
                            className="filter-select"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        >
                            <option value="all">All Tags</option>
                            {tags.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        <select
                            className="filter-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            {SORT_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="article-filters-info">
                        <span className="filter-count">{filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}</span>
                        {hasActiveFilters && (
                            <button
                                type="button"
                                className="filter-clear"
                                onClick={() => { setQuery(""); setCategory("all"); setTag("all"); setSortBy("newest"); }}
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
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
                        No articles match your filters.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ArticlesPage;
