import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import emailjs from "emailjs-com";
import Lenis from "lenis";
import Header from "../common/Header";
import {
    AsciiPortrait,
    CanvasPhrase,
    FlipBoard,
    InteractiveGrid,
    MacbookScroll,
    MagneticAction,
    OutcomeCarousel,
    PointerScene,
    SquigglyLabel,
    TiltProject,
    useSectionReveals
} from "../home/HomeExperience";
import "../css/Home.scss";

ReactGA.initialize("UA-187892763-1");

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/radhakishan404" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/radhakishanjangid" },
    { label: "Dev.to", href: "https://dev.to/radhakishanjangid404" }
];

const CAPABILITIES = [
    {
        title: "Product interfaces",
        description: "Fast, accessible web products with deliberate interaction and clear operational states."
    },
    {
        title: "Systems behind them",
        description: "APIs, services, administration surfaces, payments, queues, and deployment workflows."
    },
    {
        title: "Mobile products",
        description: "Flutter and React Native experiences that remain useful in real-world network conditions."
    },
    {
        title: "Practical AI",
        description: "Voice, vision, local models, content tools, and automation shaped around a specific job."
    }
];

const FEATURED_PROJECTS = [
    {
        title: "YOURVAY",
        type: "Local discovery platform",
        summary: "Real-time nearby discovery across mobile, web, backend, and operator tooling.",
        detail: "A location-aware product with place search, saved places, community tap signals, offline queues, vendor operations, banners, notifications, and administration.",
        stack: ["Flutter", "Next.js", "Node.js", "Prisma"],
        image: "/images/project/first-batch/yourvay.png"
    },
    {
        title: "Transformo",
        type: "Open-source browser utility",
        summary: "A privacy-first universal file converter that keeps files on the user’s device.",
        detail: "Format detection, smart output routing, local WebAssembly processing, and an installable offline application shell without uploading personal files.",
        stack: ["TypeScript", "WebAssembly", "FFmpeg", "Vite"],
        image: "/images/project/first-batch/transformo.png",
        href: "https://github.com/radhakishan404/transformo"
    },
    {
        title: "Nirula’s",
        type: "Commerce platform",
        summary: "A React and Node.js ordering experience built around location-aware delivery.",
        detail: "Product customisation, animated cart interactions, coupon flows, OTP verification, payments, analytics, and location-based fulfilment.",
        stack: ["React", "Redux", "Node.js", "REST"],
        image: "/images/project/nirulas-thumb.webp"
    }
];

const ARTICLES = [
    {
        title: "Free AI coding tools that cost zero rupees",
        meta: "Field guide / AI tooling",
        image: "/articles/free-ai-coding-tools-zero-rupees.png",
        href: "https://radhakishan404.is-a.dev/articles/free-ai-coding-tools-zero-rupees"
    },
    {
        title: "100 Claude Code prompts for real development work",
        meta: "Prompt library / Engineering",
        image: "/articles/100-claude-code-prompts.png",
        href: "https://radhakishan404.is-a.dev/articles/100-claude-code-prompts"
    },
    {
        title: "From repo to reader: publishing technical work well",
        meta: "Process note / Open source",
        image: "/articles/from-repo-to-reader.png",
        href: "https://radhakishan404.is-a.dev/articles/from-repo-to-reader"
    }
];

const OUTCOMES = [
    {
        title: "InfoLive",
        label: "Product outcome",
        statement: "One marketplace, several operational surfaces, and a service architecture designed to stay understandable as the product grows.",
        scope: "Marketplace / Admin / Services",
        image: "/images/project/first-batch/infolive.png"
    },
    {
        title: "YOURVAY",
        label: "Product outcome",
        statement: "Location-aware mobile decisions backed by offline-safe signals and the tools operators need to keep place data useful.",
        scope: "Mobile / Discovery / Operations",
        image: "/images/project/first-batch/yourvay.png"
    },
    {
        title: "Transformo",
        label: "Product outcome",
        statement: "A capable conversion workflow that protects privacy by moving heavy processing into the browser instead of a remote server.",
        scope: "Open source / WebAssembly / Privacy",
        image: "/images/project/first-batch/transformo.png"
    }
];

const CODE_TABS = {
    "PointerScene.js": [
        "const pointer = { x: 0.72, y: 0.46 };",
        "",
        "function renderFrame() {",
        "  pointer.x += (target.x - pointer.x) * 0.055;",
        "  pointer.y += (target.y - pointer.y) * 0.055;",
        "",
        "  drawResponsiveLines({",
        "    origin: pointer,",
        "    palette: ['#c98cdd', '#c2a0fd', '#cf4981'],",
        "    cursor: 'native'",
        "  });",
        "",
        "  requestAnimationFrame(renderFrame);",
        "}"
    ],
    "motion.scss": [
        "[data-home-reveal] {",
        "  opacity: 1;",
        "  transform: translateY(1rem);",
        "}",
        "",
        "[data-home-reveal].is-visible {",
        "  opacity: 1;",
        "  transform: none;",
        "  transition: 650ms cubic-bezier(.22, 1, .36, 1);",
        "}"
    ]
};

