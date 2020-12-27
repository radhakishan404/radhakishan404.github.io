import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
    return (
        <Router>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
        </Router>
    );
}

export default App;
