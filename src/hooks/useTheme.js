import { useEffect, useState } from "react";

const storageKey = "rk-theme";

function getInitialTheme() {
    if (typeof window === "undefined") {
        return "dark";
    }

    const storedTheme = window.localStorage.getItem(storageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        document.body.dataset.theme = theme;
        window.localStorage.setItem(storageKey, theme);

        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) {
            themeMeta.setAttribute("content", theme === "dark" ? "#050505" : "#ffffff");
        }
    }, [theme]);

    return {
        theme,
        toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark"))
    };
}

export default useTheme;
