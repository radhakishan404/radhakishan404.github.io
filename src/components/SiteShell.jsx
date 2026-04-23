import React from "react";
import { useLocation } from "react-router-dom";
import { getArticleBySlug } from "../content/articles";
import { logoImages } from "../data/images";
import { socialLinks } from "../data/site";
import useScrollReveal from "../hooks/useScrollReveal";
import useTheme from "../hooks/useTheme";
import CursorGlow from "./CursorGlow";
import SiteHeader from "./SiteHeader";

const socialCode = {
    github: "gh",
    linkedin: "li",
    x: "x",
    dev: "dev",
    instagram: "ig",
    email: "mail"
};

function SiteShell({ children }) {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useScrollReveal([location.pathname]);

    const articleMatch = location.pathname.match(/^\/articles\/([^/]+)$/);
    const article = articleMatch ? getArticleBySlug(articleMatch[1]) : null;
    const isHtmlArticle = article?.kind === "html";
    const isHomeRoute = location.pathname === "/";

    if (isHtmlArticle) {
        return (
            <div className="site-root site-root-embedded">
                <main key={location.pathname} className="site-main site-main-embedded">
                    {children}
                </main>
            </div>
        );
    }

    return (
        <div className={`site-root${isHomeRoute ? " site-root-home" : ""}`}>
            {!isHomeRoute ? <CursorGlow /> : null}
            {!isHomeRoute ? <SiteHeader theme={theme} onToggleTheme={toggleTheme} /> : null}
            <main key={location.pathname} className={`site-main${isHomeRoute ? " site-main-home" : ""}`}>
                {children}
            </main>
            {!isHomeRoute ? (
                <footer className="site-footer">
                    <div className="shell footer-shell" data-reveal>
                        <div className="footer-brand">
                            <img src={logoImages.withName} alt="Radhakishan Jangid logo" />
                        </div>
                        <p className="footer-line">// ─────────────────────────────────── //</p>
                        <p className="footer-line">//  radhakishan_jangid © {new Date().getFullYear()}          //</p>
                        <p className="footer-line">//  built with React + too much coffee //</p>
                        <p className="footer-line">// ─────────────────────────────────── //</p>
                        <div className="footer-social">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target={link.id === "email" ? undefined : "_blank"}
                                    rel={link.id === "email" ? undefined : "noreferrer"}
                                >
                                    [{socialCode[link.id] || link.id}]
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            ) : null}
        </div>
    );
}

export default SiteShell;
