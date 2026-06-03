import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" },
    { label: "About", to: "/about", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { label: "Projects", to: "/projects", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { label: "Articles", to: "/articles", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
    { label: "Contact", to: "/contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
];

function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.classList.toggle("nav-open", menuOpen);
        return () => document.body.classList.remove("nav-open");
    }, [menuOpen]);

    return (
        <header className={`site-header${menuOpen ? " menu-active" : ""}`}>
            <div className="header-inner">
                <Link className="brand-text" to="/" onClick={() => setMenuOpen(false)}>
                    RK
                </Link>

                <nav className="primary-nav" aria-label="Primary">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            exact={item.to === "/"}
                            activeClassName="is-active"
                            className="nav-link"
                            to={item.to}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    className={`hamburger${menuOpen ? " is-open" : ""}`}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </div>

            <nav className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile">
                <div className="mobile-nav-links">
                    {navItems.map((item, i) => (
                        <NavLink
                            key={item.to}
                            exact={item.to === "/"}
                            activeClassName="is-active"
                            className="mobile-nav-link"
                            to={item.to}
                            onClick={() => setMenuOpen(false)}
                            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
                        >
                            <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d={item.icon} />
                            </svg>
                            <span>{item.label}</span>
                            <svg className="mobile-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </NavLink>
                    ))}
                </div>
                <div className="mobile-nav-footer">
                    <p>Radhakishan Jangid</p>
                    <span>Senior Software Engineer</span>
                </div>
            </nav>
        </header>
    );
}

export default SiteHeader;
