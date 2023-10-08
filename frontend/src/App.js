import React, { useState, useContext, useCallback} from "react";
import "./App.css";
import "./rerouter";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Button from "./rerouter";
import DefaultDisplay from "./defaultDisplay";
import MapChart from "./MapChart";
import SideBar from "./sidebar";
import DataContext from "./dataContext";
import FireInfo from "./fireInfo";
import FireInfo2 from "./fireInfo2";

function App(){
    const [sideBarNumber, setSideBarNumber] = useState(0);
    const updateSideBar = useCallback(() => {
        setSideBarNumber(sideBarNumber + 1);
    }, [sideBarNumber]);
    const [selectedCountry, setSelectedCountry] = useState(0);
    const updateSelectedCountry = useCallback((country) => {
        setSelectedCountry(country);
    }, [selectedCountry]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div>
                    <FireInfo />
                    </div>
                } />
                <Route path="/map" element = {
                    <div className="App">
                        <div className="toRow">
                            <div className="stayRigid">
                            <DataContext.Provider value={selectedCountry}>
                                <MapChart updateSideBar={updateSideBar} updateSelectedCountry={updateSelectedCountry}/>
                            </DataContext.Provider>
                            </div>
                                <SideBar sideBarNumber={sideBarNumber} selectedCountry={selectedCountry}/>
                            </div>
                    </div>
                }/>
                <Route path="/test" element={
                    <div>
                    <DefaultDisplay />
                    <Button />
                    </div>
                } />
                <Route path="/info" element={
                    <div>
                    <FireInfo2 />
                    </div>
                } />
            </Routes>
        </Router>

    );
}

export default App;