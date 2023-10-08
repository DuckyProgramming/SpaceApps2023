import React, { useState, useEffect } from "react";
import "./App.css";

function DefaultDisplay() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        current_transactions: 0,
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/check-uses").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    current_transactions: data.current_transactions,
                });
            })
        );
    }, []);

    return (
        <div className="App">
            <header className="App-header">
            <h1>React and flask</h1>
                <p>Current Transactions Used: {data.current_transactions}</p>
            </header>
        </div>

    );
}

export default DefaultDisplay;
