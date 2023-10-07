import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        transaction_limit: 0,
        current_transactions: 0,
        transaction_interval: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    transaction_limit: data.transaction_limit,
                    current_transactions: data.current_transactions,
                    transaction_interval: data.transaction_interval,
                });
            })
        );
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.transaction_limit}</p>
                <p>{data.current_transactions}</p>
                <p>{data.transaction_interval}</p>

            </header>
        </div>
    );
}

export default App;