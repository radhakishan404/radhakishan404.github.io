import React, { useEffect, useRef } from "react";

function CursorGlow() {
    const glowRef = useRef(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isTouch = window.matchMedia("(hover: none)").matches;

        if (prefersReducedMotion || isTouch) {
            return undefined;
        }

        const handleMove = (event) => {
            targetRef.current = { x: event.clientX, y: event.clientY };
            if (glowRef.current) {
                glowRef.current.classList.add("is-visible");
            }
        };

        const handleLeave = () => {
            if (glowRef.current) {
                glowRef.current.classList.remove("is-visible");
            }
        };

        const animate = () => {
            const current = currentRef.current;
            const target = targetRef.current;

            current.x += (target.x - current.x) * 0.14;
            current.y += (target.y - current.y) * 0.14;

            if (glowRef.current) {
                glowRef.current.style.left = `${current.x}px`;
                glowRef.current.style.top = `${current.y}px`;
            }

            rafRef.current = window.requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        window.addEventListener("mouseout", handleLeave);
        rafRef.current = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseout", handleLeave);
            if (rafRef.current) {
                window.cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;
