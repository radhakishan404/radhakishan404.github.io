import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../content/articles";
import { heroStats } from "../data/site";
import useDocumentMeta from "../hooks/useDocumentMeta";
import usePublicRepos from "../hooks/usePublicRepos";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function HomePage() {
    const featuredProjects = softdata.project.slice(0, 4);
    const featuredArticles = articles.slice(0, 3);
    const { repos } = usePublicRepos();

    useDocumentMeta({
        title: "Radhakishan Jangid",
        description: "Senior software engineer building product systems, frontend experiences, public software projects, and AI-focused technical content.",
        image: "/images/rk-formal.jpg",
        type: "website",
        structuredData: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    name: "Radhakishan Jangid",
                    jobTitle: "Senior Software Engineer",
                    url: "https://radhakishan404.github.io/",
                    image: "https://radhakishan404.github.io/images/rk-formal.jpg",
                    sameAs: [
                        "https://github.com/radhakishan404",
                        "https://www.linkedin.com/in/radhakishanjangid",
                        "https://dev.to/radhakishanjangid404"
                    ]
                },
                {
                    "@type": "WebSite",
                    name: "Radhakishan Jangid",
                    url: "https://radhakishan404.github.io/"
                }
            ]
        }
    });

    return (
        <div className="page-shell shell">
            <section className="home-hero">
                <div className="home-hero-copy motion-rise">
                    <span className="eyebrow">Radhakishan Jangid</span>
                    <h1>Senior software engineer building fast, useful products.</h1>
                    <p className="lede">
                        Mumbai based. Focused on React, Node.js, mobile apps, internal systems, and public-facing product builds.
                    </p>
                    <div className="hero-actions">
                        <Link className="button-primary" to="/projects">View projects</Link>
                        <Link className="button-secondary" to="/articles">Read articles</Link>
                    </div>
                    <div className="hero-stat-row">
                        {heroStats.map((item) => (
                            <div key={item.label} className="hero-stat">
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portrait-panel motion-rise motion-delay-1">
                    <img src="/images/radhakishan-web-2.jpg" alt="Radhakishan Jangid portrait" />
                    <div className="portrait-caption">
                        <span>Current focus</span>
                        <strong>React interfaces, backend delivery, AI prototypes, and product execution.</strong>
                    </div>
                </div>
            </section>

            <section className="section-stack">
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">Selected work</span>
                        <h2>Featured projects</h2>
                    </div>
                    <Link className="inline-link" to="/projects">All projects</Link>
                </div>
                <div className="project-grid">
                    {featuredProjects.map((project, index) => (
                        <article key={project.id} className="surface-card project-card motion-rise" style={{ animationDelay: `${index * 90}ms` }}>
                            <div className="project-visual">
                                <img src={project.thumbnail} alt={`${project.title} preview`} />
                            </div>
                            <div className="project-card-top">
                                <img className="project-logo" src={project.logo} alt={`${project.title} logo`} />
                                <span className="meta-pill">{project.date || "Case study"}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tag-row">
                                {project.technology.split(",").slice(0, 4).map((item) => (
                                    <span key={item} className="tag-chip tag-chip-static">{item.trim()}</span>
                                ))}
                            </div>
                            <div className="project-card-links">
                                <Link className="inline-link" to={`/projects/${slugify(project.title)}`}>Case study</Link>
                                {project.onlineLink ? <a className="inline-link" href={project.onlineLink} target="_blank" rel="noreferrer">Live link</a> : null}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {repos.length ? (
                <section className="section-stack">
                    <div className="section-heading section-heading-row">
                        <div>
                            <span className="eyebrow">Public work</span>
                            <h2>Recent GitHub projects</h2>
                        </div>
                        <a className="inline-link" href="https://github.com/radhakishan404?tab=repositories" target="_blank" rel="noreferrer">GitHub profile</a>
                    </div>
                    <div className="public-grid">
                        {repos.slice(0, 3).map((repo, index) => (
                            <article key={repo.id} className="surface-card public-card motion-rise" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="public-card-top">
                                    <span className="meta-pill">Public</span>
                                    <span className="public-star">★ {repo.stargazers_count}</span>
                                </div>
                                <h3>{repo.name}</h3>
                                <p>{repo.description || "Public GitHub repository."}</p>
                                <div className="project-card-links">
                                    <a className="inline-link" href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
                                    {repo.homepage ? <a className="inline-link" href={repo.homepage} target="_blank" rel="noreferrer">Live demo</a> : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}

            <section className="section-stack">
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">Writing</span>
                        <h2>Recent articles</h2>
                    </div>
                    <Link className="inline-link" to="/articles">All articles</Link>
                </div>
                <div className="info-grid">
                    {featuredArticles.map((article, index) => (
                        <article key={article.slug} className="surface-card compact-article-card motion-rise" style={{ animationDelay: `${index * 120}ms` }}>
                            <div className="article-card-meta">
                                <span className="meta-pill">{article.kind === "html" ? "HTML" : "Markdown"}</span>
                                <span>{article.readingTime}</span>
                            </div>
                            <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                            <Link className="inline-link" to={`/articles/${article.slug}`}>Read article</Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;
