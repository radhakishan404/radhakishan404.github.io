import React from "react";

function ThemeToggle({ theme, onToggleTheme }) {
    const isDark = theme === "dark";

    return (
        <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle color theme">
            <span className="theme-toggle-track">
                <span className={`theme-toggle-thumb${isDark ? " is-dark" : ""}`} />
            </span>
            <span className="theme-toggle-label">{isDark ? "Dark" : "Light"}</span>
        </button>
    );
}

export default ThemeToggle;
