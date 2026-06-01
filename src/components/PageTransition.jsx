import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [currentKey, setCurrentKey] = useState(location.key);

    useEffect(() => {
        if (location.key === currentKey) return;

        setVisible(false);
        const timer = setTimeout(() => {
            setCurrentKey(location.key);
            window.scrollTo(0, 0);
            setVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [location.key, currentKey]);

    return (
        <div className={`page-transition${visible ? " is-visible" : ""}`}>
            {children}
        </div>
    );
}

export default PageTransition;
