import React, { useEffect, useRef, useState } from "react";
import { profileImages } from "../data/images";

const cycleMs = 4200;

function HeroImageShowcase() {
    const images = (profileImages.showcase || []).slice(0, 5);
    const [activeIndex, setActiveIndex] = useState(0);
    const showcaseRef = useRef(null);

    useEffect(() => {
        if (!images.length) {
            return undefined;
        }

        setActiveIndex(0);
        return undefined;
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) {
            return undefined;
        }

        const prefersReducedMotion =
            typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            return undefined;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, cycleMs);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [images.length]);

    const handleMouseMove = (event) => {
        if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        if (showcaseRef.current) {
            showcaseRef.current.style.setProperty("--mx", x.toFixed(3));
            showcaseRef.current.style.setProperty("--my", y.toFixed(3));
        }
    };

    const handleMouseLeave = () => {
        if (showcaseRef.current) {
            showcaseRef.current.style.setProperty("--mx", "0");
            showcaseRef.current.style.setProperty("--my", "0");
        }
    };

    const cardClassName = (index) => {
        const relative = (index - activeIndex + images.length) % images.length;

        if (relative === 0) return "hero-image-card is-main";
        if (relative === 1) return "hero-image-card is-support-1";
        if (relative === 2) return "hero-image-card is-support-2";
        if (relative === 3) return "hero-image-card is-support-3";
        if (relative === 4) return "hero-image-card is-support-4";
        return "hero-image-card is-hidden";
    };

    if (!images.length) {
        return null;
    }

    return (
        <div ref={showcaseRef} className="hero-image-showcase" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className={`hero-showcase-stage${images.length < 5 ? " is-compact" : ""}`}>
                {images.map((src, index) => (
                    <article key={`${src}-${index}`} className={cardClassName(index)}>
                        <img src={src} alt={`Radhakishan portrait ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} />
                    </article>
                ))}
                <div className="hero-showcase-orb" aria-hidden="true" />
            </div>
            <div className="hero-showcase-track" aria-hidden="true">
                {images.map((_, index) => (
                    <span key={`track-${index}`} className={`hero-showcase-dot${index === activeIndex ? " is-active" : ""}`} />
                ))}
            </div>
        </div>
    );
}

export default HeroImageShowcase;
