import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import FloatingShapes from "../components/FloatingShapes";
import MagneticButton from "../components/MagneticButton";
import Marquee from "../components/Marquee";
import TiltCard from "../components/TiltCard";
import { articles } from "../content/articles";
import { profileImages } from "../data/images";
import { featuredProjects as approvedProjects } from "../data/featuredProjects";
import { instagramReels, youtubeVideos } from "../data/site";
import useDocumentMeta from "../hooks/useDocumentMeta";
import usePublicRepos from "../hooks/usePublicRepos";
import { slugify } from "../lib/slug";
import softdata from "../softdata.json";

function HomePage() {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://radhakishan404.is-a.dev";
    const heroRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const overlayRef = useRef(null);

    const allProjects = [...approvedProjects, ...softdata.project];
    const homepageProjects = allProjects.slice(0, 4);
    const recentArticles = [...articles]
        .sort((a, b) => {
            const dateA = a.sortDate ? new Date(a.sortDate).getTime() : 0;
            const dateB = b.sortDate ? new Date(b.sortDate).getTime() : 0;
            return dateB - dateA;
        })
        .slice(0, 6);
    const { repos } = usePublicRepos();

    useEffect(() => {
        const hero = heroRef.current;
        const img = imgRef.current;
        const text = textRef.current;
        if (!hero || !img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const handleScroll = () => {
            const rect = hero.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.6)));
            const scale = 1 + progress * 0.3;
            img.style.transform = `scale(${scale})`;
            if (text) {
                text.style.transform = `translateY(${progress * -80}px)`;
                text.style.opacity = `${1 - progress * 0.9}`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleHeroMouseMove = useCallback((e) => {
        const overlay = overlayRef.current;
        const img = imgRef.current;
        if (!overlay || !img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        img.style.objectPosition = `${50 + x * 2}% ${50 + y * 2}%`;
    }, []);

    useDocumentMeta({
        title: "Radhakishan Jangid",
        description: "Senior software engineer building product systems, frontend experiences, public software projects, and AI-focused technical content.",
        image: profileImages.hero,
        type: "website",
        structuredData: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    name: "Radhakishan Jangid",
                    jobTitle: "Senior Software Engineer",
                    url: `${siteUrl}/`,
                    image: `${siteUrl}${profileImages.hero}`,
                    sameAs: [
                        "https://github.com/radhakishan404",
                        "https://www.linkedin.com/in/radhakishanjangid",
                        "https://dev.to/radhakishanjangid404",
                        "https://www.instagram.com/rk.codex",
                        "https://www.youtube.com/@rk-codex"
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
            <section className="hero" ref={heroRef} onMouseMove={handleHeroMouseMove}>
                <div className="hero-bg">
                    <div className="hero-bg-sticky">
                        <img
                            ref={imgRef}
                            src="/images/moon-hero.jpg"
                            alt=""
                            loading="eager"
                        />
                    </div>
                </div>
                <div className="hero-overlay" ref={overlayRef} />
                <FloatingShapes />
                <div className="hero-content" ref={textRef}>
                    <h1 className="hero-name">Radhakishan<br />Jangid</h1>
                    <p className="hero-subtitle">
                        Senior software engineer. Building product systems, React frontends, Node backends, and AI-focused technical content.
                    </p>
                    <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <MagneticButton as={Link} className="btn btn-filled" to="/projects">View Projects</MagneticButton>
                        <MagneticButton as={Link} className="btn" to="/articles">Read Articles</MagneticButton>
                    </div>
                </div>
                <div className="hero-scroll-hint">Scroll</div>
            </section>

            <Marquee items={["Development", "Engineering", "React", "Node.js", "Mobile Apps", "AI Content", "Product Systems", "Open Source"]} speed={35} />

            <section className="page-section" style={{ background: "#000", position: "relative", overflow: "hidden" }}>
                <div className="perspective-grid" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div data-reveal-3d>
                        <p className="about-blurb">
                            Mumbai based. <span className="muted">Focused on React, Node.js, mobile apps,</span> internal systems, <span className="muted">and public-facing</span> product builds <span className="muted">with 7+ years of experience.</span>
                        </p>
                    </div>

                    <div className="stats-row" data-reveal-3d>
                        <div className="stat-item">
                            <AnimatedCounter value="7+" className="stat-value" />
                            <span className="stat-label">Years experience</span>
                        </div>
                        <div className="stat-item">
                        <AnimatedCounter value={`${allProjects.length}`} className="stat-value" />
                            <span className="stat-label">Projects shipped</span>
                        </div>
                        <div className="stat-item">
                            <AnimatedCounter value={`${articles.length}`} className="stat-value" />
                            <span className="stat-label">Articles published</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="split-title" data-reveal>
                        <h2>Selected</h2>
                        <span className="split-title-line" />
                        <h2>Work</h2>
                    </div>
                    <div className="project-grid">
                        {homepageProjects.map((project, i) => (
                            <TiltCard key={project.id} className="project-card shine-card" data-reveal data-reveal-delay={`${i + 1}`}>
                                <Link to={`/projects/${slugify(project.title)}`} style={{ display: "contents" }}>
                                    <div className="project-card-visual tilt-image">
                                        <img src={project.thumbnail} alt={`${project.title} preview`} />
                                    </div>
                                    <div className="project-card-body">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="tag-row">
                                            {project.technology.split(",").slice(0, 4).map((t) => (
                                                <span key={t} className="tag">{t.trim()}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </TiltCard>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 48 }} data-reveal>
                        <MagneticButton as={Link} className="btn" to="/projects">View All Projects</MagneticButton>
                    </div>
                </div>
            </section>

            <Marquee items={["Latest Articles", "Technical Writing", "AI Prompts", "Developer Content", "Practical Guides"]} speed={40} />

            <section className="page-section" style={{ background: "var(--color-bg-raised)" }}>
                <div className="container">
                    <div className="split-title" data-reveal>
                        <h2>Latest</h2>
                        <span className="split-title-line" />
                        <h2>Articles</h2>
                    </div>
                    <div className="article-list">
                        {recentArticles.map((article, i) => (
                            <Link key={article.slug} className="article-list-item" to={`/articles/${article.slug}`} data-reveal data-reveal-delay={`${i + 1}`}>
                                <h3>{article.title}</h3>
                                <div className="article-list-meta">
                                    <span>{article.readingTime}</span>
                                    {article.date ? <span>{article.date}</span> : null}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 48 }} data-reveal>
                        <MagneticButton as={Link} className="btn" to="/articles">All Articles</MagneticButton>
                    </div>
                </div>
            </section>

            <section className="page-section creator-section">
                <div className="container">
                    <div className="split-title" data-reveal>
                        <h2>Content</h2>
                        <span className="split-title-line" />
                        <h2>Creator</h2>
                    </div>

                    <div className="creator-grid">
                        <TiltCard className="creator-card shine-card" data-reveal data-reveal-delay="1">
                            <span className="creator-card-badge">
                                <span className="badge-dot badge-dot--ig" />
                                Instagram
                            </span>
                            <h3>@rk.codex</h3>
                            <p>Coding reels, dev tips, behind-the-scenes, and tech content for developers and creators.</p>
                            <div className="reel-grid">
                                {instagramReels.map((reel) => (
                                    <a key={reel.id} className="reel-card" href={reel.url} target="_blank" rel="noreferrer">
                                        <div className="reel-card-play" />
                                        <span className="reel-card-label">{reel.title}</span>
                                    </a>
                                ))}
                            </div>
                            <MagneticButton as="a" className="btn" href="https://www.instagram.com/rk.codex" target="_blank" rel="noreferrer" style={{ marginTop: 8 }}>
                                Follow on Instagram
                            </MagneticButton>
                        </TiltCard>

                        <TiltCard className="creator-card shine-card" data-reveal data-reveal-delay="2">
                            <span className="creator-card-badge">
                                <span className="badge-dot badge-dot--yt" />
                                YouTube
                            </span>
                            <h3>@rk-codex</h3>
                            <p>Longer-form coding tutorials, project walkthroughs, tech reviews, and engineering deep-dives.</p>
                            <div className="yt-video-grid">
                                {youtubeVideos.map((video) => (
                                    <a key={video.id} className="yt-thumb-card" href={video.url} target="_blank" rel="noreferrer">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`}
                                            alt={video.title}
                                            loading="lazy"
                                        />
                                        <div className="yt-thumb-play" />
                                    </a>
                                ))}
                            </div>
                            <MagneticButton as="a" className="btn" href="https://www.youtube.com/@rk-codex" target="_blank" rel="noreferrer" style={{ marginTop: 8 }}>
                                Subscribe on YouTube
                            </MagneticButton>
                        </TiltCard>
                    </div>
                </div>
            </section>

            {repos.length > 0 && (
                <section className="page-section">
                    <div className="container">
                        <div className="split-title" data-reveal>
                            <h2>Open</h2>
                            <span className="split-title-line" />
                            <h2>Source</h2>
                        </div>
                        <div className="public-grid">
                            {repos.slice(0, 3).map((repo, i) => (
                                <TiltCard key={repo.id} className="public-card shine-card" data-reveal data-reveal-delay={`${i + 1}`}>
                                    <div className="public-card-header">
                                        <h3>{repo.name}</h3>
                                        <span className="public-star">★ {repo.stargazers_count}</span>
                                    </div>
                                    <p>{repo.description || "Public GitHub repository."}</p>
                                    <div className="public-card-footer">
                                        <a className="text-link" href={repo.html_url} target="_blank" rel="noreferrer">View Repo</a>
                                        {repo.homepage ? <a className="text-link" href={repo.homepage} target="_blank" rel="noreferrer">Live Demo</a> : null}
                                    </div>
                                </TiltCard>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default HomePage;
