import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/*by default Navbar will not have routing infos only Route that have them, we add routing infos by HigherOrderComponents*/}
                <Navbar />
                {/*if we leave like this it will show Home & About components because React think "/" is a subset of the url*/}
                {/*<Route path="/" component={Home}/>*/}

                {/*with EXACT the route will behave only if there is / on the URL*/}
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
