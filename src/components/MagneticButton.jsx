import React, { useCallback, useRef } from "react";

function MagneticButton({ children, className = "", as: Tag = "button", strength = 0.3, ...rest }) {
    const ref = useRef(null);

    const handleMove = useCallback((e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
    }, [strength]);

    const handleLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "";
    }, []);

    return (
        <Tag
            ref={ref}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ transition: "transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)", ...rest.style }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default MagneticButton;
