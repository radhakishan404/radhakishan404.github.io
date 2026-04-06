import React from "react";
import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";
import usePublicRepos from "../hooks/usePublicRepos";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function ProjectsPage() {
    const { repos, loading } = usePublicRepos();

    useDocumentMeta({
        title: "Projects | Radhakishan Jangid",
        description: "Selected projects across product UI, web applications, shipped client work, and public software tools.",
        image: "/images/rk-formal.jpg",
        type: "website"
    });

    return (
        <div className="page-shell shell">
            <section className="page-hero page-hero-tight">
                <span className="eyebrow">Projects</span>
                <h1>Projects across product engineering, open source, and shipped client work.</h1>
                <p className="lede">
                    A cleaner index with visuals, direct links, and detail pages where deeper context already exists.
                </p>
            </section>

            <section className="section-stack">
                <div className="section-heading">
                    <h2>Case studies</h2>
                </div>
                <div className="project-grid">
                    {softdata.project.map((project, index) => (
                        <article key={project.id} className="surface-card project-card motion-rise" style={{ animationDelay: `${index * 70}ms` }}>
                            <div className="project-visual">
                                <img src={project.thumbnail} alt={`${project.title} preview`} />
                            </div>
                            <div className="project-card-top">
                                <img className="project-logo" src={project.logo} alt={`${project.title} logo`} />
                                <span className="meta-pill">{project.gitAvailable ? "GitHub" : "Project"}</span>
                            </div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="tag-row">
                                {project.tag.split(",").slice(0, 4).map((tag) => (
                                    <span key={tag} className="tag-chip tag-chip-static">{tag.trim()}</span>
                                ))}
                            </div>
                            <div className="project-card-links">
                                <Link className="inline-link" to={`/projects/${slugify(project.title)}`}>Read detail</Link>
                                {project.onlineLink ? (
                                    <a className="inline-link" href={project.onlineLink} target="_blank" rel="noreferrer">Open link</a>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-stack">
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">GitHub</span>
                        <h2>Public repositories</h2>
                    </div>
                    <a className="inline-link" href="https://github.com/radhakishan404?tab=repositories" target="_blank" rel="noreferrer">View all on GitHub</a>
                </div>
                <div className="public-grid">
                    {repos.map((repo, index) => (
                        <article key={repo.id} className="surface-card public-card motion-rise" style={{ animationDelay: `${index * 70}ms` }}>
                            <div className="public-card-top">
                                <span className="meta-pill">{repo.language || "Code"}</span>
                                <span className="public-star">★ {repo.stargazers_count}</span>
                            </div>
                            <h3>{repo.name}</h3>
                            <p>{repo.description || "Public GitHub repository."}</p>
                            <div className="public-meta">
                                <span>Updated {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                            </div>
                            <div className="project-card-links">
                                <a className="inline-link" href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
                                {repo.homepage ? <a className="inline-link" href={repo.homepage} target="_blank" rel="noreferrer">Live demo</a> : null}
                            </div>
                        </article>
                    ))}
                    {!loading && !repos.length ? (
                        <article className="surface-card public-card">
                            <h3>Public repositories</h3>
                            <p>GitHub data is unavailable right now. Refreshing later should bring the latest public projects back in.</p>
                        </article>
                    ) : null}
                </div>
            </section>
        </div>
    );
}

export default ProjectsPage;
