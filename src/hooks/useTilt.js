import { useCallback, useRef } from "react";

function useTilt({ max = 8, scale = 1.02, speed = 400 } = {}) {
    const ref = useRef(null);
    const rafId = useRef(0);

    const handleMove = useCallback((e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (0.5 - y) * max;
            const rotateY = (x - 0.5) * max;
            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
            el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
        });
    }, [max, scale, speed]);

    const handleLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        cancelAnimationFrame(rafId.current);
        el.style.transform = "";
        el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    }, [speed]);

    const tiltProps = {
        onMouseMove: handleMove,
        onMouseLeave: handleLeave,
    };

    return { ref, tiltProps };
}

export default useTilt;
