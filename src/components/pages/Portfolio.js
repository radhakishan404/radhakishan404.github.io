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
    const content = (
        <>
            <div className="portfolio-card__image">
                <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
            </div>
            <div className="portfolio-card__body">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <small>{project.technology}</small>
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
