import React from "react";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "../data/site";
import useScrollReveal from "../hooks/useScrollReveal";
import CustomCursor from "./CustomCursor";
import PageTransition from "./PageTransition";
import ScrollProgress from "./ScrollProgress";
import SiteHeader from "./SiteHeader";

function SiteShell({ children }) {
    const location = useLocation();

    useScrollReveal([location.pathname]);

    return (
        <>
            <CustomCursor />
            <ScrollProgress />
            <SiteHeader />
            <PageTransition>
                <main key={location.pathname}>
                    {children}
                </main>
            </PageTransition>
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-brand-col">
                        <h3>Radhakishan Jangid</h3>
                        <p>Senior software engineer building product systems, frontend experiences, and technical content.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Pages</h4>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/articles">Articles</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="/privacy-policy.html">Privacy Policy</a>
                    </div>
                    <div className="footer-col">
                        <h4>Connect</h4>
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                target={link.id === "email" ? undefined : "_blank"}
                                rel={link.id === "email" ? undefined : "noreferrer"}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>&copy; {new Date().getFullYear()} Radhakishan Jangid</span>
                    <div className="footer-social-row">
                        {socialLinks.filter((l) => l.id !== "email").map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default SiteShell;
