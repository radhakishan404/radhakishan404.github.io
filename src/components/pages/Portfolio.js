import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Loader from "react-animation-loader";
import { Link } from "react-router-dom";
import softdata from "../../softdata.json";
import { permalinkGenerate } from "../../Helper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
ReactGA.initialize('G-27S94925NM');
ReactGA.pageview(window.location.pathname + window.location.search);

function Portfolio(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilterTag, setActiveFilter] = useState("All");

    useEffect(() => {
        let checkInterval = setInterval(() => {
            try {
                window.threeJsAnimation();
                clearInterval(checkInterval);
                let checkInterval2 = setInterval(() => {
                    if (document.readyState === "complete") {
                        setIsLoading(false);
                        clearInterval(checkInterval2);
                    }
                }, 100);
            } catch (e) {
            }
        }, 100);
    }, []);

    return (
        <div className="main-wrapper">
            <Loader isLoading={isLoading} bgColor="161122" icon="https://radhakishan.vpran.in//images/500%20x%20500%20logo.png" />
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
                                        {
                                            softdata.filterTag.map(function (filterVal, filterKey) {
                                                return (
                                                    <button className={activeFilterTag === filterVal.title ? "project-tag active" : "project-tag"} key={filterKey} onClick={() => setActiveFilter(filterVal.title)}>
                                                        {filterVal.title}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="width-wrapper">
                                    <div className="item-grid pen-grid">
                                        {
                                            softdata.project && softdata.project.filter(obj => activeFilterTag === "All" ? obj : obj.tag.includes(activeFilterTag)).map(function (proVal, proKey) {
                                                return (
                                                    <article className="single-pen single-item" data-component="Item" key={proKey} title={proVal.title}>
                                                        <header className="header">
                                                            <Link to={"/portfolio/" + permalinkGenerate(proVal.title)} className="authorAvatar">
                                                                <LazyLoadImage
                                                                    src={proVal.logo}
                                                                    alt={"Project Icon for " + proVal.title} 
                                                                    className="user-avatar" 
                                                                    width="40" 
                                                                    height="40"
                                                                />
                                                            </Link>
                                                            <div className="titleAndAuthor">
                                                                <h2 className="title"><Link to={"/portfolio/" + permalinkGenerate(proVal.title)}>{proVal.title}</Link></h2>
                                                                <address className="author">
                                                                    <Link to={"/portfolio/" + permalinkGenerate(proVal.title)} className="authorName">{proVal.description}</Link>
                                                                </address>
                                                            </div>
                                                        </header>
                                                        <div className="iframe-wrap">
                                                            <LazyLoadImage className="grid-preview-image" loading="lazy" alt="" src={proVal.thumbnail} />
                                                            <Link className="cover-link" to={"/portfolio/" + permalinkGenerate(proVal.title)}></Link>
                                                            <Link to={"/portfolio/" + permalinkGenerate(proVal.title)} className="item-share" data-popup-button="true">
                                                                <button title="View Details">
                                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 20">
                                                                        <path fill="#ffffff" d="M19.872 10.166c-0.047-0.053-1.182-1.305-2.956-2.572-1.047-0.748-2.1-1.344-3.13-1.773-1.305-0.544-2.579-0.82-3.786-0.82s-2.481 0.276-3.786 0.82c-1.030 0.429-2.083 1.026-3.13 1.773-1.774 1.267-2.909 2.52-2.956 2.572-0.171 0.19-0.171 0.479 0 0.669 0.047 0.053 1.182 1.305 2.956 2.572 1.047 0.748 2.1 1.344 3.13 1.773 1.305 0.544 2.579 0.82 3.786 0.82s2.481-0.276 3.786-0.82c1.030-0.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572 0.171-0.19 0.171-0.479 0-0.669zM12.574 6.438c0.907 0.763 1.426 1.873 1.426 3.062 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.188 0.519-2.299 1.426-3.062 0.822-0.268 1.691-0.438 2.574-0.438s1.752 0.17 2.574 0.438zM16.317 12.606c-1.533 1.092-3.873 2.394-6.317 2.394s-4.784-1.302-6.317-2.394c-1.157-0.824-2.042-1.658-2.489-2.106 0.447-0.448 1.332-1.281 2.489-2.106 0.53-0.378 1.156-0.78 1.85-1.145-0.347 0.688-0.533 1.455-0.533 2.251 0 2.757 2.243 5 5 5s5-2.243 5-5c0-0.796-0.186-1.563-0.533-2.251 0.694 0.365 1.32 0.768 1.85 1.145 1.157 0.824 2.042 1.658 2.489 2.106-0.447 0.448-1.332 1.281-2.489 2.106z">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </Link>
                                                            {
                                                                proVal.gitAvailable
                                                                    ?
                                                                    <div className="project__ribbon">
                                                                        <LazyLoadImage src="https://radhakishan.vpran.in/images/github.svg" alt="GitHub Icon" />
                                                                        <span>GitHub</span>
                                                                    </div>
                                                                    :
                                                                    null
                                                            }
                                                        </div>
                                                        <footer className="stats">
                                                            {
                                                                proVal.technology.split(",").map(function (techVal, techKey) {
                                                                    return (
                                                                        <span className="single-stats" key={techKey}>{techVal}</span>
                                                                    )
                                                                })
                                                            }
                                                        </footer>
                                                    </article>
                                                )
                                            })
                                        }
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