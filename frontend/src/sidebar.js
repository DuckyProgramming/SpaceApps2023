import React from "react";
import "./sidebar.css"
import DataContext from "./dataContext";

class SideBar extends React.Component {
    constructor(props){
        super()
        this.props=props
        this.prevContext=0;
        this.countryName = "-";
    }

    static contextType = DataContext;

    render() {
        if (this.props.sideBarNumber !== this.prevContext) {
            this.prevContext = this.props.sideBarNumber;
            this.countryName = this.props.selectedCountry
            fetch("http://127.0.0.1:5000/current-selected",{credentials: "omit"}).then(
                (res) => res.json().then((data) => {
                    this.countryName = data.country_id[0];
                }
            ));
        }
        return (
            <div className="sidebar">
                <h1>Fire Data</h1>
                <p>{this.countryName}</p>
            </div>
        );
    }
}

export default SideBar