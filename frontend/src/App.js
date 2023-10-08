import React, { useState, useContext, useCallback} from "react";
import "./App.css";
import "./rerouter";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Button from "./rerouter";
import DefaultDisplay from "./defaultDisplay";
import MapChart from "./MapChart";
import SideBar from "./sidebar";
import DataContext from "./dataContext";

function App(){
    const [sideBarNumber, setSideBarNumber] = useState(0);
    const updateSideBar = useCallback(() => {
        setSideBarNumber(sideBarNumber + 1);
    }, [sideBarNumber]);
    const selectedCountry = useContext(DataContext)

    return (
        <Router>
            <Routes>
                <Route path="/" element = {
                    <div className="App">
                        <div className="toRow">
                            <div className="stayRigid">
                            <DataContext.Provider value={selectedCountry}>
                                <MapChart updateSideBar={updateSideBar}/>
                            </DataContext.Provider>
                            </div>
                                <SideBar sideBarNumber={sideBarNumber}/>
                            </div>
                    </div>
                }/>
            </Routes>
            <Routes>
                <Route path="/test" element={
                    <div>
                    <DefaultDisplay />
                    <Button />
                    </div>
                } />
            </Routes>
        </Router>

    );
}

export default App;