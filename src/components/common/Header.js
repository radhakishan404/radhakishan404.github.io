import React, { Fragment } from "react";
import "../css/Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <Fragment>
            <header className="site-header">
                <div className="header-inner container-wide">
                    <div className="site-logo">
                        <Link to={"/"}>
                            <h2 className="logo-icon">R</h2>
                        </Link>
                    </div>
                    <ul className="desktop-menu">
                        <li className="has-dot home">
                            <Link to={"/"}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="has-dot portfolio">
                            <Link to={"/portfolio"}>
                                <span>Portfolio</span>
                            </Link>
                        </li>
                        <li className="has-dot service">
                            <Link to={"/services"}>
                                <span>Services</span>
                            </Link>
                        </li>
                        <li className="has-dot about">
                            <Link to={"/about"}>
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="contact">
                            <Link to={"/contact"}>
                                <span>Say Hello</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="site-header-burger">
                        <div className="ml-3 burger js-menu-trigger">
                            <span className="closed"><img src={"https://githubuniverse.com/assets/img/svgs/burger.svg"} alt="menu icon" /></span>
                            <span className="open"><img src={"https://githubuniverse.com/assets/img/svgs/close.svg"} alt="close icon" /></span>
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
                            <li className="watch-sub-nav service">
                                <Link to={"/services"}>
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li className="watch-sub-nav about">
                                <Link to={"/about"}>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="contact">
                                <Link to={"/contact"}>
                                    <span>Say Hello</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >
        </Fragment >
    )
}

export default Header;