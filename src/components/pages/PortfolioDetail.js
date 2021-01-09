import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Loader from "react-animation-loader";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function PortfolioDetail(props) {
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
                        <section className="section portfolio-details">
                            <div className="bg--dark">
                                <div className="container">
                                    <h1>React Chess</h1>
                                    <p>Online multiplayer chess game</p>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                    </div>
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