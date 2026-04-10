import { useEffect, useState } from "react";

function useTypewriter({
    phrases = [],
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 1800
} = {}) {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!phrases.length) {
            return undefined;
        }

        const prefersReducedMotion =
            typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            setText(phrases[0]);
            return undefined;
        }

        const currentPhrase = phrases[phraseIndex] || "";
        let timeoutId;

        if (!isDeleting && text === currentPhrase) {
            timeoutId = window.setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);
        } else if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
            const nextLength = text.length + (isDeleting ? -1 : 1);
            const nextText = currentPhrase.slice(0, Math.max(0, nextLength));
            timeoutId = window.setTimeout(() => {
                setText(nextText);
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [deletingSpeed, isDeleting, pauseDuration, phraseIndex, phrases, text, typingSpeed]);

    return text;
}

export default useTypewriter;
