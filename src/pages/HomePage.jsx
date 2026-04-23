import React, { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import HomeScrollExperience from "../components/HomeScrollExperience";
import { articles } from "../content/articles";
import { logoImages } from "../data/images";
import { heroStats, socialLinks } from "../data/site";
import useDocumentMeta from "../hooks/useDocumentMeta";
import usePublicRepos from "../hooks/usePublicRepos";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function compactText(value, limit = 140) {
    if (!value) {
        return "";
    }

    const normalized = String(value).replace(/\s+/g, " ").trim();
    if (normalized.length <= limit) {
        return normalized;
    }

    return `${normalized.slice(0, limit).trimEnd()}...`;
}

function HomePage() {
    const [navScrolled, setNavScrolled] = useState(false);
    const { repos } = usePublicRepos();

    const siteUrl = typeof window !== "undefined"
        ? window.location.origin
        : "https://radhakishan404.is-a.dev";

    const featuredProjects = softdata.project.slice(0, 4);
    const featuredArticles = [...articles]
        .sort((a, b) => {
            const dateA = a.sortDate ? new Date(a.sortDate).getTime() : 0;
            const dateB = b.sortDate ? new Date(b.sortDate).getTime() : 0;
            return dateB - dateA;
        })
        .slice(0, 4);

    const experience = softdata.experience || [];
    const activeExperience = experience.find((item) => item.isCurrent) || experience[0] || {};
    const experienceHighlights = experience.slice(0, 3);

    const sequenceOneCards = useMemo(
        () => [
            {
                id: "seq1-1",
                show: 0.1,
                hide: 0.31,
                label: "01 - Foundation",
                quote: compactText(experience[0]?.description || "Started with frontend craft and moved into full-stack product execution."),
                speaker: "Career Start",
                meta: experience[0]?.from || "Early Years"
            },
            {
                id: "seq1-2",
                show: 0.35,
                hide: 0.58,
                label: "02 - Current Mission",
                quote: compactText(activeExperience.description || "Leading scalable software execution for real production systems and mobile delivery."),
                speaker: activeExperience.title || "Senior Software Engineer",
                meta: activeExperience.companyName || "Current Role"
            },
            {
                id: "seq1-3",
                show: 0.62,
                hide: 0.88,
                label: "03 - Delivery Style",
                quote: "Product-first architecture, fast iteration, and stable shipping quality.",
                speaker: "Execution Model",
                meta: "Build -> Test -> Ship"
            }
        ],
        [activeExperience, experience]
    );

    const sequenceTwoCards = useMemo(
        () => [
            {
                id: "seq2-1",
                show: 0.1,
                hide: 0.31,
                label: "01 - Projects",
                quote: compactText(featuredProjects[0]?.description || "Building end-to-end products from idea to production."),
                speaker: featuredProjects[0]?.title || "Featured Work",
                meta: "Public Portfolio"
            },
            {
                id: "seq2-2",
                show: 0.35,
                hide: 0.58,
                label: "02 - Open Source",
                quote: `${repos.length || 6}+ repositories showing practical, reusable engineering output.`,
                speaker: "GitHub",
                meta: "Continuous Shipping"
            },
            {
                id: "seq2-3",
                show: 0.62,
                hide: 0.88,
                label: "03 - Writing",
                quote: compactText(featuredArticles[0]?.excerpt || "Writing technical breakdowns for AI workflows and engineering systems."),
                speaker: featuredArticles[0]?.title || "Recent Article",
                meta: featuredArticles[0]?.readingTime || "Builder Notes"
            }
        ],
        [featuredArticles, featuredProjects, repos.length]
    );

    const aboutSequenceCards = useMemo(
        () => [
            {
                id: "about-1",
                show: 0.1,
                hide: 0.32,
                label: "01 - About",
                quote: "I work best where product thinking, architecture, and hands-on delivery meet.",
                speaker: "Builder Mindset",
                meta: "Mumbai"
            },
            {
                id: "about-2",
                show: 0.36,
                hide: 0.58,
                label: "02 - Craft",
                quote: "Frontend polish, backend reliability, mobile execution, and fast iteration are the core loop.",
                speaker: "Full Stack",
                meta: "React / Node / Mobile"
            },
            {
                id: "about-3",
                show: 0.62,
                hide: 0.88,
                label: "03 - Signal",
                quote: "The output is simple: clear systems, useful products, and code that can keep moving.",
                speaker: "Engineering Taste",
                meta: "Production"
            }
        ],
        []
    );

    const projectSkillCards = useMemo(
        () => [
            {
                id: "skill-1",
                show: 0.1,
                hide: 0.3,
                label: "01 - Stack",
                quote: "React interfaces, Node APIs, database-backed products, and mobile workflows.",
                speaker: "Tech Stack",
                meta: "Core Tools"
            },
            {
                id: "skill-2",
                show: 0.34,
                hide: 0.58,
                label: "02 - Projects",
                quote: featuredProjects.slice(0, 3).map((project) => project.title).join(" / "),
                speaker: "Selected Work",
                meta: "Portfolio"
            },
            {
                id: "skill-3",
                show: 0.62,
                hide: 0.88,
                label: "03 - Open Source",
                quote: "Public repositories, experiments, and technical writing keep the system visible.",
                speaker: "GitHub + Articles",
                meta: "Public Output"
            }
        ],
        [featuredProjects]
    );

    const orbitItems = useMemo(
        () => (softdata.skillSpiner || []).map((item) => item.title).slice(0, 8),
        []
    );

    const systemsMetrics = useMemo(
        () => [
            {
                label: "Years in Production",
                value: heroStats[0]?.value || "7+",
                note: heroStats[0]?.label || "Product engineering"
            },
            {
                label: "Current Position",
                value: activeExperience.title || "Senior Software Engineer",
                note: activeExperience.companyName || "Active"
            },
            {
                label: "Public Repositories",
                value: `${repos.length || 6}+`,
                note: "Real code, public iteration"
            },
            {
                label: "Published Articles",
                value: `${articles.length}+`,
                note: "AI, systems, and engineering notes"
            }
        ],
        [activeExperience, repos.length]
    );

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const onScroll = () => {
            setNavScrolled(window.scrollY > 32);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") {
            return undefined;
        }

        document.body.classList.add("home-cinematic-body");
        return () => {
            document.body.classList.remove("home-cinematic-body");
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return undefined;
        }

        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.15,
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 1.05
        });

        let rafId = 0;
        const raf = (time) => {
            lenis.raf(time);
            rafId = window.requestAnimationFrame(raf);
        };

        rafId = window.requestAnimationFrame(raf);

        return () => {
            window.cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined" || typeof document === "undefined") {
            return undefined;
        }

        const nodes = Array.from(document.querySelectorAll("[data-scroll-fx]"));
        if (!nodes.length) {
            return undefined;
        }

        let rafId = 0;

        const update = () => {
            const viewport = window.innerHeight || 1;

            nodes.forEach((node) => {
                const rect = node.getBoundingClientRect();
                const start = viewport * 0.95;
                const end = -rect.height * 0.42;
                const progress = clamp((start - rect.top) / (start - end), 0, 1);
                node.style.setProperty("--scroll-fx", progress.toFixed(4));
            });
        };

        const onScroll = () => {
            if (rafId) {
                return;
            }

            rafId = window.requestAnimationFrame(() => {
                rafId = 0;
                update();
            });
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [featuredProjects.length, featuredArticles.length, repos.length]);

    useDocumentMeta({
        title: "Radhakishan Jangid",
        description: "Senior software engineer building product systems, shipped applications, public repositories, and technical writing for developers.",
        image: logoImages.withName,
        type: "website",
        structuredData: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    name: "Radhakishan Jangid",
                    jobTitle: "Senior Software Engineer",
                    url: `${siteUrl}/`,
                    image: `${siteUrl}${logoImages.withName}`,
                    sameAs: [
                        "https://github.com/radhakishan404",
                        "https://www.linkedin.com/in/radhakishanjangid",
                        "https://dev.to/radhakishanjangid404"
                    ]
                },
                {
                    "@type": "WebSite",
                    name: "Radhakishan Jangid",
                    url: `${siteUrl}/`
                }
            ]
        }
    });

    return (
        <>
            <header className={`cine-nav${navScrolled ? " is-scrolled" : ""}`}>
                <div className="cine-nav-inner">
                    <a className="cine-brand" href="#top">
                        <span className="cine-brand-dot" />
                        radhakishan / portfolio
                    </a>

                    <nav className="cine-nav-links" aria-label="Home sections">
                        <a href="#about">About</a>
                        <a href="#projects-skills">Skills</a>
                        <a href="#systems">Systems</a>
                        <a href="#work">Work</a>
                        <a href="#footer">Archive</a>
                    </nav>

                    <a className="cine-nav-cta" href="#work">Engage</a>
                </div>
            </header>

            <main id="top" className="cine-home-main">
                <HomeScrollExperience
                    id="intro-sequence"
                    frameDir="frames-rk"
                    frameCount={192}
                    sectionHeightVh={390}
                    eyebrow="MARK RK // PORTFOLIO DIAGNOSTIC"
                    titlePrimary={["I build [[product systems]]", "that teams [[ship fast]]"]}
                    description="Senior Software Engineer from Mumbai building production-grade web and mobile products with strong architecture and fast release execution."
                    topLeftLabel="Telemetry Link - Live"
                    topRightLabel="Delivery Output"
                    progressCenterLabel="Career Sequence"
                    readoutMode="power"
                    introFadeEnd={0.1}
                    cards={sequenceOneCards}
                    copyAlign="left"
                    cardsAlign="right"
                />

                <HomeScrollExperience
                    id="story-sequence"
                    frameDir="frames-rk2"
                    frameCount={192}
                    sectionHeightVh={360}
                    eyebrow="BUILD LOG // PUBLIC TIMELINE"
                    titlePrimary={["From concept", "to [[shipping]]"]}
                    titleSecondary={["Public work,", "[[real code]],", "real impact"]}
                    description="Every scroll checkpoint maps to my portfolio story: shipped products, open-source consistency, and technical writing for builders."
                    topLeftLabel="Playback Archive"
                    topRightLabel="Sequence Monitor"
                    progressCenterLabel="Portfolio Replay"
                    readoutMode="sequence"
                    introFadeEnd={0}
                    cards={sequenceTwoCards}
                    copyAlign="right"
                    cardsAlign="left"
                />

                <HomeScrollExperience
                    id="about"
                    frameDir="frames-about"
                    frameCount={192}
                    sectionHeightVh={350}
                    eyebrow="ABOUT // BUILDER PROFILE"
                    titlePrimary={["I design with", "[[engineering taste]]"]}
                    description="A practical builder mindset: understand the product, shape the system, then ship the version people can actually use."
                    topLeftLabel="Profile Depth - Active"
                    topRightLabel="Identity Lock"
                    progressCenterLabel="About Sequence"
                    readoutMode="sequence"
                    introFadeEnd={0}
                    cards={aboutSequenceCards}
                    copyAlign="left"
                    cardsAlign="right"
                />

                <HomeScrollExperience
                    id="projects-skills"
                    frameDir="frames-projects-skills"
                    frameCount={192}
                    sectionHeightVh={380}
                    eyebrow="PROJECTS // 3D SKILL ORBIT"
                    titlePrimary={["Projects move", "through [[systems]]"]}
                    titleSecondary={["React.", "Node.", "[[Product.]]"]}
                    description="The stack rotates around shipped work: interfaces, APIs, mobile delivery, automation, and technical writing."
                    topLeftLabel="Skill Orbit - Synced"
                    topRightLabel="Project Matrix"
                    progressCenterLabel="Skills / Projects"
                    readoutMode="power"
                    introFadeEnd={0}
                    cards={projectSkillCards}
                    orbitalItems={orbitItems}
                    copyAlign="right"
                    cardsAlign="left"
                />

                <section id="systems" className="cine-systems shell" data-reveal>
                    <div className="cine-systems-grid">
                        <div className="cine-systems-copy" data-scroll-fx>
                            <span className="cine-section-eyebrow">J.A.R.V.I.S. // SYSTEMS NOMINAL</span>
                            <h2>
                                Engineering with <span>production focus</span> and product clarity.
                            </h2>
                            <p>
                                I work across frontend, backend, and mobile delivery with a strong product lens. The goal is always the same: ship useful software with quality and speed.
                            </p>
                            <div className="cine-systems-actions">
                                <a href="#work" className="cine-chip-link">Open Work Archive</a>
                                <Link to="/contact" className="cine-chip-link is-outline">Contact</Link>
                            </div>
                            <div className="cine-experience-list">
                                {experienceHighlights.map((item) => (
                                    <article key={`${item.companyName}-${item.from}`} className="cine-experience-item" data-scroll-fx>
                                        <h3>{item.companyName}</h3>
                                        <p>{item.title}</p>
                                        <span>{item.from} - {item.to}</span>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="cine-telemetry" data-scroll-fx>
                            {systemsMetrics.map((row) => (
                                <div key={row.label} className="cine-telemetry-row" data-scroll-fx>
                                    <div>
                                        <span>{row.label}</span>
                                        <small>{row.note}</small>
                                    </div>
                                    <strong>{row.value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="work" className="cine-work shell" data-reveal>
                    <div className="cine-work-head" data-scroll-fx>
                        <span className="cine-section-eyebrow">WORK ARCHIVE // FEATURED</span>
                        <h2>Projects, code, and writing on one timeline.</h2>
                    </div>

                    <div className="cine-project-grid">
                        {featuredProjects.map((project) => (
                            <article key={project.id} className="cine-project-card" data-scroll-fx>
                                <img src={project.thumbnail} alt={`${project.title} preview`} />
                                <div className="cine-project-content">
                                    <h3>{project.title}</h3>
                                    <p>{compactText(project.description, 120)}</p>
                                    <div className="cine-project-links">
                                        <Link to={`/projects/${slugify(project.title)}`}>Case Study</Link>
                                        {project.onlineLink ? <a href={project.onlineLink} target="_blank" rel="noreferrer">Live</a> : null}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {repos.length ? (
                        <div className="cine-repo-grid">
                            {repos.slice(0, 3).map((repo) => (
                                <article key={repo.id} className="cine-repo-card" data-scroll-fx>
                                    <h3>{repo.name}</h3>
                                    <p>{compactText(repo.description || "Public repository.", 95)}</p>
                                    <div className="cine-repo-meta">
                                        <span>★ {repo.stargazers_count}</span>
                                        <a href={repo.html_url} target="_blank" rel="noreferrer">Open Repo</a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : null}

                    <div className="cine-article-list" data-scroll-fx>
                        {featuredArticles.map((article, index) => {
                            const extension = article.kind === "html" ? "html" : "md";
                            return (
                                <Link key={article.slug} className="cine-article-row" to={`/articles/${article.slug}`}>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <p>{article.title}</p>
                                    <small>{article.readingTime || extension}</small>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </main>

            <footer id="footer" className="cine-footer shell">
                <div className="cine-footer-top">
                    <div>
                        <p className="cine-footer-brand">
                            <span className="cine-brand-dot" />
                            Radhakishan / Archive
                        </p>
                        <p className="cine-footer-copy">
                            Senior Software Engineer building product-grade systems, public repositories, and practical writing for developers.
                        </p>
                    </div>

                    <div className="cine-footer-links">
                        <Link to="/projects">Projects</Link>
                        <Link to="/articles">Articles</Link>
                        <Link to="/contact">Contact</Link>
                        {socialLinks.slice(0, 3).map((item) => (
                            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                        ))}
                    </div>
                </div>
                <div className="cine-footer-bottom">
                    <span>Build {new Date().toISOString().slice(0, 10)}</span>
                    <span>radhakishan404.is-a.dev</span>
                    <span>Home sequence complete</span>
                </div>
            </footer>
        </>
    );
}

export default HomePage;
