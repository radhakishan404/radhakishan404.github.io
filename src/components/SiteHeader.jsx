import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

    return (
        <header className="site-header">
            <div className="shell header-shell">
                <Link className="brand-mark" to="/" onClick={() => setMenuOpen(false)}>
                    <span className="brand-mark-label">Radhakishan Jangid</span>
                    <span className="brand-mark-subtitle">Senior software engineer</span>
                </Link>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    <span />
                    <span />
                </button>

                <div className={`header-panel${menuOpen ? " is-open" : ""}`}>
                    <nav className="primary-nav" aria-label="Primary">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                exact={item.to === "/"}
                                activeClassName="is-active"
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <Link className="header-cta" to="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk</Link>
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
