import React from "react";
import "./App.css";
import "./rerouter";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Button from "./rerouter";
import DefaultDisplay from "./defaultDisplay";
import MapChart from "./MapChart";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {
                    <div className="App">
                        <header className="App-header">
                            <h1>placeholder</h1>
                            {/* Calling a data from setdata for showing */}
                            <Button />           
                            <MapChart />
                        </header>
                    </div>
                }/>
            </Routes>
            <Routes>
                <Route path="/test" element={
                    <DefaultDisplay />
                } />
            </Routes>
        </Router>

    );
}

export default App;