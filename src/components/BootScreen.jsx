import React, { useEffect, useMemo, useState } from "react";

const sequenceLines = [
    "> Loading core modules.............. OK",
    "> React 18 ......................... LOADED",
    "> Node.js environment .............. ACTIVE",
    "> 7+ years experience .............. VERIFIED",
    "> Mumbai, India .................... LOCATED",
    "> Building in public ............... ENABLED",
    "All systems operational.",
    "> Launching portfolio..."
];

const CHAR_DELAY = 60;

function renderProgressBar(progress) {
    const blocks = 20;
    const filledBlocks = Math.round((progress / 100) * blocks);
    return `[${"#".repeat(filledBlocks)}${".".repeat(blocks - filledBlocks)}]`;
}

function BootScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [visibleLines, setVisibleLines] = useState(() => sequenceLines.map(() => ""));
    const [phase, setPhase] = useState("booting");

    useEffect(() => {
        const startTime = performance.now();
        let rafId;

        const update = (now) => {
            const elapsed = now - startTime;
            const percent = Math.min(100, Math.round((elapsed / 3000) * 100));
            setProgress(percent);

            if (percent < 100) {
                rafId = window.requestAnimationFrame(update);
                return;
            }

            setPhase("typing");
        };

        rafId = window.requestAnimationFrame(update);

        return () => {
            window.cancelAnimationFrame(rafId);
        };
    }, []);

    useEffect(() => {
        if (phase !== "typing") {
            return undefined;
        }

        let timeoutId;
        let lineIndex = 0;
        let charIndex = 0;

        const typeNext = () => {
            const currentLine = sequenceLines[lineIndex];

            if (charIndex <= currentLine.length) {
                setVisibleLines((current) => {
                    const next = [...current];
                    next[lineIndex] = currentLine.slice(0, charIndex);
                    return next;
                });
                charIndex += 1;
                timeoutId = window.setTimeout(typeNext, CHAR_DELAY);
                return;
            }

            lineIndex += 1;
            charIndex = 0;

            if (lineIndex < sequenceLines.length) {
                timeoutId = window.setTimeout(typeNext, 120);
                return;
            }

            setPhase("flicker");
        };

        typeNext();

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [phase]);

    useEffect(() => {
        if (phase !== "flicker") {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            onComplete();
        }, 620);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [onComplete, phase]);

    const wrapperClassName = useMemo(() => {
        if (phase === "flicker") {
            return "boot-screen is-flicker";
        }
        return "boot-screen";
    }, [phase]);

    return (
        <div className={wrapperClassName} aria-live="polite" aria-label="Boot sequence">
            <div className="boot-screen-inner">
                <p className="boot-brand">RADHAKISHAN JANGID - PORTFOLIO v2.0</p>
                <p className="boot-divider">==================================</p>

                <p className="boot-progress-line">
                    <span>{renderProgressBar(progress)}</span>
                    <span>Booting system...</span>
                </p>

                <div className="boot-sequence-lines">
                    {visibleLines.map((line, index) => (
                        <p key={sequenceLines[index]} className="boot-line">{line}</p>
                    ))}
                </div>

                <p className="boot-divider">==================================</p>
            </div>
        </div>
    );
}

export default BootScreen;
