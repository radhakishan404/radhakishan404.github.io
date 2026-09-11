import React from "react";
import Header from "./Header";
import PointerField from "./PointerField";
import "../css/Pages.scss";

function PageFrame({ children, className = "" }) {
    return (
        <div className={`main-wrapper site-page ${className}`}>
            <Header />
            <PointerField className="page-pointer-field" />
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
