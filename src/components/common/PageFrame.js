import React, { useEffect } from "react";
import Header from "./Header";
import "../css/Pages.scss";

function PageFrame({ children, className = "", title }) {
    useEffect(() => {
        if (title) document.title = `${title} - Radhakishan Jangid`;
    }, [title]);

    return (
        <div className={`main-wrapper site-page ${className}`}>
            <Header />
            <main id="content" className="main page-content" aria-label="Content">
                <div className="header-content">
                    <div className="content__main">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PageFrame;
