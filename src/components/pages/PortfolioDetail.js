import React, { Fragment, useEffect, useState } from "react";
import Header from "../common/Header";
import Loader from "react-animation-loader";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import softdata from "../../softdata.json";
import { permalinkGenerate, getPackageTotalDownload } from "../../Helper";
import $ from "jquery";

function PortfolioDetail(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [uniqueProject, setUniqueProject] = useState(false);
    const [download, setDownloads] = useState(0);

    useEffect(() => {
        var inteval = setInterval(() => {
            if ($(".control-prev") && $(".control-next")) {
                $(".control-prev").html('');
                $(".control-prev").append('<img src="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/c220e60db6262aac2d0abe3cf646978507d2bd81/src/images/left.svg" alt="Previous slide">');
                $(".control-prev").append('<img src="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/c220e60db6262aac2d0abe3cf646978507d2bd81/src/images/left.svg" alt="Previous slide">');
                $(".control-next").html('');
                $(".control-next").append('<img src="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/c220e60db6262aac2d0abe3cf646978507d2bd81/src/images/right.svg" alt="Next slide">');
                $(".control-next").append('<img src="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/c220e60db6262aac2d0abe3cf646978507d2bd81/src/images/right.svg" alt="Next slide">');
                clearInterval(inteval);
            }
        }, 100);

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

    useEffect(() => {
        let permalink = props.match.params.topic;

        let project = softdata.project.filter(obj => permalinkGenerate(obj.title) === permalink);
        if (project[0]) {
            setUniqueProject(project[0]);
            if (project[0].isPackage) {
                async function getDownloads() {
                    let download = await getPackageTotalDownload(permalink);
                    setDownloads(download);
                }
                getDownloads();
            }
        } else {
            props.history.push("/portfolio");
        }
    }, [props])

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
                            isLoading && !uniqueProject
                                ?
                                <div className="loading-bg"></div>
                                :
                                null
                        }
                        <section className="section portfolio-details">
                            <div className="bg--dark">
                                <div className="container">
                                    <h1>
                                        {uniqueProject.title}
                                    </h1>
                                    <p>{uniqueProject.description}</p>
                                </div>
                            </div>

                            <div className="container portfolio-info">
                                <div className="row">
                                    {
                                        uniqueProject
                                            ?
                                            <Fragment>
                                                <div className="col-md-8">
                                                    <div className="carousel">
                                                        <div className="carousel-wrapper">
                                                            <Carousel
                                                                autoPlay={true}
                                                                infiniteLoop={true}
                                                                showThumbs={false}
                                                                showStatus={false}
                                                                useKeyboardArrows={true}
                                                            >
                                                                {
                                                                    uniqueProject.sliderImages.map(function (sliderVal, sliderKey) {
                                                                        return (
                                                                            <div key={sliderKey}>
                                                                                <img src={sliderVal.image} alt="Slider Images" />
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </Carousel>
                                                        </div>
                                                    </div>
                                                    <div className="post-content">
                                                        {
                                                            uniqueProject.content
                                                                ?
                                                                uniqueProject.content.map(function (contentVal, contentKey) {
                                                                    return (
                                                                        <Fragment key={contentKey}>
                                                                            <h2 id={permalinkGenerate(contentVal.contentTitle)}>
                                                                                <a href={"#" + permalinkGenerate(contentVal.contentTitle)} className="anchor before"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{ fill: "#000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fff"><path d="M39.86458,0c-10.2181,0 -20.46419,3.89128 -28.21875,11.64583c-15.50912,15.50912 -15.50912,40.92839 0,56.4375l26.20313,26.20313c2.77149,2.85547 7.33464,2.88347 10.1901,0.11198c2.85547,-2.77149 2.88347,-7.33463 0.11198,-10.1901l-26.42708,-26.42708c-10.02213,-10.02213 -10.02213,-26.03515 0,-36.05729c10.02214,-10.02213 26.03516,-10.02213 36.05729,0l35.16146,35.16146c10.02214,10.02214 10.02214,26.03516 0,36.05729c-1.17578,1.17578 -2.49153,2.01563 -3.80729,2.91146c-3.27539,2.23958 -4.14323,6.69076 -1.90365,9.96615c2.23958,3.27539 6.69076,4.14323 9.96615,1.90365c2.04362,-1.39974 4.03125,-2.91146 5.82292,-4.70312c15.50912,-15.50911 15.50912,-40.92838 0,-56.4375l-34.9375,-34.9375c-7.75456,-7.75456 -18.00065,-11.64583 -28.21875,-11.64583zM77.26563,63.60417c-0.30794,0.05599 -0.61588,0.13997 -0.89583,0.22396c-1.0638,0.22396 -2.04362,0.67188 -2.91146,1.34375c-1.51172,1.14778 -3.07942,2.40756 -4.47917,3.80729c-15.50911,15.50912 -15.50911,40.92839 0,56.4375l34.9375,34.9375c15.50912,15.50912 40.92839,15.50912 56.4375,0c15.50912,-15.50911 15.50912,-40.92838 0,-56.4375l-26.20312,-25.97917c-1.73567,-2.1276 -4.50716,-3.10742 -7.19466,-2.49153c-2.65951,0.61588 -4.75912,2.71549 -5.375,5.375c-0.61589,2.6875 0.36393,5.45899 2.49153,7.19466l26.20313,26.20313c10.02214,10.02214 10.02214,26.03516 0,36.05729c-10.02213,10.02214 -26.03515,10.02214 -36.05729,0l-35.16146,-35.16146c-10.02213,-10.02213 -10.02213,-26.03515 0,-36.05729c0.86784,-0.89583 1.93164,-1.51172 2.91146,-2.23958c2.88347,-1.76367 4.14323,-5.31901 2.99544,-8.51042c-1.11979,-3.1914 -4.33919,-5.15104 -7.69857,-4.70312z"></path></g></g></svg></a>
                                                                                <span>{contentVal.contentTitle}</span>
                                                                            </h2>
                                                                            <p dangerouslySetInnerHTML={{ __html: contentVal.contentDescription }}></p>
                                                                            <ul>
                                                                                {
                                                                                    contentVal.contentList && contentVal.contentList.map(function (listVal, listKey) {
                                                                                        return (
                                                                                            <Fragment key={listKey}>
                                                                                                {
                                                                                                    listVal.isLink
                                                                                                        ?
                                                                                                        <li><a className="text-gradient" href={listVal.link} target="_blank" rel="noreferrer"><strong>{listVal.text}</strong></a></li>
                                                                                                        :
                                                                                                        <li dangerouslySetInnerHTML={{ __html: listVal.text }}></li>
                                                                                                }
                                                                                            </Fragment>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="portfolio-sidebar">
                                                        <div className="technology-info bg--dark">
                                                            <h5>Technologies</h5>
                                                            <hr />
                                                            <ul className="tech-list">
                                                                {
                                                                    uniqueProject.technology.split(",").map(function (techVal, techKey) {
                                                                        return (
                                                                            <li key={techKey}>{techVal}</li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                        {
                                                            uniqueProject.date
                                                                ?
                                                                <div className="date-info bg--dark">
                                                                    <h5>Date</h5>
                                                                    <hr />
                                                                    <p>{uniqueProject.date}</p>
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                        {
                                                            uniqueProject.onlineLink
                                                                ?

                                                                <div className="online-info bg--dark">
                                                                    <h5>Online</h5>
                                                                    <hr />
                                                                    <p><a className="text-gradient" href={uniqueProject.onlineLink} target="_blank" rel="noopener noreferrer">{uniqueProject.onlineLink}</a></p>
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                        {
                                                            uniqueProject.isPackage
                                                                ?

                                                                <div className="online-info bg--dark">
                                                                    <h5>Total Downloads</h5>
                                                                    <hr />
                                                                    <p><strong>{download}</strong></p>
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                            </Fragment>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div >
    )
}

export default PortfolioDetail;