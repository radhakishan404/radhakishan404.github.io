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
    const workingNotes = [
        "Frontend systems that stay fast, accessible, and maintainable after launch.",
        "APIs, admin workflows, and mobile surfaces shaped around real product constraints.",
        "Technical writing that turns useful engineering patterns into public learning assets."
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
                    <span className="eyebrow">Senior software engineer · Mumbai</span>
                    <h1 className="hero-name">
                        <span>Radhakishan</span>
                        <span>Jangid</span>
                    </h1>
                    <p className="hero-typing">
                        <span>{typedTitle}</span>
                        <span className="typing-cursor" aria-hidden="true">|</span>
                    </p>
                    <p className="lede">
                        I design and ship React, Node.js, mobile, and AI-assisted product systems with a bias for crisp interfaces and reliable delivery.
                    </p>

                    <div className="hero-actions">
                        <Link className="button-primary" to="/projects">View selected work</Link>
                        <Link className="button-secondary" to="/contact">Start a conversation</Link>
                    </div>

                </div>

                <div className="hero-side" data-reveal>
                    <HeroImageShowcase />
                    <div className="portfolio-note">
                        <div className="portfolio-note-brand">
                            <img src={logoImages.stack} alt="Radhakishan logo" />
                        </div>
                        <p>Available for product engineering, frontend systems, backend APIs, and focused AI prototypes.</p>
                    </div>
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
            </section>

            <section className="section-stack" data-reveal>
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">Selected work</span>
                        <h2>Featured projects</h2>
                    </div>
                    <Link className="inline-link" to="/projects">All projects</Link>
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
                                <Link className="inline-link" to={`/projects/${slugify(project.title)}`}>Case study</Link>
                                {project.onlineLink ? <a className="inline-link" href={project.onlineLink} target="_blank" rel="noreferrer">Live link</a> : null}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="working-strip" data-reveal>
                <div className="section-heading">
                    <span className="eyebrow">Working method</span>
                    <h2>Product thinking with senior engineering follow-through.</h2>
                </div>
                <div className="working-list">
                    {workingNotes.map((note, index) => (
                        <p key={note}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            {note}
                        </p>
                    ))}
                </div>
            </section>

            {repos.length ? (
                <section className="section-stack" data-reveal>
                    <div className="section-heading section-heading-row">
                        <div>
                            <span className="eyebrow">GitHub recent</span>
                            <h2>Recent GitHub projects</h2>
                        </div>
                        <a className="inline-link" href="https://github.com/radhakishan404?tab=repositories" target="_blank" rel="noreferrer">GitHub profile</a>
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
                                    <span className="meta-pill">Public</span>
                                </div>
                                <div className="project-card-links">
                                    <a className="inline-link" href={repo.html_url} target="_blank" rel="noreferrer">Repository</a>
                                    {repo.homepage ? <a className="inline-link" href={repo.homepage} target="_blank" rel="noreferrer">Live demo</a> : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}

            <section className="section-stack" data-reveal>
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">Writing</span>
                        <h2>Recent articles</h2>
                    </div>
                    <Link className="inline-link" to="/articles">All articles</Link>
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
