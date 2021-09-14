import React, { useEffect, useState } from 'react';
import Header from "../common/Header";
import Loader from "react-animation-loader";
import $ from "jquery";
import "../css/Home.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import softdata from "../../softdata.json";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-187892763-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function Home(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        let checkInterval = setInterval(() => {
            try {
                window.threeJsAnimation();
                clearInterval(checkInterval);
            } catch (e) {
            }
        }, 100);
        let checkInterval2 = setInterval(() => {
            if (document.readyState === "complete") {
                setIsLoading(false);
                clearInterval(checkInterval2);
            }
        }, 100);
        setTimeout(() => {
            window.wordSpinner();
            window.textAnimation();
        }, 4000);
    }, []);

    const menuTriggerClose = () => {
        if ($("body").hasClass("nav--open")) {
            $("body").removeClass("nav--open");
            $(".header__nav-btn").removeClass("header__nav-btn--active");
            $(".header-nav").removeClass("header-nav-open");
        }
    }

    return (
        <div className="main-wrapper">
            <Loader isLoading={isLoading} bgColor="161122" icon="https://radhakishan.site//images/500%20x%20500%20logo.png" />
            <Header props={props} />
            <main id="content" className="main page-content" aria-label="Content" onClick={() => menuTriggerClose()}>
                <div className="container-full header-content" id="home-detail">
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
                        <div className="main-hero-text">
                            <section className="intro" id="home">
                                <h1 className="intro-title">
                                    Hi I am,
                                    <strong className="text-gradient">Radhakishan</strong>
                                    <strong className="text-gradient">Jangid</strong>
                                </h1>
                                <div className="section-subtitle">
                                    <span className="word-spinner">
                                        <span className="word-spinner-inner">
                                            {
                                                softdata.skillSpiner.map(function (val, key) {
                                                    return (
                                                        <span className="word-spinner-item" key={key}>
                                                            <img src={val.image} alt={val.title} />
                                                            <span className="word-spinner-word"> {val.title} </span>
                                                        </span>
                                                    )
                                                })
                                            }
                                        </span>
                                    </span>
                                </div>
                                <LazyLoadImage
                                    src="https://radhakishan.site//images/radhakishan-web-3.jpg"
                                    alt="Radhakishan Jangid image solving error"
                                    className="intro-img"
                                />
                            </section>
                        </div>

                        <ul className="social-vertical-stripe">
                            <li><a href="https://twitter.com/jangirr48" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772 25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87 163.525 595.21 141.42 612 116.257z" fill="#010002"></path></svg></a></li>
                            <li><a href="https://it.linkedin.com/in/radhakishanjangid" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="430.117" height="430.117" viewBox="0 0 430.117 430.117"><path d="M430.117 261.543V420.56H337.93V272.193c0-37.27-13.335-62.707-46.704-62.707-25.473 0-40.632 17.142-47.3 33.724-2.433 5.928-3.06 14.18-3.06 22.477V420.56H148.65s1.242-251.285 0-277.32h92.21v39.31c-.187.293-.43.61-.606.895h.606v-.896c12.25-18.87 34.13-45.825 83.102-45.825 60.673 0 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.25 0 57.463c0 26.62 20.038 47.94 50.96 47.94h.615c32.16 0 52.16-21.317 52.16-47.94-.607-27.212-20-47.905-51.552-47.905zM5.477 420.56H97.66V143.24H5.478v277.32z"></path></svg></a></li>
                            <li><a href="https://github.com/radhakishan404" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="438.549" height="438.549" viewBox="0 0 438.549 438.549"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"></path></svg></a></li>
                            <li><a href="https://dev.to/radhakishanjangid404" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="438.549" height="438.549" viewBox="0 0 24 24"><path d="M7.73 11.93c0 1.72-.02 1.83-.23 2.07c-.19.17-.38.23-.76.23l-.51.01l-.03-2.27l-.02-2.27h.52c.35 0 .6.07.77.21c.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39c-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71c.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04l-1.1-.03V12.6l.68-.03l.66-.04v-1.19h-1.39V9.7h2.24V8.5m5.88.06c0-.06-.3-.06-.66-.06l-.68.06l-.59 2.35c-.38 1.48-.62 2.27-.67 2.13c-.08-.27-1.14-4.44-1.14-4.49c0-.05-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15c.34 1.35.46 1.65.75 1.94c.2.22.45.36.61.36c.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56z" fill="#626262" /></svg></a></li>
                            <li><a href="https://stackoverflow.com/users/11925346/radhakishan-jangid" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="438.549" height="438.549" viewBox="0 0 256 304"><path fill="#BCBBBB" d="M216.33 276.188v-81.211h26.953v108.165H0V194.977h26.954v81.21z" /><path d="M56.708 187.276l132.318 27.654l5.6-26.604L62.31 160.672l-5.601 26.604zm17.502-63.009l122.517 57.058l11.202-24.503L85.412 99.414L74.21 124.267zm33.955-60.208l103.964 86.462l17.152-20.653l-103.964-86.462l-17.152 20.653zM175.375 0L153.67 16.102l80.511 108.515l21.703-16.102L175.375 0zM53.906 248.884h135.119V221.93H53.907v26.954z" fill="#F48023" /></svg></a></li>
                            <li><a href="https://www.instagram.com/iam__rk_/" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="438.549" height="438.549" viewBox="0 0 32 32"><path d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.847 7.847 0 0 0-2.833 1.849A7.757 7.757 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.847 7.847 0 0 0 1.849 2.833a7.757 7.757 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.847 7.847 0 0 0 2.833-1.849a7.716 7.716 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.847 7.847 0 0 0-1.849-2.833A7.716 7.716 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0zm0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a4.989 4.989 0 0 1 1.844 1.197a4.931 4.931 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.048 5.048 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333S18.948 21.333 16 21.333zM26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917z" fill="#626262" /></svg></a></li>
                        </ul>

                        <div id="shapes-mask" className="is-loaded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37.196" height="32.213" viewBox="0 0 37.196 32.213" >
                                <symbol id="triangle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
                                        <path fill="none" stroke="#CF4981" strokeWidth="3" strokeMiterlimit="10" d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z">
                                        </path>
                                    </svg>
                                </symbol>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29.093" height="14.546" viewBox="0 0 29.093 14.546">
                                <symbol id="semiCircle">
                                    <path fill="none" stroke="#CF4981" strokeWidth="3" strokeMiterlimit="10" d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046">
                                    </path>
                                </symbol>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.046" height="36.016" viewBox="0 0 17.046 36.016">
                                <symbol id="spring">
                                    <path fill="none" stroke="#CF4981" strokeWidth="3" strokeMiterlimit="10" d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255">
                                    </path>
                                </symbol>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
                                <symbol id="line">
                                    <path fill="none" stroke="#CF4981" strokeWidth="3" strokeMiterlimit="10" d="M4.92 2.514L21.964 19.56">
                                    </path>
                                </symbol>
                            </svg>
                            <svg width="25px" height="25px" className="layer1 p1 matrix1" >
                                <use xlink="true" href="#triangle" className="yellow" />
                            </svg>

                            <svg width="28px" height="28px" className="layer1 p2 matrix2">
                                <use xlink="true" href="#semiCircle" className="yellow">
                                </use>
                            </svg>
                            <svg width="25px" height="25px" className="layer2 p3 matrix3">
                                <use width="25px" height="25px" xlink="true" href="#triangle" className="aqua">
                                </use>
                            </svg>
                            <svg className="layer1 p4 matrix2">
                                <use xlink="true" href="#triangle" className="pink">
                                </use>
                            </svg>
                            <svg width="28px" height="28px" className="layer1 p5 matrix4">
                                <use xlink="true" href="#semiCircle" className="aqua">
                                </use>
                            </svg>
                            <svg width="36px" height="36px" className="layer2 p6 matrix3">
                                <use xlink="true" href="#spring" className="pink">
                                </use>
                            </svg>
                            <svg width="36px" height="36px" className="layer2 p7 matrix5">
                                <use xlink="true" href="#spring" className="pink">
                                </use>
                            </svg>
                            <svg width="22px" height="22px" className="layer2 p8 matrix5">
                                <use xlink="true" href="#line" className="aqua">
                                </use>
                            </svg>
                            <svg width="22px" height="22px" className="layer1 p9 matrix6">
                                <use xlink="true" href="#line" className="aqua">
                                </use>
                            </svg>
                            <svg width="22px" height="22px" className="layer2 p10 matrix7">
                                <use xlink="true" href="#line" className="yellow">
                                </use>
                            </svg>
                            <svg width="28px" height="28px" className="layer1 p11 matrix8">
                                <use xlink="true" href="#semiCircle" className="aqua">
                                </use>
                            </svg>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;