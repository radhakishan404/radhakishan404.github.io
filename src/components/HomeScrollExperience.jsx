import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function getFramePath(frameDir, frameIndex) {
    return `/${frameDir}/frame_${String(frameIndex).padStart(4, "0")}.jpg`;
}

function renderAccentLine(line) {
    const parts = String(line || "").split(/\[\[(.*?)\]\]/g);
    return parts.map((part, index) => (
        index % 2 === 1
            ? <span key={`${part}-${index}`} className="is-accent">{part}</span>
            : <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
    ));
}

function HomeScrollExperience({
    id,
    frameDir = "frames-rk",
    frameCount = 160,
    sectionHeightVh = 400,
    eyebrow = "Portfolio // Sequence",
    titlePrimary = ["Radhakishan", "Jangid"],
    titleSecondary = [],
    description = "Cinematic sequence.",
    topLeftLabel = "Telemetry Link - Live",
    topRightLabel = "Arc Reactor",
    progressCenterLabel = "Cinematic Narrative",
    readoutMode = "power",
    introFadeEnd = 0.08,
    cards = [],
    orbitalItems = [],
    copyAlign = "left",
    cardsAlign = "right"
}) {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const framesRef = useRef([]);
    const tickingRef = useRef(false);
    const loadedRef = useRef(false);
    const lastFrameRef = useRef(-1);

    const [loaded, setLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const [progress, setProgress] = useState(0);
    const [visibleCardIds, setVisibleCardIds] = useState(() => new Set());

    const resolvedCards = useMemo(() => {
        if (Array.isArray(cards) && cards.length) {
            return cards;
        }

        return [
            {
                id: "c1",
                show: 0.1,
                hide: 0.3,
                label: "01 - Intro",
                quote: "Senior engineer focused on product systems.",
                speaker: "Radhakishan Jangid",
                meta: "Portfolio"
            },
            {
                id: "c2",
                show: 0.35,
                hide: 0.58,
                label: "02 - Work",
                quote: "Building software that ships and stays maintainable.",
                speaker: "Engineering",
                meta: "Execution"
            },
            {
                id: "c3",
                show: 0.62,
                hide: 0.86,
                label: "03 - Public",
                quote: "Open-source work and technical writing for builders.",
                speaker: "Open Source",
                meta: "Community"
            }
        ];
    }, [cards]);

    const hasSecondaryTitle = Array.isArray(titleSecondary) && titleSecondary.length > 0;

    useEffect(() => {
        let cancelled = false;
        let loadedCount = 0;
        const images = [];

        for (let index = 1; index <= frameCount; index += 1) {
            const image = new Image();
            image.src = getFramePath(frameDir, index);

            image.onload = () => {
                if (cancelled) {
                    return;
                }
                loadedCount += 1;
                setLoadProgress(loadedCount / frameCount);
                if (loadedCount === frameCount) {
                    loadedRef.current = true;
                    setLoaded(true);
                }
            };

            image.onerror = () => {
                if (cancelled) {
                    return;
                }
                loadedCount += 1;
                setLoadProgress(loadedCount / frameCount);
                if (loadedCount === frameCount) {
                    loadedRef.current = true;
                    setLoaded(true);
                }
            };

            images.push(image);
        }

        framesRef.current = images;

        return () => {
            cancelled = true;
        };
    }, [frameCount, frameDir]);

    const drawFrame = useCallback((frameIndex) => {
        const canvas = canvasRef.current;
        const image = framesRef.current[frameIndex];

        if (!canvas || !image || !image.complete || !image.naturalWidth) {
            return;
        }

        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imageRatio = image.naturalWidth / image.naturalHeight;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth;
        let drawHeight;

        if (canvasRatio > imageRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imageRatio;
        } else {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imageRatio;
        }

        if (window.innerWidth <= 768) {
            drawWidth *= 1.28;
            drawHeight *= 1.28;
        }

        const drawX = (canvasWidth - drawWidth) / 2;
        const drawY = (canvasHeight - drawHeight) / 2;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    }, []);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(window.innerWidth * dpr);
        canvas.height = Math.round(window.innerHeight * dpr);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
    }, [drawFrame]);

    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [resizeCanvas]);

    useEffect(() => {
        if (!loaded) {
            return;
        }

        drawFrame(0);
        lastFrameRef.current = 0;
    }, [drawFrame, loaded]);

    useEffect(() => {
        const onScroll = () => {
            if (tickingRef.current) {
                return;
            }

            tickingRef.current = true;
            window.requestAnimationFrame(() => {
                tickingRef.current = false;

                const section = sectionRef.current;
                if (!section) {
                    return;
                }

                const rect = section.getBoundingClientRect();
                const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
                const nextProgress = clamp(-rect.top / scrollable, 0, 1);
                setProgress(nextProgress);

                if (loadedRef.current) {
                    const nextFrame = Math.min(frameCount - 1, Math.floor(nextProgress * frameCount));
                    if (nextFrame !== lastFrameRef.current) {
                        lastFrameRef.current = nextFrame;
                        drawFrame(nextFrame);
                    }
                }

                const visible = new Set(
                    resolvedCards
                        .filter((item) => nextProgress >= item.show && nextProgress <= item.hide)
                        .map((item) => item.id)
                );

                setVisibleCardIds((current) => {
                    const currentKeys = [...current].sort().join(",");
                    const nextKeys = [...visible].sort().join(",");
                    return currentKeys === nextKeys ? current : visible;
                });
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [drawFrame, frameCount, resolvedCards]);

    const currentFrame = String(
        Math.min(frameCount, Math.max(1, Math.floor(progress * frameCount) + 1))
    ).padStart(3, "0");
    const totalFrames = String(frameCount).padStart(3, "0");

    const liveReadout = readoutMode === "power"
        ? `${(87.3 + Math.sin(progress * Math.PI * 2) * 6.7).toFixed(1)}%`
        : `SEQ ${currentFrame} / ${totalFrames}`;

    const heroOpacity = introFadeEnd > 0
        ? clamp(1 - progress / introFadeEnd, 0, 1)
        : 1;

    const primaryTitleOpacity = hasSecondaryTitle
        ? clamp((0.62 - progress) / 0.14, 0, 1)
        : 1;

    const secondaryTitleOpacity = hasSecondaryTitle
        ? clamp((progress - 0.48) / 0.14, 0, 1)
        : 0;

    const sectionStyle = {
        "--cine-scroll-height": `${sectionHeightVh}vh`
    };

    return (
        <section id={id} ref={sectionRef} className={`cine-seq${orbitalItems.length ? " has-orbit" : ""}`} style={sectionStyle}>
            <div className="cine-seq-sticky">
                <div className="cine-seq-layer" aria-hidden="true">
                    <canvas ref={canvasRef} className="cine-seq-canvas" />
                    <div className="cine-seq-vignette" />
                    <div className="cine-seq-grain" />
                </div>

                <div className="cine-corners" aria-hidden="true">
                    <span className="cine-corner is-tl" />
                    <span className="cine-corner is-tr" />
                    <span className="cine-corner is-bl" />
                    <span className="cine-corner is-br" />
                </div>

                <div className="cine-topline is-left" aria-hidden="true">
                    <span className="cine-topline-rule" />
                    <span>{topLeftLabel}</span>
                </div>

                <div className="cine-topline is-right" aria-hidden="true">
                    <span>{topRightLabel}</span>
                    <span className="cine-dot" />
                    <span>{liveReadout}</span>
                </div>

                <div
                    className={`cine-copy ${copyAlign === "right" ? "is-right" : "is-left"}`}
                    style={{
                        opacity: heroOpacity,
                        transform: `translateY(${(1 - heroOpacity) * 12}px)`
                    }}
                >
                    <span className="cine-eyebrow">{eyebrow}</span>
                    <div className="cine-titles">
                        <h2 className="cine-title" style={{ opacity: primaryTitleOpacity }}>
                            {titlePrimary.map((line) => (
                                <span key={line} className="cine-title-line">{renderAccentLine(line)}</span>
                            ))}
                        </h2>
                        {hasSecondaryTitle ? (
                            <h2 className="cine-title is-secondary" style={{ opacity: secondaryTitleOpacity }}>
                                {titleSecondary.map((line) => (
                                    <span key={line} className="cine-title-line">{renderAccentLine(line)}</span>
                                ))}
                            </h2>
                        ) : null}
                    </div>
                    <p>{description}</p>
                    {!loaded ? <span className="cine-load">Loading frames {Math.round(loadProgress * 100)}%</span> : null}
                </div>

                <div className={`cine-cards ${cardsAlign === "left" ? "is-left" : "is-right"}`}>
                    {resolvedCards.map((card, index) => {
                        const visible = visibleCardIds.has(card.id);
                        return (
                            <article
                                key={card.id}
                                className={`cine-card cine-card-${index}${visible ? " is-visible" : ""}`}
                            >
                                <span className="cine-card-label">{card.label}</span>
                                <p>{card.quote}</p>
                                <div className="cine-card-meta">
                                    <strong>{card.speaker}</strong>
                                    <span>{card.meta}</span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {orbitalItems.length ? (
                    <div
                        className="cine-orbit-stage"
                        aria-hidden="true"
                        style={{ "--orbit-progress": `${progress * 360}deg` }}
                    >
                        {orbitalItems.slice(0, 8).map((item, index) => (
                            <span
                                key={item}
                                className="cine-orbit-chip"
                                style={{
                                    "--orbit-index": index,
                                    "--orbit-total": Math.min(orbitalItems.length, 8)
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                ) : null}

                <div className="cine-cards-mobile" aria-hidden="true">
                    {resolvedCards.map((card) => {
                        const visible = visibleCardIds.has(card.id);
                        return (
                            <article key={card.id} className={`cine-card-mobile${visible ? " is-visible" : ""}`}>
                                <span className="cine-card-label">{card.label}</span>
                                <p>{card.quote}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="cine-progress" aria-hidden="true">
                    <div className="cine-progress-track">
                        <div
                            className="cine-progress-fill"
                            style={{ transform: `scaleX(${progress.toFixed(4)})` }}
                        />
                    </div>
                    <div className="cine-progress-meta">
                        <span>SEQ {currentFrame} / {totalFrames}</span>
                        <span>{progressCenterLabel}</span>
                        <span>Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeScrollExperience;
