import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageFrame from "../common/PageFrame";

const JOURNEY = [
    {
        years: "2024 — now",
        role: "Senior Software Engineer",
        company: "Cachetech Advisor Solutions",
        location: "Mumbai / US product teams",
        note: "Building fintech workflows, multi-tenant systems, web products, and React Native features."
    },
    {
        years: "2022 — 2024",
        role: "Manager — Software Engineer",
        company: "EduBridge India",
        location: "Mumbai",
        note: "Led a move from legacy PHP to MERN products and worked on microservices, Docker, and Jenkins."
    },
    {
        years: "2020 — 2022",
        role: "Senior Software Engineer",
        company: "TechStalwarts",
        location: "Mumbai",
        note: "Shipped ecommerce work across React, Node.js, APIs, payments, analytics, and AWS."
    },
    {
        years: "2019 — 2020",
        role: "PHP Web Developer",
        company: "Innovins Softtech",
        location: "Mumbai",
        note: "Built APIs and new features across business portals and internal tools."
    },
    {
        years: "2018 — 2019",
        role: "PHP / CodeIgniter Developer",
        company: "IMPAQ Technologies",
        location: "Mumbai",
        note: "This is where the professional journey started: real users, real bugs, and a lot of PHP."
    }
];

const WORK_MODES = [
    {
        id: "build",
        label: "Build",
        title: "Give me the rough idea.",
        text: "I like taking a note, sketch, or half-working demo and turning it into a product people can actually use."
    },
    {
        id: "fix",
        label: "Fix",
        title: "Give me the strange bug.",
        text: "The useful clue is often hiding between the screen, the API, and the data. I enjoy finding where they stopped agreeing."
    },
    {
        id: "learn",
        label: "Learn",
        title: "Give me a new tool.",
        text: "React led to Node.js, mobile, cloud work, AI tools, and now SwiftUI. Building a small real thing is how I learn best."
    },
    {
        id: "share",
        label: "Share",
        title: "Make the lesson useful.",
        text: "If a fix or workflow saves me time, I turn it into an article, an open-source package, or a simple guide."
    }
];

const SOCIAL_LINKS = [
    { label: "GitHub", detail: "48 public repositories", href: "https://github.com/radhakishan404" },
    { label: "LinkedIn", detail: "Work and engineering notes", href: "https://www.linkedin.com/in/radhakishanjangid" },
    { label: "Instagram", detail: "@radhakishanjangid404", href: "https://www.instagram.com/radhakishanjangid404/" },
    { label: "DEV", detail: "Six years of practical posts", href: "https://dev.to/radhakishanjangid404" }
];

