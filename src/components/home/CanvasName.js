import React, { useEffect, useRef } from "react";

const COLORS = [
    "#ffe580",
    "#ff7571",
    "#ea5dad",
    "#c2a0fd",
    "#9867f0",
    "#3bf0e4",
    "#73f280"
];

function drawClippedText(context, width, height, time, pointer) {
    const isCompact = width < 620;
    const fontSize = Math.min(
        isCompact ? width * 0.09 : width * 0.118,
        isCompact ? 42 : 112
    );
    const lines = ["RADHAKISHAN"];
    const lineHeight = fontSize * 0.92;
    const startY = height * (isCompact ? 0.18 : 0.36) - ((lines.length - 1) * lineHeight) / 2;

    context.save();
    context.lineCap = "round";

    const baseGradient = context.createLinearGradient(0, 0, width, height);
    COLORS.forEach((color, index) => {
        baseGradient.addColorStop(index / (COLORS.length - 1), color);
    });
    context.globalAlpha = 0.72;
    context.fillStyle = baseGradient;
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 1;

    const gap = Math.max(10, height / 28);
    const amplitude = 10 + pointer.y * 13;
    const phaseShift = pointer.x * Math.PI * 1.4;

    for (let y = -gap; y <= height + gap; y += gap) {
        const progress = (y + gap) / (height + gap * 2);
        const colorIndex = Math.floor(progress * COLORS.length) % COLORS.length;
        const wave = Math.sin(time * 0.0011 + y * 0.035 + phaseShift);
        const controlOffset = wave * amplitude;

        context.beginPath();
        context.moveTo(-20, y + controlOffset);
        context.bezierCurveTo(
            width * 0.28,
            y - amplitude - pointer.x * 10,
            width * 0.68,
            y + amplitude + pointer.y * 8,
            width + 20,
            y - controlOffset
        );
        context.strokeStyle = COLORS[colorIndex];
        context.lineWidth = Math.max(1.25, gap * 0.2);
        context.stroke();
    }

    context.globalCompositeOperation = "destination-in";
    context.fillStyle = "#ffffff";
    context.font = `900 ${fontSize}px Poppins, sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    lines.forEach((line, index) => {
        context.fillText(line, width / 2, startY + index * lineHeight);
    });

    context.restore();
}

function CanvasName() {
    const canvasRef = useRef(null);
    const pointerRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const context = canvas.getContext("2d");
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let frameId;
        let width = 0;
        let height = 0;
        let isVisible = true;

        const resize = () => {
            const bounds = canvas.getBoundingClientRect();
            const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
            width = Math.max(1, bounds.width);
            height = Math.max(1, bounds.height);
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        const render = (time = 0) => {
            context.clearRect(0, 0, width, height);
            drawClippedText(context, width, height, time, pointerRef.current);

            if (!prefersReducedMotion.matches && isVisible && !document.hidden) {
                frameId = window.requestAnimationFrame(render);
            }
        };

        const restart = () => {
            window.cancelAnimationFrame(frameId);
            resize();
            render(0);
        };

        const handleVisibility = () => {
            if (!document.hidden && isVisible && !prefersReducedMotion.matches) {
                restart();
            }
        };

        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible) restart();
            else window.cancelAnimationFrame(frameId);
        }, { threshold: 0.05 });

        resize();
        render(0);
        observer.observe(canvas);
        window.addEventListener("resize", restart);
        document.addEventListener("visibilitychange", handleVisibility);
        prefersReducedMotion.addEventListener("change", restart);

        return () => {
            window.cancelAnimationFrame(frameId);
            observer.disconnect();
            window.removeEventListener("resize", restart);
            document.removeEventListener("visibilitychange", handleVisibility);
            prefersReducedMotion.removeEventListener("change", restart);
        };
    }, []);

    const handlePointerMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerRef.current = {
            x: (event.clientX - bounds.left) / bounds.width - 0.5,
            y: (event.clientY - bounds.top) / bounds.height - 0.5
        };
    };

    const resetPointer = () => {
        pointerRef.current = { x: 0, y: 0 };
    };

    return (
        <div
            className="canvas-name"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
        >
            <canvas ref={canvasRef} aria-hidden="true" />
            <span className="canvas-name__label" aria-hidden="true">
                Move inside this frame
            </span>
        </div>
    );
}

export default CanvasName;
