import React, { useEffect, useRef } from "react";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function PointerField({ className = "" }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
        const interactive = !reducedMotion && !coarsePointer;
        let width = 0;
        let height = 0;
        let frame = 0;
        let time = 0;
        const pointer = { x: 0.72, y: 0.42, targetX: 0.72, targetY: 0.42 };
        const trail = Array.from({ length: 7 }, () => ({ x: 0.72, y: 0.42 }));

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
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
            pointer.targetY = 0.42;
        };

        const draw = () => {
            frame = 0;
            context.clearRect(0, 0, width, height);
            pointer.x += (pointer.targetX - pointer.x) * 0.055;
            pointer.y += (pointer.targetY - pointer.y) * 0.055;
            time += interactive ? 0.006 : 0;

            trail[0].x += (pointer.x - trail[0].x) * 0.32;
            trail[0].y += (pointer.y - trail[0].y) * 0.32;
            for (let index = 1; index < trail.length; index += 1) {
                trail[index].x += (trail[index - 1].x - trail[index].x) * (0.2 - index * 0.012);
                trail[index].y += (trail[index - 1].y - trail[index].y) * (0.2 - index * 0.012);
            }

            const centerX = width * trail[0].x;
            const centerY = height * trail[0].y;
            const cursorX = width * pointer.targetX;
            const cursorY = height * pointer.targetY;
            const glow = context.createRadialGradient(
                cursorX,
                cursorY,
                8,
                cursorX,
                cursorY,
                Math.max(width, height) * 0.38
            );
            glow.addColorStop(0, "rgba(209, 139, 213, 0.2)");
            glow.addColorStop(0.42, "rgba(194, 160, 253, 0.075)");
            glow.addColorStop(1, "rgba(9, 9, 13, 0)");
            context.fillStyle = glow;
            context.fillRect(0, 0, width, height);

            for (let line = 0; line < 17; line += 1) {
                const offset = (line - 8) * Math.max(26, width * 0.026);
                const drift = Math.sin(time * 1.8 + line * 0.52) * 21;
                const pullX = (trail[0].x - 0.5) * 115;
                const pullY = (trail[0].y - 0.5) * 90;
                const lineGradient = context.createLinearGradient(0, 0, width, height);
                lineGradient.addColorStop(0, "rgba(194, 160, 253, 0)");
                lineGradient.addColorStop(0.32, `rgba(194, 160, 253, ${0.025 + line * 0.002})`);
                lineGradient.addColorStop(0.68, "rgba(207, 73, 129, 0.15)");
                lineGradient.addColorStop(1, "rgba(207, 73, 129, 0)");
                context.beginPath();
                context.moveTo(-width * 0.05, height * 0.56 + offset * 0.28);
                context.bezierCurveTo(
                    width * 0.28 + pullX * 0.3,
                    centerY + offset + drift,
                    centerX - pullX * 0.45,
                    centerY - offset * 0.45 + pullY,
                    width * 1.05,
                    height * 0.34 + offset * 0.52
                );
                context.strokeStyle = lineGradient;
                context.lineWidth = line % 4 === 0 ? 1.35 : 0.65;
                context.stroke();
            }

            trail.slice(1).forEach((point, index) => {
                context.beginPath();
                context.arc(
                    width * point.x,
                    height * point.y,
                    8 + index * 5 + Math.sin(time * 3 + index) * 1.5,
                    0,
                    Math.PI * 2
                );
                context.strokeStyle = `rgba(201, 140, 221, ${0.14 - index * 0.016})`;
                context.lineWidth = 0.8;
                context.stroke();
            });

            context.beginPath();
            context.arc(cursorX, cursorY, 5.5, 0, Math.PI * 2);
            context.strokeStyle = "rgba(245, 241, 247, 0.5)";
            context.lineWidth = 1;
            context.stroke();

            if (interactive && !document.hidden) {
                frame = window.requestAnimationFrame(draw);
            }
        };

        const handleResize = () => {
            resize();
            if (!interactive) draw();
        };

        const handleVisibility = () => {
            if (document.hidden) {
                window.cancelAnimationFrame(frame);
                frame = 0;
            } else if (interactive && !frame) {
                frame = window.requestAnimationFrame(draw);
            }
        };

        resize();
        draw();
        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);

        if (interactive) {
            window.addEventListener("pointermove", setPointer, { passive: true });
            document.addEventListener("mouseleave", resetPointer);
        }

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
            window.removeEventListener("pointermove", setPointer);
            document.removeEventListener("mouseleave", resetPointer);
        };
    }, []);

    return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default PointerField;