function About() {
    const [activeMode, setActiveMode] = useState(WORK_MODES[0]);

    return (
        <PageFrame className="about-page about-page--story" title="About">
            <section className="about-hero page-shell" aria-labelledby="about-title">
                <div className="about-hero__copy">
                    <p className="page-eyebrow">Hello from Mumbai</p>
                    <h1 id="about-title">
                        I started with PHP.
                        <span>I never stopped learning.</span>
                    </h1>
                    <p>
                        I’m Radhakishan, a software engineer who likes building the whole thing:
                        the screen, the API, the mobile app, and the tools that help a team ship it.
                        I started working in 2018, and I still get excited when a rough idea becomes real.
                    </p>
                    <div className="about-hero__actions">
                        <Link className="page-action" to="/portfolio">See what I’ve built</Link>
                        <a className="page-text-link" href="https://github.com/radhakishan404" target="_blank" rel="noreferrer">
                            See what I’m building now ↗
                        </a>
                    </div>
                </div>

                <figure className="about-portrait">
                    <div className="about-portrait__frame">
                        <img
                            src="/images/radhakishan-web-3.jpg"
                            alt="Radhakishan Jangid sitting at his workspace"
                        />
                    </div>
                    <figcaption>
                        <span>Mumbai, India</span>
                        <strong>7+ years building and still curious</strong>
                    </figcaption>
                </figure>
            </section>

            <section className="about-numbers page-shell" aria-label="A few quick facts">
                <p><strong>2018</strong><span>First developer role</span></p>
                <p><strong>48</strong><span>Public GitHub repos</span></p>
                <p><strong>Web + mobile</strong><span>One product mindset</span></p>
                <p><strong>Mumbai</strong><span>Home base</span></p>
            </section>

            <section className="about-story page-section page-shell" aria-labelledby="story-title">
                <div className="page-section__heading">
                    <p className="page-eyebrow">My journey</p>
                    <h2 id="story-title">One step at a time. One new problem each time.</h2>
                    <p>
                        The tools changed, but the job stayed simple: understand the problem,
                        build the right thing, and leave the code easier to work with.
                    </p>
                </div>

                <ol className="journey-list">
                    {JOURNEY.map((item, index) => (
                        <li key={`${item.company}-${item.years}`}>
                            <span className="journey-list__number" aria-hidden="true">
                                {String(JOURNEY.length - index).padStart(2, "0")}
                            </span>
                            <p className="journey-list__years">{item.years}</p>
                            <div>
                                <h3>{item.role}</h3>
                                <p>{item.company} · {item.location}</p>
                            </div>
                            <p className="journey-list__note">{item.note}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="about-modes page-section" aria-labelledby="modes-title">
                <div className="page-shell about-modes__layout">
                    <div className="about-modes__heading">
                        <p className="page-eyebrow">How my brain works</p>
                        <h2 id="modes-title">Pick a mode.</h2>
                        <p>No big speech. This is what I enjoy doing.</p>
                    </div>

                    <div className="about-modes__switcher">
                        <div className="about-modes__tabs" role="tablist" aria-label="Work modes">
                            {WORK_MODES.map((mode, index) => (
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={activeMode.id === mode.id}
                                    aria-controls="active-work-mode"
                                    className={activeMode.id === mode.id ? "is-active" : ""}
                                    onClick={() => setActiveMode(mode)}
                                    key={mode.id}
                                >
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    {mode.label}
                                </button>
                            ))}
                        </div>
                        <article id="active-work-mode" role="tabpanel" aria-live="polite">
                            <p>{activeMode.label} mode</p>
                            <h3>{activeMode.title}</h3>
                            <p>{activeMode.text}</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="about-now page-section page-shell" aria-labelledby="now-title">
                <div className="page-section__heading">
                    <p className="page-eyebrow">Right now</p>
                    <h2 id="now-title">Small tools. Real reasons to build them.</h2>
                </div>
                <div className="about-now__list">
                    <a href="https://github.com/radhakishan404/sshipit" target="_blank" rel="noreferrer">
                        <span>Deploy</span>
                        <h3>SSHipIt</h3>
                        <p>Self-hosted deploys over plain SSH for small teams that want a clear setup.</p>
                        <b aria-hidden="true">↗</b>
                    </a>
                    <a href="https://github.com/radhakishan404" target="_blank" rel="noreferrer">
                        <span>Create</span>
                        <h3>MacEdits</h3>
                        <p>A local Mac reel editor where recording, editing, and export stay on the device.</p>
                        <b aria-hidden="true">↗</b>
                    </a>
                    <a href="https://github.com/radhakishan404/notch-prompter" target="_blank" rel="noreferrer">
                        <span>Experiment</span>
                        <h3>Notch Prompter</h3>
                        <p>A small SwiftUI teleprompter that turns the MacBook notch into the main idea.</p>
                        <b aria-hidden="true">↗</b>
                    </a>
                </div>
            </section>

            <section className="about-social page-section page-shell" aria-labelledby="social-title">
                <div className="page-section__heading">
                    <p className="page-eyebrow">Find me online</p>
                    <h2 id="social-title">Code, work, posts, and side quests.</h2>
                </div>
                <div className="about-social__links">
                    {SOCIAL_LINKS.map((social) => (
                        <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                            <strong>{social.label}</strong>
                            <span>{social.detail}</span>
                            <b aria-hidden="true">↗</b>
                        </a>
                    ))}
                </div>
            </section>

            <section className="page-closing page-shell">
                <p className="page-eyebrow">That’s the long version</p>
                <h2>Let’s make something useful.</h2>
                <p>
                    If you have an idea, a stuck product, or a bug that makes no sense,
                    send it over. Those are usually the interesting ones.
                </p>
                <div>
                    <Link className="page-action" to="/contact">Say hello</Link>
                    <Link className="page-text-link" to="/articles">Read my articles</Link>
                </div>
            </section>
        </PageFrame>
    );
}

export default About;
