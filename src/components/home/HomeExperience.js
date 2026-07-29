import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function useSectionReveals() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("[data-home-reveal]"));
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion || !("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16, rootMargin: "0px 0px -7% 0px" }
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);
}

export function PointerScene() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let width = 0;
        let height = 0;
        let frame = 0;
        let time = 0;
        const pointer = { x: 0.72, y: 0.46, targetX: 0.72, targetY: 0.46 };

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        const setPointer = (event) => {
            const rect = canvas.getBoundingClientRect();
            pointer.targetX = clamp((event.clientX - rect.left) / rect.width);
            pointer.targetY = clamp((event.clientY - rect.top) / rect.height);
        };

        const resetPointer = () => {
            pointer.targetX = 0.72;
            pointer.targetY = 0.46;
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);
            pointer.x += (pointer.targetX - pointer.x) * 0.055;
            pointer.y += (pointer.targetY - pointer.y) * 0.055;
            time += reducedMotion ? 0 : 0.006;

            const centerX = width * (0.72 + (pointer.x - 0.72) * 0.18);
            const centerY = height * (0.45 + (pointer.y - 0.45) * 0.18);
            const gradient = context.createRadialGradient(
                centerX,
                centerY,
                15,
                centerX,
                centerY,
                Math.max(width, height) * 0.48
            );
            gradient.addColorStop(0, "rgba(209, 139, 213, 0.14)");
            gradient.addColorStop(0.45, "rgba(194, 160, 253, 0.055)");
            gradient.addColorStop(1, "rgba(9, 9, 13, 0)");
            context.fillStyle = gradient;
            context.fillRect(0, 0, width, height);

            for (let line = 0; line < 14; line += 1) {
                const offset = (line - 6.5) * Math.max(24, width * 0.025);
                const drift = Math.sin(time * 1.7 + line * 0.54) * 17;
                const pullX = (pointer.x - 0.5) * 65;
                const pullY = (pointer.y - 0.5) * 55;
                const lineGradient = context.createLinearGradient(width * 0.38, 0, width, height);
                lineGradient.addColorStop(0, "rgba(194, 160, 253, 0)");
                lineGradient.addColorStop(0.45, `rgba(194, 160, 253, ${0.035 + line * 0.003})`);
                lineGradient.addColorStop(0.72, "rgba(207, 73, 129, 0.13)");
                lineGradient.addColorStop(1, "rgba(207, 73, 129, 0)");
                context.beginPath();
                context.moveTo(width * 0.38, height * 0.7 + offset * 0.35);
                context.bezierCurveTo(
                    width * 0.52 + pullX,
                    height * 0.12 + offset + drift,
                    width * 0.79 - pullX * 0.4,
                    height * 0.89 + offset * 0.45 + pullY,
                    width * 1.08,
                    height * 0.22 + offset * 0.6
                );
                context.strokeStyle = lineGradient;
                context.lineWidth = line % 4 === 0 ? 1.4 : 0.75;
                context.stroke();
            }

            if (!reducedMotion) frame = window.requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", setPointer, { passive: true });
        document.addEventListener("mouseleave", resetPointer);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", setPointer);
            document.removeEventListener("mouseleave", resetPointer);
        };
    }, []);

    return <canvas ref={canvasRef} className="home-scene" aria-hidden="true" />;
}

export function MagneticAction({ children, className = "", as = "button", ...props }) {
    const ref = useRef(null);

    const move = (event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        ref.current.style.setProperty("--magnet-x", `${x * 0.18}px`);
        ref.current.style.setProperty("--magnet-y", `${y * 0.22}px`);
    };

    const reset = () => {
        ref.current.style.setProperty("--magnet-x", "0px");
        ref.current.style.setProperty("--magnet-y", "0px");
    };

    const Component = as === "link" ? Link : as;
    return (
        <Component
            ref={ref}
            className={`magnetic-action ${className}`}
            onPointerMove={move}
            onPointerLeave={reset}
            onBlur={reset}
            {...props}
        >
            <span>{children}</span>
        </Component>
    );
}

const BOARD_MESSAGES = [
    "REACT + NEXT.JS",
    "NODE + PRODUCT APIS",
    "FLUTTER + MOBILE",
    "AI + AUTOMATION",
    "OPEN SOURCE TOOLS"
];

