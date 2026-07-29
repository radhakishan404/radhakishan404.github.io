import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import Header from "../common/Header";
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
                                <span>Home</span>
                            </div>

                            <div className="home-v2__layout">
                                <div className="home-v2__copy">
                                    <p className="home-v2__eyebrow">
                                        Product engineer · Mumbai, India
                                    </p>

                                    <h1 id="home-title">
                                        Radhakishan
                                        <span>Jangid</span>
                                    </h1>

                                    <p className="home-v2__summary">
                                        I build customer-facing products and the systems behind
                                        them—across React, Node.js, Flutter, and practical AI tools.
                                    </p>

                                    <nav className="home-v2__actions" aria-label="Introduction links">
                                        <Link to="/portfolio">
                                            View portfolio
                                            <span aria-hidden="true">↗</span>
                                        </Link>
                                        <Link to="/about">
                                            About me
                                            <span aria-hidden="true">↗</span>
                                        </Link>
                                    </nav>
                                </div>

                                <figure className="home-v2__portrait">
                                    <div className="home-v2__portrait-frame">
                                        <img
                                            src="/images/radhakishan-web-3.jpg"
                                            alt="Radhakishan Jangid seated at his workspace"
                                        />
                                    </div>
                                    <figcaption>
                                        <span>Web / Mobile / Product systems</span>
                                        <span>Frontend to infrastructure</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="home-v2__footer">
                                <p>
                                    Building software for real products,
                                    <br />
                                    teams, and operational workflows.
                                </p>

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
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
