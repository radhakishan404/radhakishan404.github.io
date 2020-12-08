import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';

function App() {
    return (
        <Router>
            <Route exact={true} path="/" component={Home} />
        </Router>
    );
}

export default App;
