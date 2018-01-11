import React, { Component } from "react";
import './LocationOption.css';

class LocationOption extends Component {
    render() {
        return (
            <select className="selectLocation" onChange={(event) => {this.props.changeLoc(event)}}>
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
            </select>
        );
    }
}

export default LocationOption;
