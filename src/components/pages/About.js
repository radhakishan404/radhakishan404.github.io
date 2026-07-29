import React from "react";
import { Link } from "react-router-dom";
import PageFrame from "../common/PageFrame";
import softdata from "../../softdata.json";

const FOCUS_AREAS = [
    {
        title: "Product engineering",
        text: "Interfaces, APIs, administration, payments, queues, deployment, and the operational states around them."
    },
    {
        title: "Mobile products",
        text: "Flutter and React Native applications designed for real devices, uneven networks, and long-lived workflows."
    },
    {
        title: "Practical AI",
        text: "Voice, vision, local models, agent workflows, and creator tools attached to a concrete job."
    },
    {
        title: "Open source",
        text: "Browser utilities and developer tools that are understandable, installable, and useful without an account."
    }
];

function About() {
    return (
        <PageFrame className="about-page" title="About">
            <section className="page-hero page-shell">
                <div className="page-hero__copy">
                    <p className="page-eyebrow">About</p>
                    <h1>I build across the whole product.</h1>
                    <p>
                        My work spans interface, backend, mobile, automation, and the operational tools
                        that keep software useful after launch.
                    </p>
                    <Link className="page-action" to="/portfolio">View portfolio</Link>
                </div>
                <figure className="page-portrait">
                    <img src="/images/radhakishan-web-2.jpg" alt="Radhakishan Jangid" />
                </figure>
            </section>

            <section className="page-section page-shell" aria-labelledby="focus-title">
                <div className="page-section__heading">
                    <h2 id="focus-title">What I work on</h2>
                    <p>Different technologies, one standard: the result should be clear, reliable, and maintainable.</p>
                </div>
                <div className="focus-grid">
                    {FOCUS_AREAS.map((area) => (
                        <article key={area.title}>
                            <h3>{area.title}</h3>
                            <p>{area.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-section page-shell" aria-labelledby="experience-title">
                <div className="page-section__heading">
                    <h2 id="experience-title">Experience</h2>
                    <p>A progression from PHP systems into full-stack product engineering and team delivery.</p>
                </div>
                <div className="experience-list">
                    {softdata.experience.map((role) => (
                        <article key={`${role.companyName}-${role.from}`}>
                            <div>
                                <h3>{role.title}</h3>
                                <a href={role.companyLink} target="_blank" rel="noreferrer">{role.companyName}</a>
                            </div>
                            <p>{role.from} to {role.to}</p>
                            <span>{role.location.replaceAll("-", ", ")}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-closing page-shell">
                <h2>Want the shorter version?</h2>
                <p>Browse the work, read the implementation notes, or send me the problem you are trying to solve.</p>
                <div>
                    <Link className="page-action" to="/portfolio">View portfolio</Link>
                    <Link className="page-text-link" to="/contact">Contact me</Link>
                </div>
            </section>
        </PageFrame>
    );
}

export default About;
