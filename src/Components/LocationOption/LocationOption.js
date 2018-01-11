import React, { Component } from "react";
import './LocationOption.css';

class LocationOption extends Component {
    render() {
        return (
            <div>
                <span>Lokasi : </span>
                <select className="selectLocation"  value={this.props.location} onChange={(event) => {this.props.changeLoc(event.target.value)}}>
                    <option value="auto">Auto</option>
                    <option value="jakarta" >Jakarta</option>
                    <option value="bandung" >Bandung</option>
                </select>
            </div>
        );
    }
}

export default LocationOption;
