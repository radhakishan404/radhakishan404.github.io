import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import PortfolioDetail from './components/pages/PortfolioDetail';

function App() {
    return (
        <Router>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/contact" component={Contact} />
            <Route exact={true} path="/portfolio" component={Portfolio} />
            <Route exact={true} path="/portfolio/:topic" component={PortfolioDetail} />
        </Router>
    );
}

export default App;
