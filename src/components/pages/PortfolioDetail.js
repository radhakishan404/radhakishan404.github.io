import React from "react";
import { Link, Redirect } from "react-router-dom";
import PageFrame from "../common/PageFrame";
import softdata from "../../softdata.json";
import { permalinkGenerate } from "../../Helper";

function PortfolioDetail({ match }) {
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
