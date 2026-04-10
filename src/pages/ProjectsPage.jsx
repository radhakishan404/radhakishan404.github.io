import React from "react";
import { Link } from "react-router-dom";
import { profileImages } from "../data/images";
import useDocumentMeta from "../hooks/useDocumentMeta";
import usePublicRepos from "../hooks/usePublicRepos";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function ProjectsPage() {
    const { repos, loading } = usePublicRepos();

    useDocumentMeta({
        title: "Projects | Radhakishan Jangid",
        description: "Selected projects across product UI, web applications, shipped client work, and public software tools.",
        image: profileImages.meta,
        type: "website"
    });

    return (
        <div className="page-shell shell">
            <section className="page-hero page-hero-tight" data-reveal>
                <span className="eyebrow">/* projects */</span>
                <h1>Projects across product engineering, open source, and shipped client work.</h1>
                <p className="lede">
                    A cleaner index with visuals, direct links, and detail pages where deeper context already exists.
                </p>
            </section>

            <div className="ascii-divider" aria-hidden="true">/* ────────────────────── */</div>

            <section className="section-stack" data-reveal>
                <div className="section-heading">
                    <h2>Case studies</h2>
                </div>
                <div className="project-grid">
                    {softdata.project.map((project) => (
                        <article key={project.id} className="surface-card project-card" data-reveal>
                            <div className="project-card-path">~/projects/{slugify(project.title)}</div>
                            <div className="project-visual">
                                <img src={project.thumbnail} alt={`${project.title} preview`} />
                            </div>
                            <div className="project-card-top">
                                <h3>{project.title}</h3>
                                <span className="meta-pill">{project.gitAvailable ? "GitHub" : "Project"}</span>
                            </div>
                            <p>{project.description}</p>
                            <div className="tag-row">
                                {project.tag.split(",").slice(0, 4).map((tag) => (
                                    <span key={tag} className="tag-chip tag-chip-static">&lt;{tag.trim().toLowerCase()}&gt;</span>
                                ))}
                            </div>
                            <div className="project-card-links">
                                <Link className="inline-link" to={`/projects/${slugify(project.title)}`}>[ read_detail ]</Link>
                                {project.onlineLink ? (
                                    <a className="inline-link" href={project.onlineLink} target="_blank" rel="noreferrer">[ open_link ]</a>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <div className="ascii-divider" aria-hidden="true">// ==================== //</div>

            <section className="section-stack" data-reveal>
                <div className="section-heading section-heading-row">
                    <div>
                        <span className="eyebrow">/* github */</span>
                        <h2>Public repositories</h2>
                    </div>
                    <a className="inline-link" href="https://github.com/radhakishan404?tab=repositories" target="_blank" rel="noreferrer">[ view_all ]</a>
                </div>
                <div className="public-grid">
                    {repos.map((repo) => (
                        <article key={repo.id} className="surface-card public-card" data-reveal>
                            <div className="public-card-top terminal-window-top">
                                <span className="terminal-window-title">
                                    <span className="terminal-dot" />
                                    {repo.name}
                                </span>
                                <span className="public-star">★ {repo.stargazers_count}</span>
                            </div>
                            <p>{repo.description || "Public GitHub repository."}</p>
                            <div className="public-meta">
                                <span>Updated {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                            </div>
                            <div className="tag-row">
                                <span className="meta-pill">[PUBLIC]</span>
                            </div>
                            <div className="project-card-links">
                                <a className="inline-link" href={repo.html_url} target="_blank" rel="noreferrer">$ git clone</a>
                                {repo.homepage ? <a className="inline-link" href={repo.homepage} target="_blank" rel="noreferrer">[ live_demo ]</a> : null}
                            </div>
                        </article>
                    ))}
                    {!loading && !repos.length ? (
                        <article className="surface-card public-card" data-reveal>
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