export function FlipBoard() {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
        const interval = window.setInterval(() => {
            setMessageIndex((index) => (index + 1) % BOARD_MESSAGES.length);
        }, 2600);
        return () => window.clearInterval(interval);
    }, []);

    const paddedMessage = BOARD_MESSAGES[messageIndex].padEnd(22, " ").slice(0, 22);

    return (
        <button
            className="flip-board"
            type="button"
            onClick={() => setMessageIndex((messageIndex + 1) % BOARD_MESSAGES.length)}
            aria-label={`Current capability: ${BOARD_MESSAGES[messageIndex]}. Show next capability.`}
        >
            <span className="flip-board__hint">click to rotate</span>
            <span className="flip-board__grid" aria-hidden="true">
                {paddedMessage.split("").map((character, index) => (
                    <span
                        className="flip-board__cell"
                        key={`${messageIndex}-${index}`}
                        style={{ "--cell-delay": `${index * 18}ms` }}
                    >
                        {character === " " ? "\u00a0" : character}
                    </span>
                ))}
            </span>
        </button>
    );
}

export function InteractiveGrid() {
    const ref = useRef(null);

    const move = (event) => {
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--grid-x", `${event.clientX - rect.left}px`);
        ref.current.style.setProperty("--grid-y", `${event.clientY - rect.top}px`);
    };

    return (
        <div ref={ref} className="interactive-grid" onPointerMove={move} aria-hidden="true">
            {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} />
            ))}
        </div>
    );
}

export function MacbookScroll() {
    const keys = [
        "esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete",
        "tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "return",
        "caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'",
        "shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"
    ];

    return (
        <section className="macbook-story" aria-labelledby="flagship-title">
            <div className="macbook-story__sticky">
                <div className="section-shell macbook-story__intro">
                    <div>
                        <h2 id="flagship-title">One marketplace. Every operational surface.</h2>
                        <p>InfoLive spans public discovery, administration, APIs, and services.</p>
                    </div>
                </div>

                <div className="macbook-stage" aria-label="InfoLive marketplace displayed on an opening laptop">
                    <div className="macbook">
                        <div className="macbook__lid">
                            <div className="macbook__camera" />
                            <div className="macbook__screen">
                                <img
                                    src="/images/project/first-batch/infolive.png"
                                    alt="InfoLive marketplace interface"
                                />
                            </div>
                        </div>
                        <div className="macbook__base">
                            <span className="macbook__notch" aria-hidden="true" />
                            <div className="macbook__keyboard" aria-hidden="true">
                                {keys.map((key, index) => (
                                    <span key={`${key}-${index}`}>{key}</span>
                                ))}
                            </div>
                            <div className="macbook__trackpad" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                <div className="macbook-story__facts section-shell">
                    <p>Marketplace / Admin operations / API gateway / Services</p>
                    <MagneticAction as="link" to="/portfolio" className="text-action">
                        Explore project work <span aria-hidden="true">↗</span>
                    </MagneticAction>
                </div>
            </div>
        </section>
    );
}

export function TiltProject({ project, expanded, onToggle }) {
    const cardRef = useRef(null);

    const move = (event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        cardRef.current.style.setProperty("--tilt-x", `${-y * 7}deg`);
        cardRef.current.style.setProperty("--tilt-y", `${x * 9}deg`);
        cardRef.current.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
        cardRef.current.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
    };

    const reset = () => {
        cardRef.current.style.setProperty("--tilt-x", "0deg");
        cardRef.current.style.setProperty("--tilt-y", "0deg");
    };

    return (
        <article
            ref={cardRef}
            className={`project-scene ${expanded ? "is-expanded" : ""}`}
            onPointerMove={move}
            onPointerLeave={reset}
            data-home-reveal
        >
            <button
                className="project-scene__button"
                type="button"
                onClick={onToggle}
                aria-expanded={expanded}
            >
                <span className="project-scene__visual">
                    <img src={project.image} alt={`${project.title} interface preview`} />
                </span>
                <span className="project-scene__copy">
                    <span className="project-scene__type">{project.type}</span>
                    <strong>{project.title}</strong>
                    <span>{project.summary}</span>
                </span>
                <span className="project-scene__toggle" aria-hidden="true">
                    {expanded ? "Close" : "Open"}
                </span>
            </button>

            <div className="project-scene__details">
                <p>{project.detail}</p>
                <ul>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                        Visit project <span aria-hidden="true">↗</span>
                    </a>
                ) : (
                    <Link to="/portfolio">
                        View portfolio <span aria-hidden="true">↗</span>
                    </Link>
                )}
            </div>
        </article>
    );
}

