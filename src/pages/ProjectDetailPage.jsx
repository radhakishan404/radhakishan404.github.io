import React from "react";
import { Link, Redirect } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function ProjectDetailPage({ match }) {
    const project = softdata.project.find((item) => slugify(item.title) === match.params.topic);

    useDocumentMeta(
        project ? `${project.title} | Projects | Radhakishan Jangid` : "Project | Radhakishan Jangid",
        project?.description || "Project detail"
    );

    if (!project) {
        return <Redirect to="/projects" />;
    }

    return (
        <div className="page-shell shell">
            <section className="page-hero page-hero-tight">
                <Link className="back-link" to="/projects">Back to projects</Link>
                <span className="eyebrow">Project</span>
                <h1>{project.title}</h1>
                <p className="lede">{project.description}</p>
                <div className="tag-row">
                    {project.technology.split(",").map((item) => (
                        <span key={item} className="tag-chip tag-chip-static">{item.trim()}</span>
                    ))}
                </div>
            </section>

            <section className="project-detail-layout">
                <div className="project-gallery">
                    {(project.sliderImages || []).map((item, index) => (
                        <figure key={`${project.id}-${index}`} className="project-shot">
                            <img src={item.image} alt={`${project.title} screenshot ${index + 1}`} />
                        </figure>
                    ))}
                </div>

                <aside className="surface-card project-sidebar">
                    {project.onlineLink ? (
                        <a className="button-primary button-block" href={project.onlineLink} target="_blank" rel="noreferrer">Visit project</a>
                    ) : null}
                    <div className="sidebar-block">
                        <span className="sidebar-label">Date</span>
                        <strong>{project.date || "Available on request"}</strong>
                    </div>
                    <div className="sidebar-block">
                        <span className="sidebar-label">Tags</span>
                        <p>{project.tag}</p>
                    </div>
                </aside>
            </section>

            <section className="section-stack project-detail-content">
                {(project.content || []).map((section) => (
                    <article key={section.contentTitle} className="surface-card">
                        <h2>{section.contentTitle}</h2>
                        {section.contentDescription ? (
                            <p dangerouslySetInnerHTML={{ __html: section.contentDescription }} />
                        ) : null}
                        {section.contentList?.length ? (
                            <ul className="clean-list">
                                {section.contentList.map((item) => (
                                    <li key={`${section.contentTitle}-${item.text}`}>
                                        {item.isLink ? (
                                            <a href={item.link} target="_blank" rel="noreferrer">{item.text}</a>
                                        ) : (
                                            <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </article>
                ))}
            </section>
        </div>
    );
}

export default ProjectDetailPage;
