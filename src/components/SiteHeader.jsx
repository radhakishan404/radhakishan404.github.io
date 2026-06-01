import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Articles", to: "/articles" },
    { label: "Contact", to: "/contact" }
];

function SiteHeader() {
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
            <div className="header-inner">
                <Link className="brand-text" to="/" onClick={() => setMenuOpen(false)}>
                    Radhakishan Jangid
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
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </div>

            <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        exact={item.to === "/"}
                        activeClassName="is-active"
                        className="nav-link"
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </header>
    );
}

export default SiteHeader;
