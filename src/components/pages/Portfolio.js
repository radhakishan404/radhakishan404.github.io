import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Loader from "react-animation-loader";
import { Link } from "react-router-dom";

function Portfolio(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let checkInterval = setInterval(() => {
            try {
                window.threeJsAnimation();
                clearInterval(checkInterval);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            } catch (e) {
            }
        }, 100);
    }, []);

    return (
        <div className="main-wrapper">
            <Loader isLoading={isLoading} bgColor="161122" icon="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/master/src/images/500%20x%20500%20logo.png" />
            <Header props={props} />

            <main id="content" className="main page-content" aria-label="Content">
                <div className="container-full header-content">
                    <div className="content__main">
                        <div style={{ position: "absolute" }} id="scene-canvas">
                            <canvas id="scene" width="500px" height="500px"></canvas>
                        </div>
                        {
                            isLoading
                                ?
                                <div className="loading-bg"></div>
                                :
                                null
                        }
                        <section className="section section-portfolio">
                            <div className="bg--dark">
                                <div className="container">
                                    <h1>Web developer portfolio</h1>
                                    <p>Just some of the projects I worked on.</p>
                                </div>
                            </div>

                            <div className="container work-list">
                                <div className="project-filter">
                                    <div className="filter-tags">
                                        <button className="project-tag active">
                                            All
                                        </button>
                                        <button className="project-tag">
                                            React
                                        </button>
                                        <button className="project-tag">
                                            Node Js
                                        </button>
                                        <button className="project-tag">
                                            Design
                                        </button>
                                        <button className="project-tag">
                                            Front-end
                                        </button>
                                        <button className="project-tag">
                                            Back-end
                                        </button>
                                        <button className="project-tag">
                                            REST
                                        </button>
                                        <button className="project-tag">
                                            UX
                                        </button>
                                        <button className="project-tag">
                                            Website
                                        </button>
                                        <button className="project-tag">
                                            PHP
                                        </button>
                                    </div>
                                </div>

                                <div className="width-wrapper">
                                    <div className="item-grid pen-grid">
                                        <article className="single-pen single-item" data-component="Item">
                                            <header className="header">
                                                <Link to={"/portfolio/test"} className="authorAvatar">
                                                    <img src="https://assets.codepen.io/3274/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=80&amp;version=1&amp;width=80" alt="Profile image for Claudio Gomboli" className="user-avatar" width="40" height="40" />
                                                </Link>
                                                <div className="titleAndAuthor">
                                                    <h2 className="title"><Link to={"/portfolio/test"}>Responsive animated gallery</Link></h2>
                                                    <address className="author">
                                                        <Link to={"/portfolio/test"} className="authorName">Claudio Gomboli </Link>
                                                    </address>
                                                </div>
                                            </header>
                                            <div className="iframe-wrap">
                                                <img class="grid-preview-image" loading="lazy" alt="" src="https://assets.codepen.io/3274/internal/screenshots/pens/albmD.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1493046922&amp;width=960" />
                                                <Link class="cover-link" to={"/portfolio/test"}><span class="visually-hidden">Open in Editor</span></Link>
                                                <Link to={"/portfolio/test"} class="item-share" data-popup-button="true">
                                                    <button title="View Details">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 20">
                                                            <path fill="#ffffff" d="M19.872 10.166c-0.047-0.053-1.182-1.305-2.956-2.572-1.047-0.748-2.1-1.344-3.13-1.773-1.305-0.544-2.579-0.82-3.786-0.82s-2.481 0.276-3.786 0.82c-1.030 0.429-2.083 1.026-3.13 1.773-1.774 1.267-2.909 2.52-2.956 2.572-0.171 0.19-0.171 0.479 0 0.669 0.047 0.053 1.182 1.305 2.956 2.572 1.047 0.748 2.1 1.344 3.13 1.773 1.305 0.544 2.579 0.82 3.786 0.82s2.481-0.276 3.786-0.82c1.030-0.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572 0.171-0.19 0.171-0.479 0-0.669zM12.574 6.438c0.907 0.763 1.426 1.873 1.426 3.062 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.188 0.519-2.299 1.426-3.062 0.822-0.268 1.691-0.438 2.574-0.438s1.752 0.17 2.574 0.438zM16.317 12.606c-1.533 1.092-3.873 2.394-6.317 2.394s-4.784-1.302-6.317-2.394c-1.157-0.824-2.042-1.658-2.489-2.106 0.447-0.448 1.332-1.281 2.489-2.106 0.53-0.378 1.156-0.78 1.85-1.145-0.347 0.688-0.533 1.455-0.533 2.251 0 2.757 2.243 5 5 5s5-2.243 5-5c0-0.796-0.186-1.563-0.533-2.251 0.694 0.365 1.32 0.768 1.85 1.145 1.157 0.824 2.042 1.658 2.489 2.106-0.447 0.448-1.332 1.281-2.489 2.106z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </Link>
                                                <div class="project__ribbon">
                                                    <img src="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/0810ee772225704f34d4c2264696c81b49819bc9/src/images/github.svg" alt="GitHub Icon" />
                                                    <span>GitHub</span>
                                                </div>
                                            </div>
                                            <footer className="stats">
                                                <span className="single-stats">React</span>
                                                <span className="single-stats">PHP</span>
                                            </footer>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Portfolio;