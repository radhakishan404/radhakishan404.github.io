import { useEffect } from "react";

function useScrollReveal(deps = []) {
    useEffect(() => {
        if (typeof window === "undefined" || typeof document === "undefined") {
            return undefined;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const observed = new WeakSet();

        const observer =
            !prefersReducedMotion && "IntersectionObserver" in window
                ? new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (!entry.isIntersecting) {
                                return;
                            }

                            entry.target.classList.add("is-revealed");
                            observer.unobserve(entry.target);
                        });
                    },
                    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
                )
                : null;

        const registerNode = (node) => {
            if (!(node instanceof HTMLElement) || observed.has(node)) {
                return;
            }

            observed.add(node);

            if (prefersReducedMotion || !observer) {
                node.classList.add("is-revealed");
                return;
            }

            observer.observe(node);
        };

        const scan = () => {
            document.querySelectorAll("[data-reveal], [data-reveal-3d], .clip-reveal:not(.is-revealed)").forEach(registerNode);
        };

        scan();

        const mutationObserver = new MutationObserver(scan);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            mutationObserver.disconnect();
            if (observer) {
                observer.disconnect();
            }
        };
    }, deps);
}

export default useScrollReveal;
