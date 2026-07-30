import React, { Fragment, useEffect, useState } from "react";
import "../css/Header.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

function Header(props) {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        $('body').removeClass('menu-is-active');
        $("body").removeClass("nav--open");
        $(".header__nav-btn").removeClass("header__nav-btn--active");
        $(".header-nav").removeClass("header-nav-open");

        const navigationButton = $(".header__nav-btn");
        navigationButton.off("click.headerNavigation").on("click.headerNavigation", function () {
            $("body").toggleClass("nav--open");
            const isOpen = $(this).toggleClass("header__nav-btn--active").hasClass("header__nav-btn--active");
            $(this).attr("aria-expanded", String(isOpen));
            $(".header-nav").toggleClass("header-nav-open");
        });

        return () => {
            navigationButton.off("click.headerNavigation");
            $("body").removeClass("menu-is-active nav--open");
        };
    }, []);

    const menuTriggerFunction = () => {
        $('body').toggleClass('menu-is-active');
        setMobileMenuOpen((isOpen) => !isOpen);
    }

    return (
        <Fragment>
            <header className="header-nav" id="legacy-sidebar">
                <div className="header-nav-wrapper">
                    <nav className="header-nav-menu" aria-label="Main">
                        <ul>
                            <li>
                                <Link
                                    aria-current={location.pathname === "/" ? "page" : undefined}
                                    className={location.pathname === "/" ? "active" : ""}
                                    to={"/"}
                                >
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
                                <Link to={"/portfolio"} className={location.pathname.startsWith("/portfolio") ? "active" : ""}>
                                    <span className="menu-item-title text-gradient">Portfolio</span>
                                    <span>Some of the projects I worked on</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/articles"} className={location.pathname.startsWith("/articles") ? "active" : ""}>
                                    <span className="menu-item-title text-gradient">Articles</span>
                                    <span>Guides, prompts, and technical writing</span>
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
                        <button
                            className="ml-3 burger"
                            type="button"
                            aria-label="Toggle mobile navigation"
                            aria-controls="mobile-drawer"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => menuTriggerFunction()}
                        >
                            <span className="closed"><img src={"/images/burger.svg"} alt="menu icon" /></span>
                            <span className="open"><img src={"/images/close.svg"} alt="close icon" /></span>
                        </button>
                    </div>
                </div>
                <nav className="mobile-drawer" id="mobile-drawer">
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
                            <li className="watch-sub-nav articles">
                                <Link to={"/articles"}>
                                    <span>Articles</span>
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
                    <button
                        type="button"
                        className="header__nav-btn"
                        aria-label="Toggle main navigation"
                        aria-controls="legacy-sidebar"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
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
