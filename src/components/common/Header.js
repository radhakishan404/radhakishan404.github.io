import React, { Fragment, useEffect } from "react";
import "../css/Header.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

function Header(props) {
    const location = useLocation();

    useEffect(() => {
        $('body').removeClass('menu-is-active');
        $("body").removeClass("nav--open");
        $(".header__nav-btn").removeClass("header__nav-btn--active");
        $(".header-nav").removeClass("header-nav-open");

        $(".header__nav-btn").click(function () {
            $("body").toggleClass("nav--open");
            $(".header__nav-btn").toggleClass("header__nav-btn--active");
            $(".header-nav").toggleClass("header-nav-open");
        });
    }, []);

    const menuTriggerFunction = () => {
        $('body').toggleClass('menu-is-active');
    }

    return (
        <Fragment>
            <header className="header-nav">
                <div className="header-nav-wrapper">
                    <nav className="header-nav-menu" aria-label="Main">
                        <ul>
                            <li>
                                <Link aria-current="page" className={location.pathname === "/" ? "active" : ""} to={"/"}>
                                    <span className="menu-item-title text-gradient">Home</span>
                                    <span>Introduction about me</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"} className={location.pathname === "/about" ? "active" : ""} >
                                    <span className="menu-item-title text-gradient">About</span>
                                    <span>Professional skills and experience</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/portfolio"} className={location.pathname === "/portfolio" ? "active" : ""}>
                                    <span className="menu-item-title text-gradient">Portfolio</span>
                                    <span>Some of the projects I worked on</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={location.pathname === "/contact" ? "active" : ""}>
                                    <span className="menu-item-title text-gradient">Say Hello</span>
                                    <span>Get in touch, I will buy the coffee</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <header className="site-header">
                <div className="header-inner container-wide">
                    <div className="site-logo">
                        <Link to={"/"}>
                            <h2 className="logo-icon">R</h2>
                        </Link>
                    </div>
                    <div className="site-header-burger">
                        <div className="ml-3 burger" onClick={() => menuTriggerFunction()}>
                            <span className="closed"><img src={"/images/burger.svg"} alt="menu icon" /></span>
                            <span className="open"><img src={"/images/close.svg"} alt="close icon" /></span>
                        </div>
                    </div>
                </div>
                <nav className="mobile-drawer">
                    <div className="navigation-inner">
                        <ul className="mobile-navigation">
                            <li className="watch-sub-nav home">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="watch-sub-nav portfolio">
                                <Link to={"/portfolio"}>
                                    <span>Portfolio</span>
                                </Link>
                            </li>
                            <li className="watch-sub-nav about">
                                <Link to={"/about"}>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="gradient-btn">
                                <Link to={"/contact"}>
                                    <span>Say Hello</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >

            <div id="nav_bar">
                <Link className="logo" to={"/"}>
                    <img src="/images/1000%20X%201000.png" alt="Wordpress Developer Logo, Web Developer Logo , Front End Developer Logo" />
                </Link>

                <nav className="en">
                    <button type="button" className="header__nav-btn " aria-label="Toggle main navigation" aria-haspopup="true" aria-expanded="false">
                        <span className="header__nav-btn-icon">
                            <span className="span-1"></span>
                            <span className="span-2"></span>
                            <span className="span-3"></span>
                        </span>
                    </button>
                </nav>

                <div>

                </div>
            </div>
        </Fragment >
    )
}

export default Header;