export function AsciiPortrait() {
    const canvasRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const image = new Image();
        image.crossOrigin = "anonymous";
        const characters = " .,:;irsXA253hMHGS#9B&@";

        const draw = () => {
            if (!image.complete || !image.naturalWidth) return;
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            context.clearRect(0, 0, width, height);

            const columns = width < 420 ? 54 : 76;
            const cell = width / columns;
            const rows = Math.ceil(height / (cell * 1.45));
            const sampler = document.createElement("canvas");
            const samplerContext = sampler.getContext("2d");
            sampler.width = columns;
            sampler.height = rows;
            samplerContext.drawImage(image, 0, 0, columns, rows);
            const data = samplerContext.getImageData(0, 0, columns, rows).data;

            context.font = `600 ${cell * 1.55}px monospace`;
            context.textAlign = "center";
            context.textBaseline = "middle";

            for (let row = 0; row < rows; row += 1) {
                for (let column = 0; column < columns; column += 1) {
                    const pixel = (row * columns + column) * 4;
                    const alpha = data[pixel + 3] / 255;
                    if (alpha < 0.08) continue;
                    const lightness = (data[pixel] * 0.2126 + data[pixel + 1] * 0.7152 + data[pixel + 2] * 0.0722) / 255;
                    const character = characters[Math.floor(clamp(lightness) * (characters.length - 1))];
                    context.fillStyle = `rgba(${180 + data[pixel] * 0.2}, ${115 + data[pixel + 1] * 0.2}, ${190 + data[pixel + 2] * 0.15}, ${0.2 + alpha * 0.8})`;
                    context.fillText(character, column * cell + cell / 2, row * cell * 1.45 + cell);
                }
            }
            setLoaded(true);
        };

        image.onload = draw;
        image.src = "/images/radhakishan-web-3.jpg";
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, []);

    return (
        <div className={`ascii-portrait ${loaded ? "is-loaded" : ""}`}>
            <canvas ref={canvasRef} aria-label="ASCII interpretation of Radhakishan at his workspace" />
            <span aria-hidden="true">portrait.render("ascii")</span>
        </div>
    );
}

export function CanvasPhrase() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let frame = 0;
        let time = 0;
        let width = 0;
        let height = 0;
        let mask = null;

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);

            mask = document.createElement("canvas");
            mask.width = Math.round(width * ratio);
            mask.height = Math.round(height * ratio);
            const maskContext = mask.getContext("2d");
            maskContext.setTransform(ratio, 0, 0, ratio, 0, 0);
            maskContext.fillStyle = "#fff";
            maskContext.font = `700 ${Math.min(width * 0.12, 150)}px Poppins, sans-serif`;
            maskContext.textAlign = "center";
            maskContext.textBaseline = "middle";
            maskContext.fillText("BUILD USEFUL THINGS", width / 2, height / 2);
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);
            context.save();

            for (let line = -3; line < 26; line += 1) {
                const y = (line / 23) * height;
                const gradient = context.createLinearGradient(0, y, width, y);
                gradient.addColorStop(0, "#bda0f6");
                gradient.addColorStop(0.45, "#c2a0fd");
                gradient.addColorStop(1, "#cf4981");
                context.beginPath();
                context.moveTo(-20, y);
                for (let x = 0; x <= width + 30; x += 18) {
                    const wave = Math.sin(x * 0.012 + line * 0.47 + time) * 11;
                    context.lineTo(x, y + wave);
                }
                context.strokeStyle = gradient;
                context.lineWidth = 4;
                context.stroke();
            }

            context.globalCompositeOperation = "destination-in";
            context.drawImage(mask, 0, 0, width, height);
            context.restore();
            time += 0.022;
            if (!reducedMotion) frame = window.requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener("resize", resize);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="canvas-phrase" aria-label="Build useful things">
            <canvas ref={canvasRef} aria-hidden="true" />
            <span>Build useful things</span>
        </div>
    );
}

export function SquigglyLabel({ children }) {
    return (
        <span className="squiggly-label">
            <svg width="0" height="0" aria-hidden="true">
                <filter id="home-squiggle">
                    <feTurbulence baseFrequency="0.018 0.045" numOctaves="2" seed="2">
                        <animate
                            attributeName="seed"
                            values="2;8;2"
                            dur="1.4s"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="3" />
                </filter>
            </svg>
            {children}
        </span>
    );
}

export function OutcomeCarousel({ items }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
        const timer = window.setInterval(() => setActive((index) => (index + 1) % items.length), 5200);
        return () => window.clearInterval(timer);
    }, [items.length]);

    const item = items[active];

    return (
        <div className="outcome-carousel" data-home-reveal>
            <div className="outcome-carousel__visual">
                {items.map((outcome, index) => (
                    <img
                        key={outcome.title}
                        className={index === active ? "is-active" : ""}
                        src={outcome.image}
                        alt={index === active ? `${outcome.title} project interface` : ""}
                    />
                ))}
            </div>
            <div className="outcome-carousel__copy" aria-live="polite">
                <p>{item.label}</p>
                <blockquote>{item.statement}</blockquote>
                <h3>{item.title}</h3>
                <span>{item.scope}</span>
                <div className="outcome-carousel__controls">
                    <button
                        type="button"
                        onClick={() => setActive((active - 1 + items.length) % items.length)}
                        aria-label="Previous project outcome"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        onClick={() => setActive((active + 1) % items.length)}
                        aria-label="Next project outcome"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
