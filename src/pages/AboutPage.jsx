import React from "react";
import TiltCard from "../components/TiltCard";
import { profileImages } from "../data/images";
import useDocumentMeta from "../hooks/useDocumentMeta";
import softdata from "../softdata.json";

function AboutPage() {
    const birthYear = 1998;
    const age = new Date().getFullYear() - birthYear;

    useDocumentMeta("About | Radhakishan Jangid", "Experience, technical strengths, and current focus areas.");

    return (
        <div className="page-wrap">
            <div className="container">
                <section data-reveal>
                    <h1 style={{ marginBottom: 24 }}>About</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>
                        <p className="about-blurb">
                            I'm Radhakishan, a {age}-year-old <span className="muted">senior software engineer based in Mumbai.</span> I build product systems, <span className="muted">ship React and Node applications,</span> and write technical content <span className="muted">for developers and creators.</span>
                        </p>
                        <div className="portrait-wrap clip-reveal is-revealed" data-reveal data-reveal-delay="2">
                            <img src={profileImages.hero} alt="Radhakishan Jangid" />
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="split-title" data-reveal>
                        <h2>Work</h2>
                        <span className="split-title-line" />
                        <h2>Experience</h2>
                    </div>
                    <div className="timeline">
                        {softdata.experience.map((job, i) => (
                            <div key={`${job.companyName}-${job.from}`} className="timeline-item" data-reveal data-reveal-delay={`${i + 1}`}>
                                <div className="timeline-meta">
                                    <strong>{job.title}</strong>
                                    <span>{job.from} — {job.to}</span>
                                    <span>{job.location}</span>
                                    <div className="timeline-company">
                                        <a href={job.companyLink} target="_blank" rel="noreferrer">{job.companyName}</a>
                                    </div>
                                </div>
                                <div className="timeline-body">
                                    <p>{job.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="page-section">
                    <div className="split-title" data-reveal>
                        <h2>Technical</h2>
                        <span className="split-title-line" />
                        <h2>Skills</h2>
                    </div>
                    <div className="skills-grid">
                        {(softdata.skills[0]?.skillType || []).map((group, i) => (
                            <TiltCard key={group.title} className="skill-card shine-card" data-reveal data-reveal-delay={`${i + 1}`}>
                                <h3>{group.title}</h3>
                                <ul>
                                    {(group.skillsList || []).map((skill) => (
                                        <li key={skill.skillTitle}>{skill.skillTitle}</li>
                                    ))}
                                </ul>
                            </TiltCard>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
