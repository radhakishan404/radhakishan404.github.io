import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import Header from "../common/Header";
import CanvasName from "../home/CanvasName";
import "../css/Home.scss";

ReactGA.initialize("UA-187892763-1");

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/radhakishan404" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/radhakishanjangid" },
    { label: "Dev.to", href: "https://dev.to/radhakishanjangid404" }
];

function Home(props) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        document.title = "Radhakishan Jangid — Product Engineer";
    }, []);

    return (
        <div className="main-wrapper home-v2">
            <Header props={props} />

            <main id="content" className="main page-content" aria-label="Content">
                <div className="header-content" id="home-detail">
                    <div className="content__main">
                        <section className="home-v2__hero" aria-labelledby="home-title">
                            <div className="home-v2__rail" aria-hidden="true">
                                <span>01</span>
                                <span>Introduction</span>
                            </div>

                            <div className="home-v2__topline">
                                <span>Product engineer · Jaipur / Remote</span>
                                <span className="home-v2__availability">
                                    <i aria-hidden="true" />
                                    Available for thoughtful work
                                </span>
                            </div>

                            <div className="home-v2__grid">
                                <div className="home-v2__copy">
                                    <p className="home-v2__eyebrow">Web · Mobile · Product systems</p>

                                    <h1 id="home-title">
                                        Hi, I&apos;m
                                        <strong>Radhakishan Jangid.</strong>
                                    </h1>

                                    <p className="home-v2__summary">
                                        I design and build useful digital products across frontend,
                                        backend, mobile, AI workflows, and open-source tools.
                                    </p>

                                    <div className="home-v2__actions">
                                        <Link className="home-v2__primary-action" to="/portfolio">
                                            <span>Explore my work</span>
                                            <span aria-hidden="true">↗</span>
                                        </Link>
                                        <Link className="home-v2__text-action" to="/about">
                                            More about me
                                        </Link>
                                    </div>

                                    <ul className="home-v2__socials" aria-label="Social profiles">
                                        {SOCIAL_LINKS.map((social) => (
                                            <li key={social.label}>
                                                <a href={social.href} rel="noreferrer" target="_blank">
                                                    {social.label}
                                                    <span aria-hidden="true">↗</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="home-v2__visual">
                                    <div className="home-v2__canvas-frame">
                                        <div className="home-v2__frame-meta" aria-hidden="true">
                                            <span>Independent portfolio</span>
                                            <span>2026 / 01</span>
                                        </div>
                                        <CanvasName />
                                    </div>

                                    <figure className="home-v2__portrait">
                                        <img
                                            src="/images/radhakishan-web-3.jpg"
                                            alt="Radhakishan Jangid seated at his workspace"
                                        />
                                        <figcaption>
                                            <span>Currently building</span>
                                            <strong>Products that solve real operational problems.</strong>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="home-v2__scroll-note" aria-hidden="true">
                                <span />
                                First homepage slice
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
