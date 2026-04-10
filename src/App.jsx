import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from "react-router-dom";
import BootScreen from "./components/BootScreen";
import SiteShell from "./components/SiteShell";
import AboutPage from "./pages/AboutPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ArticlesPage from "./pages/ArticlesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const bootStorageKey = "rk-boot-screen-complete";

function loadAnalytics() {
    if (!gaMeasurementId || typeof window === "undefined" || window.gtag) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", gaMeasurementId, { send_page_view: false });
}

function trackPageView(location) {
    if (!gaMeasurementId || typeof window === "undefined" || !window.gtag) {
        return;
    }

    window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: location.pathname + location.search,
        page_title: document.title
    });
}

function AnalyticsTracker() {
    const history = useHistory();

    useEffect(() => {
        loadAnalytics();
        trackPageView(history.location);

        const unlisten = history.listen((location) => {
            trackPageView(location);
        });

        return unlisten;
    }, [history]);

    return null;
}

function AppRoutes() {
    return (
        <SiteShell>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/projects/:topic" component={ProjectDetailPage} />
                <Route exact path="/portfolio" render={() => <Redirect to="/projects" />} />
                <Route exact path="/portfolio/:topic" render={({ match }) => <Redirect to={`/projects/${match.params.topic}`} />} />
                <Route exact path="/articles" component={ArticlesPage} />
                <Route exact path="/articles/:slug" component={ArticleDetailPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </SiteShell>
    );
}

function App() {
    const [bootComplete, setBootComplete] = useState(() => {
        if (typeof window === "undefined") {
            return true;
        }

        const hasSeenBoot = window.sessionStorage.getItem(bootStorageKey) === "true";
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        return hasSeenBoot || prefersReducedMotion;
    });

    const handleBootComplete = () => {
        if (typeof window !== "undefined") {
            window.sessionStorage.setItem(bootStorageKey, "true");
        }
        setBootComplete(true);
    };

    return (
        <Router>
            {!bootComplete ? <BootScreen onComplete={handleBootComplete} /> : null}
            <div className={`app-frame${bootComplete ? " is-ready" : ""}`}>
                <AnalyticsTracker />
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
