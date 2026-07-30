import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import emailjs from "emailjs-com";
import Lenis from "lenis";
import Header from "../common/Header";
import PointerField from "../common/PointerField";
import {
    AsciiPortrait,
    MacbookScroll,
    MagneticAction,
    SquigglyLabel,
    TiltProject,
    useSectionReveals
} from "../home/HomeExperience";
import { ARTICLES } from "../../data/articles";
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
        description: "Fast, easy-to-use websites where loading, errors, and small details are handled."
    },
    {
        title: "Systems behind them",
        description: "APIs, admin tools, payments, queues, and deploys that keep the product running."
    },
    {
        title: "Mobile products",
        description: "Flutter and React Native apps built for real phones, slow networks, and daily use."
    },
    {
        title: "Practical AI",
        description: "Voice, image, and automation tools that help with a real task."
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

const PRINCIPLES = [
    {
        title: "Understand the job",
        text: "Start with the person, the constraint, and the decision the product needs to support."
    },
    {
        title: "Make failure clear",
        text: "Loading, empty, offline, validation, and recovery states are part of the product."
    },
    {
        title: "Keep the system legible",
        text: "Good architecture helps the next engineer change the product without guessing."
    }
];

const BUILDING_NOW = [
    {
        id: "ship",
        label: "Ship",
        number: "01",
        title: "SSHipIt",
        text: "A simple way to deploy Node.js, Next.js, and React apps over SSH without paying for another platform.",
        linkLabel: "Open the repo",
        href: "https://github.com/radhakishan404/sshipit"
    },
    {
        id: "make",
        label: "Make",
        number: "02",
        title: "MacEdits",
        text: "A Mac reel editor where recording, trimming, captions, and export happen on the device.",
        linkLabel: "See my GitHub",
        href: "https://github.com/radhakishan404"
    },
    {
        id: "learn",
        label: "Learn",
        number: "03",
        title: "SwiftUI",
        text: "I am learning native Mac app design by building small tools instead of only watching tutorials.",
        linkLabel: "See Notch Prompter",
        href: "https://github.com/radhakishan404/notch-prompter"
    },
    {
        id: "write",
        label: "Write",
        number: "04",
        title: "Useful notes",
        text: "Short guides about developer tools, AI workflows, creator tools, and the fixes I want to remember.",
        linkLabel: "Browse the articles",
        to: "/articles"
    }
];

function Home(props) {
    const [expandedProject, setExpandedProject] = useState(0);
    const [contactStatus, setContactStatus] = useState("idle");
    const [activeNow, setActiveNow] = useState(BUILDING_NOW[0]);
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
            <PointerField className="home-scene" />

            <main id="content" className="main page-content" aria-label="Content">
                <div className="header-content" id="home-detail">
                    <div className="content__main">
                        <section className="home-hero" aria-labelledby="home-title">
                            <div className="home-hero__layout">
                                <div className="home-hero__copy">
                                    <p className="home-eyebrow">Product engineer / Mumbai, India</p>
                                    <h1 id="home-title">
                                        Radhakishan
                                        <span>Jangid</span>
                                    </h1>
                                    <p className="home-hero__summary">
                                        I build websites, mobile apps, backend systems, and useful
                                        automation. I like taking an idea all the way to a working product.
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
                            <div className="section-shell">
                                <div className="capability-section__intro">
                                    <div data-home-reveal>
                                        <h2 id="capability-title">What I build</h2>
                                        <p>
                                            From the first screen to the API, mobile app, and deploy.
                                            I enjoy seeing how all the pieces work together.
                                        </p>
                                    </div>
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
                                        <h2 id="engineering-title">Build for use, not applause.</h2>
                                        <p>Motion can guide attention, but the product still has to solve the problem.</p>
                                    </div>
                                </div>

                                <div className="principles-panel" data-home-reveal>
                                    <blockquote>
                                        Make it work. Make it clear. Then make it fast.
                                    </blockquote>
                                    <div className="principles-grid">
                                        {PRINCIPLES.map((principle) => (
                                            <article key={principle.title}>
                                                <h3>{principle.title}</h3>
                                                <p>{principle.text}</p>
                                            </article>
                                        ))}
                                    </div>
                                </div>
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
                                        I started with PHP in 2018. Since then I have worked with React,
                                        Node.js, mobile apps, cloud systems, and now native Mac tools.
                                        I still learn best by building something real.
                                    </p>
                                    <MagneticAction as="link" to="/about" className="text-action">
                                        Read the full story <span aria-hidden="true">↗</span>
                                    </MagneticAction>
                                </div>
                                <AsciiPortrait />
                            </div>
                        </section>

                        <section className="now-section home-section" aria-labelledby="now-section-title">
                            <div className="section-shell now-section__layout">
                                <div className="now-section__intro" data-home-reveal>
                                    <p className="home-eyebrow">A little more human</p>
                                    <h2 id="now-section-title">What is open on my laptop?</h2>
                                    <p>Pick a mode. This is what I am building, learning, or writing right now.</p>
                                </div>

                                <div className="now-switcher" data-home-reveal>
                                    <div className="now-switcher__tabs" role="tablist" aria-label="Current work">
                                        {BUILDING_NOW.map((item) => (
                                            <button
                                                type="button"
                                                role="tab"
                                                aria-selected={activeNow.id === item.id}
                                                aria-controls="home-now-panel"
                                                className={activeNow.id === item.id ? "is-active" : ""}
                                                onClick={() => setActiveNow(item)}
                                                key={item.id}
                                            >
                                                <span>{item.number}</span>
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                    <article
                                        id="home-now-panel"
                                        role="tabpanel"
                                        aria-live="polite"
                                        data-mode={activeNow.label}
                                    >
                                        <span>{activeNow.label} mode</span>
                                        <h3>{activeNow.title}</h3>
                                        <p>{activeNow.text}</p>
                                        {activeNow.to ? (
                                            <Link to={activeNow.to}>
                                                {activeNow.linkLabel} <span aria-hidden="true">↗</span>
                                            </Link>
                                        ) : (
                                            <a href={activeNow.href} target="_blank" rel="noreferrer">
                                                {activeNow.linkLabel} <span aria-hidden="true">↗</span>
                                            </a>
                                        )}
                                    </article>
                                </div>
                            </div>
                        </section>

                        <section className="writing-section home-section" aria-labelledby="writing-title">
                            <div className="section-shell">
                                <div className="section-heading" data-home-reveal>
                                    <div>
                                        <h2 id="writing-title">Recent writing.</h2>
                                        <p>Short guides about development, tools, and things worth remembering.</p>
                                    </div>
                                </div>

                                <div className="article-rows">
                                    {ARTICLES.slice(0, 3).map((article) => (
                                        <a
                                            href={article.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="article-row"
                                            data-home-reveal
                                            key={article.title}
                                        >
                                            <span className="article-row__image">
                                                <img src={article.cover} alt="" />
                                            </span>
                                            <span className="article-row__copy">
                                                <strong data-title={article.title}>{article.title}</strong>
                                                <span>{article.category} / {article.date}</span>
                                            </span>
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    ))}
                                </div>

                                <div className="writing-section__action" data-home-reveal>
                                    <MagneticAction as="link" to="/articles" className="primary-action">
                                        Browse all articles <span aria-hidden="true">↗</span>
                                    </MagneticAction>
                                </div>
                            </div>
                        </section>

                        <section className="contact-scene home-section" aria-labelledby="contact-title">
                            <div className="contact-scene__glow" aria-hidden="true" />
                            <div className="section-shell contact-scene__layout">
                                <div className="contact-scene__copy" data-home-reveal>
                                    <h2 id="contact-title">Tell me what needs to work better.</h2>
                                    <p>
                                        Tell me what you are making, where it is stuck, and what you
                                        want it to do. I’ll reply with a useful next step.
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
