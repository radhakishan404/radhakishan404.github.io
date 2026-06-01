import React from "react";
import { Link, Redirect } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function ProjectDetailPage({ match }) {
    const project = softdata.project.find((item) => slugify(item.title) === match.params.topic);
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";

    useDocumentMeta({
        title: project ? `${project.title} | Projects | Radhakishan Jangid` : "Project | Radhakishan Jangid",
        description: project?.description || "Project detail",
        image: project?.thumbnail || "",
        type: "website",
        structuredData: project ? {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: `${siteUrl}/projects/${slugify(project.title)}/`,
            author: { "@type": "Person", name: "Radhakishan Jangid" },
            image: project.thumbnail ? `${siteUrl}${project.thumbnail}` : undefined
        } : undefined
    });

    if (!project) {
        return <Redirect to="/projects" />;
    }

    return (
        <div className="page-wrap">
            <div className="container">
                <Link className="back-link" to="/projects">Back to Projects</Link>

                <section data-reveal>
                    <h1 style={{ marginBottom: 16 }}>{project.title}</h1>
                    <p style={{ color: "var(--color-text-muted)", fontSize: 18, maxWidth: 700, marginBottom: 24 }}>
                        {project.description}
                    </p>
                    <div className="tag-row" style={{ marginBottom: 40 }}>
                        {project.technology.split(",").map((item) => (
                            <span key={item} className="tag">{item.trim()}</span>
                        ))}
                    </div>
                </section>

                {project.thumbnail && (
                    <div className="project-hero-visual tilt-image" data-reveal>
                        <img src={project.thumbnail} alt={`${project.title} preview`} />
                    </div>
                )}

                <div className="project-detail-layout">
                    <div className="project-gallery">
                        {(project.sliderImages || []).map((item, index) => (
                            <figure key={`${project.id}-${index}`} className="project-shot tilt-image" data-reveal>
                                <img src={item.image} alt={`${project.title} screenshot ${index + 1}`} />
                            </figure>
                        ))}
                    </div>

                    <aside className="project-sidebar" data-reveal>
                        {project.onlineLink && (
                            <MagneticButton as="a" className="btn btn-filled" href={project.onlineLink} target="_blank" rel="noreferrer" style={{ width: "100%", marginBottom: 16 }}>
                                Visit Project
                            </MagneticButton>
                        )}
                        <div className="sidebar-block">
                            <div className="sidebar-label">Date</div>
                            <strong style={{ color: "var(--color-text)" }}>{project.date || "Available on request"}</strong>
                        </div>
                        <div className="sidebar-block">
                            <div className="sidebar-label">Tags</div>
                            <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{project.tag}</p>
                        </div>
                    </aside>
                </div>

                {(project.content || []).length > 0 && (
                    <section className="page-section" style={{ maxWidth: 900 }}>
                        {project.content.map((section) => (
                            <div key={section.contentTitle} className="project-content-section" data-reveal>
                                <h2>{section.contentTitle}</h2>
                                {section.contentDescription && (
                                    <p>{section.contentDescription.replace(/<[^>]+>/g, "")}</p>
                                )}
                                {section.contentList?.length > 0 && (
                                    <ul className="clean-list">
                                        {section.contentList.map((item) => (
                                            <li key={`${section.contentTitle}-${item.text}`}>
                                                {item.isLink ? (
                                                    <a href={item.link} target="_blank" rel="noreferrer">{item.text}</a>
                                                ) : (
                                                    <span>{item.text.replace(/<[^>]+>/g, "")}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
}

export default ProjectDetailPage;
