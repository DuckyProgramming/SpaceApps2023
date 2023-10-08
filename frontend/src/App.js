import React from "react";
import "./App.css";
import "./rerouter";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Button from "./rerouter";
import DefaultDisplay from "./defaultDisplay";
import MapChart from "./MapChart";
import SideBar from "./sidebar";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {
                    <div className="App">
                        <div className="toRow">
                            <div className="stayRigid">
                                <h1 className="title">World Map</h1>
                                <MapChart />
                            </div>
                            <SideBar />
                        </div>
                    </div>
                }/>
            </Routes>
            <Routes>
                <Route path="/test" element={
                    <div>
                    <DefaultDisplay />
                    <Button></Button>
                    </div>
                } />
            </Routes>
        </Router>

    );
}

export default App;