import React, { useEffect, useRef } from "react";

function ScrollProgress() {
    const barRef = useRef(null);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar) return;

        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
            bar.style.transform = `scaleX(${progress})`;
        };

        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    return <div ref={barRef} className="scroll-progress" />;
}

export default ScrollProgress;
