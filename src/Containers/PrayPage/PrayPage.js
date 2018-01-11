import React, { Component } from "react";
import { connect } from 'react-redux';

import prayTimes from "../../PrayTime/PrayTimes";
import ShalatTable from "../../Components/ShalatTable/ShalatTable";
import LocationOption from "../../Components/LocationOption/LocationOption";

class PrayPage extends Component {
    constructor(props) {
      super(props);
      this.stateTimes = this.props.times;
      this.geoPosition = this.props.geo;
      this.cities = {'jakarta': [-6.1751, 106.865], 'bandung': [-6.9175, 107.6191] }
      this.timeToDisplay = ["fajr", "dhuhr", "asr", "isha", "maghrib"];
    }

    componentDidMount() {
      this.browserLocationHandler();
    }

    onChangeLocation = (loc) => {
      if (loc == 'auto') {
        this.props.dispatch({type:'HIDETABLE'});
        this.browserLocationHandler();
        return false;
      }
      const location = (loc)? loc : 'jakarta';
      this.getPrayTimes(this.cities[location],location);
    }

    getPrayTimes = (geoPos, location) => {
      let date = new Date();
      prayTimes.setMethod("Egypt");
      let times = prayTimes.getTimes(date, geoPos);
      let jadwal = this.stateTimes.map(time => {
        return {
          id: time.id,
          name: time.name,
          time: times[time.id]
        };
      });
      this.props.dispatch({
        type:'CHANGELOC',
        location: location,
        times : jadwal,
      });
    }

    browserLocationHandler = () => {
      let geoPosition = [];
      const success = (pos) => {
        var crd = pos.coords;
        geoPosition = [crd.latitude, crd.longitude];
        this.getPrayTimes(geoPosition);
        this.props.dispatch({type:'DISPLAYTABLE'});
      }
      const error = (err) => {
        if (err.code == 1) {
          alert("Gagal mendapatkan lokasi. ["+err.message+"]");
        } else {
          alert(err.message);
        }
        this.props.dispatch({type:'DISPLAYTABLE'});
        this.onChangeLocation('jakarta');
      };
      navigator.geolocation.getCurrentPosition(success, error);
    }

    render() {
      let displayTable = null;
      if (this.props.displayTab) {
        displayTable = <ShalatTable times={this.props.times} />
      } else {
        displayTable = <div>Sedang mengambil data lokasi...</div>
      }
      return (
          <div>
              <h1>Jadwal Shalat Jakarta</h1>
              <LocationOption location={this.props.location} changeLoc={(event) => this.onChangeLocation(event)}/>
              {displayTable}
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    times: state.times,
    displayTab : state.displayTablePray
  }
}

export default connect(mapStateToProps)(PrayPage);