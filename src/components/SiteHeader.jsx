import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logoImages } from "../data/images";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Articles", to: "/articles" },
    { label: "Contact", to: "/contact" }
];

function SiteHeader({ theme, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.classList.toggle("nav-open", menuOpen);
        return () => {
            document.body.classList.remove("nav-open");
        };
    }, [menuOpen]);

    return (
        <header className="site-header">
            <div className="shell header-shell">
                <Link className="brand-mark" to="/" onClick={() => setMenuOpen(false)}>
                    <span className="brand-mark-heading">
                        <span className="brand-mark-logo-wrap">
                            <img className="brand-mark-logo" src={logoImages.icon} alt="Radhakishan logo icon" />
                        </span>
                        <span className="brand-mark-label">
                            radhakishan_jangid
                            <span className="brand-cursor" aria-hidden="true">_</span>
                        </span>
                    </span>
                    <span className="brand-mark-subtitle">// senior software engineer</span>
                </Link>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    {menuOpen ? "[x]" : "[≡]"}
                </button>

                <div className={`header-panel${menuOpen ? " is-open" : ""}`}>
                    <nav className="primary-nav" aria-label="Primary">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                exact={item.to === "/"}
                                activeClassName="is-active"
                                className="primary-nav-link"
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <Link className="header-cta" to="/contact" onClick={() => setMenuOpen(false)}>[ ./contact ]</Link>
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
