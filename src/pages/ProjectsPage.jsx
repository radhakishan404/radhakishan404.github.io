import React from "react";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";
import TiltCard from "../components/TiltCard";
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
        <div className="page-wrap">
            <div className="container">
                <section data-reveal>
                    <h1 style={{ marginBottom: 12 }}>Projects</h1>
                    <p style={{ color: "var(--color-text-muted)", fontSize: 18, maxWidth: 640, marginBottom: 48 }}>
                        A cleaner index with visuals, direct links, and detail pages where deeper context exists.
                    </p>
                </section>

                <div className="split-title" data-reveal>
                    <h2>Case</h2>
                    <span className="split-title-line" />
                    <h2>Studies</h2>
                </div>

                <div className="project-grid">
                    {softdata.project.map((project, i) => (
                        <TiltCard key={project.id} className="project-card shine-card" data-reveal data-reveal-delay={`${(i % 4) + 1}`}>
                            <Link to={`/projects/${slugify(project.title)}`} style={{ display: "contents" }}>
                                <div className="project-card-visual tilt-image">
                                    <img src={project.thumbnail} alt={`${project.title} preview`} />
                                </div>
                                <div className="project-card-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tag-row">
                                        {project.tag.split(",").slice(0, 4).map((t) => (
                                            <span key={t} className="tag">{t.trim()}</span>
                                        ))}
                                    </div>
                                    <div className="project-card-links">
                                        <span className="text-link">View Details</span>
                                        {project.onlineLink ? (
                                            <a className="text-link" href={project.onlineLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Live Link</a>
                                        ) : null}
                                    </div>
                                </div>
                            </Link>
                        </TiltCard>
                    ))}
                </div>

                {repos.length > 0 && (
                    <section className="page-section">
                        <div className="split-title" data-reveal>
                            <h2>Public</h2>
                            <span className="split-title-line" />
                            <h2>Repositories</h2>
                        </div>
                        <div className="public-grid">
                            {repos.map((repo, i) => (
                                <TiltCard key={repo.id} className="public-card shine-card" data-reveal data-reveal-delay={`${(i % 3) + 1}`}>
                                    <div className="public-card-header">
                                        <h3>{repo.name}</h3>
                                        <span className="public-star">★ {repo.stargazers_count}</span>
                                    </div>
                                    <p>{repo.description || "Public GitHub repository."}</p>
                                    <div className="public-card-footer">
                                        <a className="text-link" href={repo.html_url} target="_blank" rel="noreferrer">View Repo</a>
                                        {repo.homepage ? <a className="text-link" href={repo.homepage} target="_blank" rel="noreferrer">Live Demo</a> : null}
                                    </div>
                                </TiltCard>
                            ))}
                        </div>
                        {!loading && !repos.length && (
                            <p style={{ color: "var(--color-text-muted)", marginTop: 20 }}>GitHub data is unavailable right now.</p>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
}

export default ProjectsPage;
