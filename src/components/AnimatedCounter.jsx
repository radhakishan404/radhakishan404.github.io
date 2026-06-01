import React, { useEffect, useRef, useState } from "react";

function parseValue(raw) {
    const str = String(raw);
    const match = str.match(/^(\d+)/);
    if (!match) return { num: 0, suffix: str };
    return { num: parseInt(match[1], 10), suffix: str.slice(match[0].length) };
}

function AnimatedCounter({ value, duration = 1200, className = "" }) {
    const { num, suffix } = parseValue(value);
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || started.current) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setDisplay(num);
            started.current = true;
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;
                started.current = true;
                observer.disconnect();

                const start = performance.now();
                const tick = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setDisplay(Math.round(eased * num));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [num, duration]);

    return (
        <span ref={ref} className={className}>
            {display}{suffix}
        </span>
    );
}

export default AnimatedCounter;
