import React from "react";
import "./sidebar.css"
import DataContext from "./dataContext";

class SideBar extends React.Component {
    constructor(props){
        super()
        this.props=props
        this.prevContext=0;
    }

    static contextType = DataContext;

    render() {
        if (this.props.sideBarNumber !== this.prevContext) {
            this.prevContext = this.props.sideBarNumber;
            alert('Changed!')
        }
        return (
            <div className="sidebar">
                <h1>Fire Data</h1>
            </div>
        );
    }
}

export default SideBar