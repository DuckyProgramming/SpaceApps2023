import React from "react";
import "./sidebar.css"
import DataContext from "./dataContext";

class SideBar extends React.Component {

    static contextType = DataContext;

    prevContext = null;

    render() {
        if (this.context !== this.prevContext) {
            alert("Changed!")
            this.prevContext = this.context;
        }
        console.log(this.context)
        return (
            <div className="sidebar">
                <h1>Fire Data</h1>
            </div>
        );
    }
}

export default SideBar