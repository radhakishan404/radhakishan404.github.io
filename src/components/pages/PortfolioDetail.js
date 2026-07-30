import React from "react";
import { Link, Redirect } from "react-router-dom";
import PageFrame from "../common/PageFrame";
import softdata from "../../softdata.json";
import { permalinkGenerate } from "../../Helper";
import { CURRENT_PROJECTS } from "../../data/portfolioProjects";

function CurrentProjectDetail({ project }) {
    const relatedProjects = CURRENT_PROJECTS.filter(
        (item) => item.caseStudy && item.slug !== project.slug
    );

    return (
        <PageFrame className="portfolio-detail-page portfolio-detail-page--case-study" title={project.title}>
            <article className="project-detail page-shell">
                <Link className="project-detail__back" to="/portfolio">Back to portfolio</Link>

                <header className="project-detail__header project-detail__header--case-study">
                    <div>
                        <p className="page-eyebrow">{project.category} · Case study</p>
                        <h1>{project.title}</h1>
                        <p>{project.caseStudy.intro}</p>
                        <div className="project-detail__actions">
                            {project.links?.map((link) => (
                                <a
                                    className="page-action"
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <span>{project.status}</span>
                        </div>
                    </div>
                    <figure>
                        <img src={project.image} alt={`${project.title} product interface`} />
                    </figure>
                </header>

                <dl className="project-detail__facts" aria-label="Project facts">
                    <div>
                        <dt>Role</dt>
                        <dd>{project.role}</dd>
                    </div>
                    <div>
                        <dt>Period</dt>
                        <dd>{project.year}</dd>
                    </div>
                    <div>
                        <dt>Scope</dt>
                        <dd>{project.category}</dd>
                    </div>
                    <div>
                        <dt>Stack</dt>
                        <dd>{project.technology}</dd>
                    </div>
                </dl>

                <section className="project-system" aria-labelledby="system-title">
                    <header>
                        <p className="page-eyebrow">System map</p>
                        <h2 id="system-title">How the product moves.</h2>
                    </header>
                    <ol>
                        {project.caseStudy.system.map((step, index) => (
                            <li key={step.title}>
                                <span><b>{String(index + 1).padStart(2, "0")}</b></span>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.detail}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <div className="project-detail__content project-detail__content--case-study">
                    {project.caseStudy.sections.map((section) => (
                        <section key={section.title}>
                            <p className="page-eyebrow">{section.eyebrow}</p>
                            <h2>{section.title}</h2>
                            <p>{section.body}</p>
                            {section.points?.length ? (
                                <ul>
                                    {section.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </section>
                    ))}
                </div>

                <nav className="project-detail__next" aria-label="More case studies">
                    <p>Continue exploring</p>
                    <div>
                        {relatedProjects.map((item) => (
                            <Link to={item.to} key={item.slug}>
                                <span>{item.category}</span>
                                <strong>{item.title}</strong>
                                <b aria-hidden="true">↗</b>
                            </Link>
                        ))}
                    </div>
                </nav>
            </article>
        </PageFrame>
    );
}

function PortfolioDetail({ match }) {
    const currentProject = CURRENT_PROJECTS.find(
        (item) => item.slug === match.params.topic && item.caseStudy
    );

    if (currentProject) {
        return <CurrentProjectDetail project={currentProject} />;
    }

    const project = softdata.project.find(
        (item) => permalinkGenerate(item.title) === match.params.topic
    );

    if (!project) {
        return <Redirect to="/portfolio" />;
    }

    return (
        <PageFrame className="portfolio-detail-page" title={project.title}>
            <article className="project-detail page-shell">
                <Link className="project-detail__back" to="/portfolio">Back to portfolio</Link>

                <header className="project-detail__header">
                    <div>
                        <p className="page-eyebrow">Project detail</p>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className="project-detail__actions">
                            {project.onlineLink ? (
                                <a className="page-action" href={project.onlineLink} target="_blank" rel="noreferrer">
                                    Visit project
                                </a>
                            ) : null}
                            <span>{project.date}</span>
                        </div>
                    </div>
                    <figure>
                        <img src={project.thumbnail} alt={`${project.title} interface`} />
                    </figure>
                </header>

                <section className="project-detail__stack" aria-labelledby="stack-title">
                    <h2 id="stack-title">Technology</h2>
                    <div>
                        {project.technology.split(",").map((technology) => (
                            <span key={technology}>{technology.trim()}</span>
                        ))}
                    </div>
                </section>

                <div className="project-detail__content">
                    {project.content.map((section) => (
                        <section key={section.contentTitle}>
                            <h2>{section.contentTitle}</h2>
                            {section.contentDescription ? (
                                <p dangerouslySetInnerHTML={{ __html: section.contentDescription }} />
                            ) : null}
                            {section.contentList ? (
                                <ul>
                                    {section.contentList.map((item, index) => (
                                        <li key={`${item.text}-${index}`}>
                                            {item.isLink ? (
                                                <a href={item.link} target="_blank" rel="noreferrer">{item.text}</a>
                                            ) : (
                                                <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </section>
                    ))}
                </div>

                {project.sliderImages?.length ? (
                    <section className="project-gallery" aria-labelledby="gallery-title">
                        <h2 id="gallery-title">Project views</h2>
                        <div>
                            {project.sliderImages.map((item, index) => (
                                <img
                                    src={item.image}
                                    alt={`${project.title} view ${index + 1}`}
                                    loading="lazy"
                                    key={`${item.image}-${index}`}
                                />
                            ))}
                        </div>
                    </section>
                ) : null}
            </article>
        </PageFrame>
    );
}

export default PortfolioDetail;
