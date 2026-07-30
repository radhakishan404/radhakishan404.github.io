import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageFrame from "../common/PageFrame";
import softdata from "../../softdata.json";
import { permalinkGenerate } from "../../Helper";
import { CURRENT_PROJECTS, PROJECT_CATEGORIES } from "../../data/portfolioProjects";

const LEGACY_PROJECTS = softdata.project.map((project) => ({
    title: project.title,
    description: project.description,
    image: project.thumbnail,
    category: "Earlier work",
    technology: project.technology.split(",").slice(0, 3).join(" / "),
    to: `/portfolio/${permalinkGenerate(project.title)}`
}));

const FILTERS = [...PROJECT_CATEGORIES, "Earlier work"];

function ProjectCard({ project }) {
    const destinationLabel = project.to
        ? "Read case study"
        : project.href
            ? "View source"
            : "Overview only";

    const content = (
        <>
            <div className="portfolio-card__image">
                <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
                <span className="portfolio-card__type">
                    {project.to ? "Case study" : project.href ? "Source available" : "Selected work"}
                </span>
            </div>
            <div className="portfolio-card__body">
                <div className="portfolio-card__kicker">
                    <span>{project.category}</span>
                    {project.year ? <small>{project.year}</small> : null}
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="portfolio-card__footer">
                    <small>{project.technology}</small>
                    <span className={!project.to && !project.href ? "is-muted" : ""}>
                        {destinationLabel}
                        {project.to || project.href ? <b aria-hidden="true">↗</b> : null}
                    </span>
                </div>
            </div>
        </>
    );

    return (
        <article className="portfolio-card">
            {project.to ? (
                <Link to={project.to}>{content}</Link>
            ) : project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer">{content}</a>
            ) : (
                <div>{content}</div>
            )}
        </article>
    );
}

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");
    const projects = useMemo(() => [...CURRENT_PROJECTS, ...LEGACY_PROJECTS], []);
    const caseStudyCount = CURRENT_PROJECTS.filter((project) => project.to).length;
    const visibleProjects = activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return (
        <PageFrame className="portfolio-page" title="Portfolio">
            <section className="page-hero page-hero--compact page-shell">
                <div className="page-hero__copy">
                    <p className="page-eyebrow">Portfolio</p>
                    <h1>Products, systems, and useful experiments.</h1>
                    <p>Current platform work, open-source tools, client products, and earlier projects.</p>
                </div>
                <div className="portfolio-proof" aria-label="Portfolio summary">
                    <p><strong>{caseStudyCount}</strong><span>Detailed case studies</span></p>
                    <p><strong>{CURRENT_PROJECTS.length}</strong><span>Current projects</span></p>
                    <p><strong>7+ years</strong><span>Building software</span></p>
                </div>
            </section>

            <section className="portfolio-index page-shell" aria-label="Project collection">
                <div className="portfolio-filters" aria-label="Filter projects">
                    {FILTERS.map((filter) => (
                        <button
                            type="button"
                            className={activeFilter === filter ? "is-active" : ""}
                            aria-pressed={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                            key={filter}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <p className="portfolio-count">{visibleProjects.length} projects</p>

                <div className="portfolio-grid">
                    {visibleProjects.map((project) => (
                        <ProjectCard project={project} key={`${project.category}-${project.title}`} />
                    ))}
                </div>
            </section>
        </PageFrame>
    );
}

export default Portfolio;
