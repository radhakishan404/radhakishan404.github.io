import React from "react";
import softdata from "../softdata.json";
import useDocumentMeta from "../hooks/useDocumentMeta";

function getAge() {
    const birthDate = new Date("1998-07-26");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDelta = today.getMonth() - birthDate.getMonth();

    if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }

    return age;
}

function AboutPage() {
    useDocumentMeta("About | Radhakishan Jangid", "Experience, technical strengths, and current focus areas.");

    return (
        <div className="page-shell shell">
            <section className="page-hero page-hero-tight">
                <span className="eyebrow">About</span>
                <h1>Engineering depth, product focus, and shipping discipline.</h1>
                <p className="lede">
                    I’m Radhakishan Jangid, a {getAge()} year old software engineer based in Mumbai. My work sits at the intersection of product UI,
                    backend services, and developer-facing systems.
                </p>
            </section>

            <section className="info-grid">
                <div className="surface-card">
                    <h2>Current position</h2>
                    <p>
                        Senior Software Engineer at <a href="https://www.cachetech.com/" target="_blank" rel="noreferrer">Cachetech Advisor Solutions</a>,
                        working on fintech systems, multi-tenant workflows, and product engineering across web and mobile.
                    </p>
                </div>
                <div className="surface-card">
                    <h2>Working style</h2>
                    <p>
                        Strong on frontend architecture, pragmatic on backend delivery, and comfortable turning rough product intent into production-ready systems.
                    </p>
                </div>
            </section>

            <section className="section-stack">
                <div className="section-heading">
                    <span className="eyebrow">Experience</span>
                    <h2>Recent roles</h2>
                </div>
                <div className="timeline-list">
                    {softdata.experience.map((item) => (
                        <article key={`${item.companyName}-${item.from}`} className="timeline-item">
                            <div className="timeline-meta">
                                <span>{item.from} to {item.to}</span>
                                <span>{item.location}</span>
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p className="timeline-company">
                                    <a href={item.companyLink} target="_blank" rel="noreferrer">{item.companyName}</a>
                                </p>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-stack">
                <div className="section-heading">
                    <span className="eyebrow">Capabilities</span>
                    <h2>Core skill areas</h2>
                </div>
                <div className="capability-grid">
                    {softdata.skills[0].skillType.map((group) => (
                        <article key={group.title} className="surface-card">
                            <h3>{group.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: group.description }} />
                            <ul className="clean-list">
                                {group.skillsList.map((item) => (
                                    <li key={item.skillTitle}>
                                        <strong>{item.skillTitle}</strong>
                                        <span>{item.skillDesc}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
