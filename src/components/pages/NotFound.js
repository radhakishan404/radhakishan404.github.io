import React from "react";
import { Link } from "react-router-dom";
import PageFrame from "../common/PageFrame";

export default function NotFound() {
    return <PageFrame>
        <section className="page-shell page-hero">
            <p className="page-eyebrow">404 — Page not found</p>
            <h1>This page isn't here.</h1>
            <p>The link may have changed. You can still explore my work and writing.</p>
            <p><Link to="/">Go home</Link> · <Link to="/portfolio">Portfolio</Link> · <Link to="/articles">Articles</Link></p>
        </section>
    </PageFrame>;
}
