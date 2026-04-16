import React from "react";
import { Link } from "react-router-dom";
import HeroImageShowcase from "../components/HeroImageShowcase";
import { articles } from "../content/articles";
import { logoImages, profileImages } from "../data/images";
import { heroStats } from "../data/site";
import useTypewriter from "../hooks/useTypewriter";
import useDocumentMeta from "../hooks/useDocumentMeta";
import usePublicRepos from "../hooks/usePublicRepos";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function HomePage() {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";
    const featuredProjects = softdata.project.slice(0, 4);
    const featuredArticles = [...articles]
        .sort((a, b) => {
            const dateA = a.sortDate ? new Date(a.sortDate).getTime() : 0;
            const dateB = b.sortDate ? new Date(b.sortDate).getTime() : 0;
            return dateB - dateA;
        })
        .slice(0, 3);
    const { repos } = usePublicRepos();
    const terminalStats = [
        { key: "experience", value: `${heroStats[0]?.value || "7+"} years` },
        { key: "frontend", value: heroStats[1]?.value || "React" },
        { key: "backend", value: heroStats[2]?.value === "Node" ? "Node.js" : heroStats[2]?.value || "Node.js" }
    ];
    const typedTitle = useTypewriter({
        phrases: [
            "Senior software engineer",
            "Full stack builder",
            "React + Node specialist",
            "Product-focused developer"
        ],
        typingSpeed: 80,
        deletingSpeed: 40,
        pauseDuration: 1800
    });
    const terminalLines = [
        "$ whoami",
        "> Senior SWE, Mumbai",
        "> React · Node · Mobile",
        "> AI prototypes + product"
    ];

    useDocumentMeta({
        title: "Radhakishan Jangid",
        description: "Senior software engineer building product systems, frontend experiences, public software projects, and AI-focused technical content.",
        image: profileImages.hero,
        type: "website",
        structuredData: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    name: "Radhakishan Jangid",
                    jobTitle: "Senior Software Engineer",
                    url: `${siteUrl}/`,
                    image: `${siteUrl}${profileImages.hero}`,
                    sameAs: [
                        "https://github.com/radhakishan404",
                        "https://www.linkedin.com/in/radhakishanjangid",
                        "https://dev.to/radhakishanjangid404"
                    ]
                },
                {
                    "@type": "WebSite",
                    name: "Radhakishan Jangid",
                    url: `${siteUrl}/`
                }
            ]
        }
    });

    return (
        <div className="page-shell shell">
            <section className="home-hero" data-reveal>
                <div className="home-hero-copy">
                    <span className="eyebrow">// hello, world</span>
                    <h1 className="hero-name">
                        <span>RADHAKISHAN</span>
                        <span>JANGID</span>
                    </h1>
                    <p className="hero-typing">
                        <span>{typedTitle}</span>
                        <span className="typing-cursor" aria-hidden="true">|</span>
                    </p>
                    <p className="lede">
                        Mumbai based. Focused on React, Node.js, mobile apps, internal systems, and public-facing product builds.
                    </p>

                    <div className="hero-actions">
                        <Link className="button-primary" to="/projects">[ view_projects.sh ]</Link>
                        <Link className="button-secondary" to="/articles">[ read_articles.md ]</Link>
                    </div>

                    <div className="hero-stat-row">
                        {terminalStats.map((item) => (
                            <div key={item.key} className="hero-stat">
                                <span>{item.key}</span>
                                <span>→</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-side" data-reveal>
                    <HeroImageShowcase />
                    <div className="terminal-card">
                        <div className="terminal-brand">
                            <img src={logoImages.stack} alt="Radhakishan logo" />
                        </div>
                        <div className="terminal-card-head">
                            <span className="terminal-control is-red" />
                            <span className="terminal-control is-yellow" />
                            <span className="terminal-control is-green" />
                        </div>
                        {terminalLines.map((line, index) => (
                            <p
                                key={line}
                                className={`terminal-line${index === terminalLines.length - 1 ? " is-last" : ""}`}
                                style={{ animationDelay: `${index * 260 + 220}ms` }}
                            >
                                {line}
                                {index === terminalLines.length - 1 ? <span className="terminal-line-cursor">|</span> : null}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <div className="ascii-divider" aria-hidden="true">/* ────────────────────── */</div>

            <section className="section-stack" data-reveal>
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">/* selected_work */</span>
                        <h2>Featured projects</h2>
                    </div>
                    <Link className="inline-link" to="/projects">[ all_projects ]</Link>
                </div>
                <div className="project-grid project-grid-home">
                    {featuredProjects.map((project) => (
                        <article key={project.id} className="surface-card project-card" data-reveal>
                            <div className="project-card-path">~/projects/{slugify(project.title)}</div>
                            <div className="project-visual">
                                <img src={project.thumbnail} alt={`${project.title} preview`} />
                            </div>
                            <div className="project-card-top">
                                <h3>{project.title}</h3>
                                <span className="meta-pill">{project.date || "Case study"}</span>
                            </div>
                            <p>{project.description}</p>
                            <div className="tag-row">
                                {project.technology.split(",").slice(0, 4).map((item) => (
                                    <span key={item} className="tag-chip tag-chip-static">&lt;{item.trim().toLowerCase()}&gt;</span>
                                ))}
                            </div>
                            <div className="project-card-links">
                                <Link className="inline-link" to={`/projects/${slugify(project.title)}`}>[ case_study ]</Link>
                                {project.onlineLink ? <a className="inline-link" href={project.onlineLink} target="_blank" rel="noreferrer">[ live_link ]</a> : null}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <div className="ascii-divider" aria-hidden="true">// ==================== //</div>

            {repos.length ? (
                <section className="section-stack" data-reveal>
                    <div className="section-heading section-heading-row">
                        <div>
                            <span className="eyebrow">/* github_recent */</span>
                            <h2>Recent GitHub projects</h2>
                        </div>
                        <a className="inline-link" href="https://github.com/radhakishan404?tab=repositories" target="_blank" rel="noreferrer">[ github_profile ]</a>
                    </div>
                    <div className="public-grid">
                        {repos.slice(0, 3).map((repo) => (
                            <article key={repo.id} className="surface-card public-card" data-reveal>
                                <div className="public-card-top terminal-window-top">
                                    <span className="terminal-window-title">
                                        <span className="terminal-dot" />
                                        {repo.name}
                                    </span>
                                    <span className="public-star">★ {repo.stargazers_count}</span>
                                </div>
                                <p>{repo.description || "Public GitHub repository."}</p>
                                <div className="tag-row">
                                    <span className="meta-pill">[PUBLIC]</span>
                                </div>
                                <div className="project-card-links">
                                    <a className="inline-link" href={repo.html_url} target="_blank" rel="noreferrer">$ git clone</a>
                                    {repo.homepage ? <a className="inline-link" href={repo.homepage} target="_blank" rel="noreferrer">[ live_demo ]</a> : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}

            <div className="ascii-divider" aria-hidden="true">/* ────────────────────── */</div>

            <section className="section-stack" data-reveal>
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">/* writing */</span>
                        <h2>Recent articles</h2>
                    </div>
                    <Link className="inline-link" to="/articles">[ all_articles ]</Link>
                </div>

                <div className="surface-card article-directory" data-reveal>
                    <p className="directory-head">drwxr-xr-x  articles/</p>
                    <div className="directory-list">
                        {featuredArticles.map((article, index) => {
                            const extension = article.kind === "html" ? "html" : "md";
                            const branch = index === featuredArticles.length - 1 ? "└──" : "├──";

                            return (
                                <Link key={article.slug} className="directory-row" to={`/articles/${article.slug}`}>
                                    <span className="directory-branch">{branch}</span>
                                    <span className="directory-kind">[{article.kind === "html" ? "HTML" : "MD"}]</span>
                                    <span className="directory-file">{article.slug}.{extension}</span>
                                    <span className="directory-time">{article.readingTime}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
