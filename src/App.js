import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Seo from "./components/common/Seo";
import NotFound from "./components/pages/NotFound";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import PortfolioDetail from './components/pages/PortfolioDetail';
import Articles from './components/pages/Articles';
import ScrollToTop from './components/common/ScrollToTop';

const routePaths = (path) => (path === "/" ? ["/"] : [path, `${path}/`]);

function App({ Router = BrowserRouter, routerProps = {} }) {
    return (
        <Router {...routerProps}>
            <Seo />
            <ScrollToTop />
            <Switch>
            <Route exact={true} path={routePaths("/")} component={Home} />
            <Route exact={true} path={routePaths("/about")} component={About} />
            <Route exact={true} path={routePaths("/contact")} component={Contact} />
            <Route exact={true} path={routePaths("/articles")} component={Articles} />
            <Route exact={true} path={routePaths("/portfolio")} component={Portfolio} />
            <Route exact={true} path={routePaths("/portfolio/:topic")} component={PortfolioDetail} />
            <Route exact={true} path={routePaths("/projects")} component={Portfolio} />
            <Route exact={true} path={routePaths("/projects/:topic")} component={PortfolioDetail} />
            <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
