import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
    return (
        <HashRouter>
            <div style={{ fontSize: "36px", textAlign: "center" }}>
                Movie App
            </div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/movie/:id" component={Detail} />
        </HashRouter>
    );
}

export default App;