function CodePanel() {
    const [activeTab, setActiveTab] = useState("PointerScene.js");

    return (
        <div className="code-panel" data-home-reveal>
            <div className="code-panel__tabs" role="tablist" aria-label="Code examples">
                {Object.keys(CODE_TABS).map((tab) => (
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab}
                        className={activeTab === tab ? "is-active" : ""}
                        onClick={() => setActiveTab(tab)}
                        key={tab}
                    >
                        {tab}
                    </button>
                ))}
                <span>portfolio / home</span>
            </div>
            <pre tabIndex="0">
                <code>
                    {CODE_TABS[activeTab].map((line, index) => (
                        <span className={index === 9 || index === 10 ? "is-highlighted" : ""} key={`${line}-${index}`}>
                            <i>{String(index + 1).padStart(2, "0")}</i>
                            {line || " "}
                        </span>
                    ))}
                </code>
            </pre>
        </div>
    );
}

function Home(props) {
    const [expandedProject, setExpandedProject] = useState(0);
    const [contactStatus, setContactStatus] = useState("idle");
    useSectionReveals();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        document.title = "Radhakishan Jangid - Product Engineer";

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return undefined;

        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.085,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.1,
            anchors: true
        });

        return () => lenis.destroy();
    }, []);

    const submitContact = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setContactStatus("sending");

        try {
            await emailjs.sendForm(
                "service_sn6cjfe",
                "template_ai5s6x5",
                form,
                "user_Di32uXdzGJ3xyE4Kjf5bJ"
            );
            form.reset();
            setContactStatus("sent");
        } catch (error) {
            setContactStatus("error");
        }
    };

    return (
        <div className="main-wrapper home-v3">
            <Header props={props} />

            <main id="content" className="main page-content" aria-label="Content">
                <div className="header-content" id="home-detail">
                    <div className="content__main">
                        <section className="home-hero" aria-labelledby="home-title">
                            <PointerScene />

                            <div className="home-hero__layout">
                                <div className="home-hero__copy">
                                    <p className="home-eyebrow">Product engineer / Mumbai, India</p>
                                    <h1 id="home-title">
                                        Radhakishan
                                        <span>Jangid</span>
                                    </h1>
                                    <p className="home-hero__summary">
                                        I build product interfaces, mobile apps, backend systems, and
                                        practical automation for teams shipping real software.
                                    </p>
                                    <div className="home-hero__actions">
                                        <MagneticAction as="a" href="#selected-work" className="primary-action">
                                            See selected work <span aria-hidden="true">↓</span>
                                        </MagneticAction>
                                        <Link className="quiet-action" to="/about">
                                            More about me <span aria-hidden="true">↗</span>
                                        </Link>
                                    </div>
                                </div>

                                <figure className="home-hero__portrait">
                                    <div className="home-hero__portrait-orbit" aria-hidden="true" />
                                    <div className="home-hero__portrait-frame">
                                        <img
                                            src="/images/radhakishan-web-3.jpg"
                                            alt="Radhakishan Jangid seated at his workspace"
                                        />
                                    </div>
                                </figure>
                            </div>

                            <div className="home-hero__footer">
                                <ul aria-label="Social profiles">
                                    {SOCIAL_LINKS.map((social) => (
                                        <li key={social.label}>
                                            <a href={social.href} rel="noreferrer" target="_blank">
                                                {social.label} <span aria-hidden="true">↗</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="capability-section home-section" aria-labelledby="capability-title">
                            <InteractiveGrid />
                            <div className="section-shell">
                                <div className="capability-section__intro">
                                    <div data-home-reveal>
                                        <h2 id="capability-title">Useful products need more than a polished surface.</h2>
                                    </div>
                                    <FlipBoard />
                                </div>

                                <div className="capability-list">
                                    {CAPABILITIES.map((capability) => (
                                        <article key={capability.title} data-home-reveal>
                                            <h3>{capability.title}</h3>
                                            <p>{capability.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <MacbookScroll />

                        <section className="work-section home-section" id="selected-work" aria-labelledby="work-title">
                            <div className="section-shell">
                                <div className="section-heading" data-home-reveal>
                                    <div>
                                        <h2 id="work-title">Selected product work.</h2>
                                        <p>Open a project to inspect the engineering detail.</p>
                                    </div>
                                </div>

                                <div className="project-scenes">
                                    {FEATURED_PROJECTS.map((project, index) => (
                                        <TiltProject
                                            project={project}
                                            expanded={expandedProject === index}
                                            onToggle={() => setExpandedProject(expandedProject === index ? -1 : index)}
                                            key={project.title}
                                        />
                                    ))}
                                </div>

                                <div className="work-section__action" data-home-reveal>
                                    <MagneticAction as="link" to="/portfolio" className="primary-action">
                                        Browse the full portfolio <span aria-hidden="true">↗</span>
                                    </MagneticAction>
                                </div>
                            </div>
                        </section>

                        <section className="engineering-section home-section" aria-labelledby="engineering-title">
                            <div className="section-shell">
                                <div className="section-heading" data-home-reveal>
                                    <div>
                                        <h2 id="engineering-title">Motion belongs to the system.</h2>
                                        <p>Every transition should clarify hierarchy, feedback, or state.</p>
                                    </div>
                                </div>

                                <CodePanel />
                                <CanvasPhrase />
                            </div>
                        </section>

                        <section className="about-scene home-section" aria-labelledby="about-scene-title">
                            <div className="section-shell about-scene__layout">
                                <div className="about-scene__copy" data-home-reveal>
                                    <h2 id="about-scene-title">
                                        <SquigglyLabel>Curious</SquigglyLabel> enough to explore.
                                        {" "}Practical enough to finish.
                                    </h2>
                                    <p>
                                        I work across interface, backend, mobile, and product operations.
                                        That range helps me make decisions with the whole workflow in view,
                                        not just one isolated screen.
                                    </p>
                                    <MagneticAction as="link" to="/about" className="text-action">
                                        Read the full story <span aria-hidden="true">↗</span>
                                    </MagneticAction>
                                </div>
                                <AsciiPortrait />
                            </div>
                        </section>

                        <section className="outcomes-section home-section" aria-labelledby="outcomes-title">
                            <div className="section-shell">
                                <div className="section-heading" data-home-reveal>
                                    <div>
                                        <h2 id="outcomes-title">What each system made possible.</h2>
                                        <p>Real product outcomes, without invented client quotes.</p>
                                    </div>
                                </div>
                                <OutcomeCarousel items={OUTCOMES} />
                            </div>
                        </section>

                        <section className="writing-section home-section" aria-labelledby="writing-title">
                            <div className="section-shell">
                                <div className="section-heading" data-home-reveal>
                                    <div>
                                        <h2 id="writing-title">Recent writing.</h2>
                                        <p>Practical notes on development, tools, and publishing technical work.</p>
                                    </div>
                                </div>

                                <div className="article-rows">
                                    {ARTICLES.map((article) => (
                                        <a
                                            href={article.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="article-row"
                                            data-home-reveal
                                            key={article.title}
                                        >
                                            <span className="article-row__image">
                                                <img src={article.image} alt="" />
                                            </span>
                                            <span className="article-row__copy">
                                                <strong data-title={article.title}>{article.title}</strong>
                                                <span>{article.meta}</span>
                                            </span>
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="contact-scene home-section" aria-labelledby="contact-title">
                            <div className="contact-scene__glow" aria-hidden="true" />
                            <div className="section-shell contact-scene__layout">
                                <div className="contact-scene__copy" data-home-reveal>
                                    <h2 id="contact-title">Tell me what needs to work better.</h2>
                                    <p>
                                        Share the context, the people affected, and what success should look
                                        like. I’ll reply with a useful next step.
                                    </p>
                                    <a href="mailto:radhakishanjangid404@gmail.com">
                                        radhakishanjangid404@gmail.com
                                    </a>
                                </div>

                                <form className="home-contact-form" onSubmit={submitContact} data-home-reveal>
                                    <label>
                                        <span>Name</span>
                                        <input name="from_name" type="text" autoComplete="name" required />
                                    </label>
                                    <label>
                                        <span>Email</span>
                                        <input name="from_email" type="email" autoComplete="email" required />
                                    </label>
                                    <label>
                                        <span>What are you building?</span>
                                        <textarea name="from_message" rows="4" required />
                                    </label>
                                    <div className="home-contact-form__footer">
                                        <MagneticAction
                                            type="submit"
                                            className="primary-action"
                                            disabled={contactStatus === "sending"}
                                        >
                                            {contactStatus === "sending" ? "Sending…" : "Send a message"}
                                            <span aria-hidden="true">↗</span>
                                        </MagneticAction>
                                        <p role="status">
                                            {contactStatus === "sent" && "Message sent. Thank you. I’ll get back to you soon."}
                                            {contactStatus === "error" && "That did not send. Please use the email link instead."}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </section>

                        <section className="final-cta" aria-label="Open source profile">
                            <div className="section-shell">
                                <p>Open source and experiments</p>
                                <h2>See what I’m building in public.</h2>
                                <MagneticAction
                                    as="a"
                                    href="https://github.com/radhakishan404"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="final-cta__button"
                                >
                                    View GitHub <span aria-hidden="true">↗</span>
                                </MagneticAction>
                                <div className="final-cta__footer">
                                    <span>© {new Date().getFullYear()}</span>
                                    <a href="#content">Back to top ↑</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
