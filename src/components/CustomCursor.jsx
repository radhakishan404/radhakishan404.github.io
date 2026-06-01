import React, { useEffect, useRef } from "react";

function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            dot.style.display = "none";
            ring.style.display = "none";
            return;
        }

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let scale = 1;
        let targetScale = 1;

        const move = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const checkHover = (e) => {
            const target = e.target;
            const hoverable = target.closest("a, button, [data-cursor-hover], .project-card, .public-card, .skill-card, .article-list-item, .filter-chip");
            targetScale = hoverable ? 2.2 : 1;
        };

        const loop = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            scale += (targetScale - scale) * 0.12;

            dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
            ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px) scale(${scale})`;
            requestAnimationFrame(loop);
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseover", checkHover);
        requestAnimationFrame(loop);

        document.documentElement.classList.add("has-custom-cursor");

        return () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", checkHover);
            document.documentElement.classList.remove("has-custom-cursor");
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}

export default CustomCursor;
