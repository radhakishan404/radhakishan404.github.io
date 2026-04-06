import React from "react";
import { socialLinks } from "../data/site";

function SocialIcon({ id }) {
    switch (id) {
        case "github":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.08-.65.08-.65 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.16 3.08.88.09-.69.37-1.16.67-1.43-2.36-.27-4.84-1.18-4.84-5.24 0-1.16.42-2.11 1.1-2.85-.11-.27-.48-1.36.11-2.83 0 0 .9-.29 2.95 1.09a10.19 10.19 0 0 1 5.38 0c2.05-1.38 2.95-1.09 2.95-1.09.59 1.47.22 2.56.11 2.83.68.74 1.1 1.69 1.1 2.85 0 4.07-2.49 4.97-4.87 5.23.38.33.72.98.72 1.98v2.94c0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
                </svg>
            );
        case "linkedin":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.05ZM20 13.05c0-3.35-1.79-4.91-4.18-4.91a3.62 3.62 0 0 0-3.25 1.79V8.5H9.19V20h3.38v-6.05c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20H20v-6.95Z" />
                </svg>
            );
        case "x":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="m18.9 2 2.6 3.8-6.02 6.88L22 22h-5.16l-4.04-5.47L8.02 22H2.88l6.38-7.3L2 2h5.25l3.67 4.97L15.28 2h3.62Zm-1.8 17.1h1.43L6.14 4.8H4.6l12.5 14.3Z" />
                </svg>
            );
        case "dev":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M7.8 9.4h-1v5.2h1c1.43 0 1.95-.83 1.95-2.61 0-1.84-.54-2.59-1.95-2.59ZM3 6.5h18A1.5 1.5 0 0 1 22.5 8v8A1.5 1.5 0 0 1 21 17.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5Zm2.8 2v7h2.2c2.72 0 4.05-1.4 4.05-4.5 0-3-1.36-4.5-4.05-4.5H5.8Zm7.2 0v7h4.55v-1.8H15.2v-1h1.95v-1.75H15.2v-.95h2.32V8.5H13Zm5.02 0 1.55 7h2.03l1.4-7h-1.97l-.48 3.77-.5-3.77h-1.74l-.56 3.78-.45-3.78h-1.94Z" />
                </svg>
            );
        case "instagram":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9A3.7 3.7 0 0 0 7.5 20.2h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm4.5 3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.4-.94a1.22 1.22 0 1 1 0 2.44 1.22 1.22 0 0 1 0-2.44Z" />
                </svg>
            );
        case "email":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.8v.38l9 5.84 9-5.84V7.3H3Zm18 9.4v-6.03l-8.51 5.52a.9.9 0 0 1-.98 0L3 10.67v6.03h18Z" />
                </svg>
            );
        default:
            return null;
    }
}

function SocialRail() {
    return (
        <aside className="social-rail" aria-label="Social links">
            {socialLinks.map((link, index) => (
                <a
                    key={link.href}
                    href={link.href}
                    target={link.id === "email" ? undefined : "_blank"}
                    rel={link.id === "email" ? undefined : "noreferrer"}
                    className="social-rail-link"
                    style={{ animationDelay: `${index * 80}ms` }}
                    aria-label={link.label}
                    title={link.label}
                >
                    <SocialIcon id={link.id} />
                    <span>{link.label}</span>
                </a>
            ))}
        </aside>
    );
}

export default SocialRail;
