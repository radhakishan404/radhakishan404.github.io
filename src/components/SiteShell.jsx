import React from "react";
import { useLocation } from "react-router-dom";
import { getArticleBySlug } from "../content/articles";
import useTheme from "../hooks/useTheme";
import SiteHeader from "./SiteHeader";
import SocialRail from "./SocialRail";

function SiteShell({ children }) {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const articleMatch = location.pathname.match(/^\/articles\/([^/]+)$/);
    const article = articleMatch ? getArticleBySlug(articleMatch[1]) : null;
    const isHtmlArticle = article?.kind === "html";

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
        <div className="site-root">
            <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
            <SocialRail />
            <main key={location.pathname} className="site-main">
                {children}
            </main>
            <footer className="site-footer">
                <div className="shell footer-shell">
                    <p className="footer-copy">© {new Date().getFullYear()} Radhakishan Jangid</p>
                </div>
            </footer>
        </div>
    );
}

export default SiteShell;
