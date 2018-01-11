import React, { Component } from "react";
import { connect } from 'react-redux';

import prayTimes from "../../PrayTime/PrayTimes";
import ShalatTable from "../../Components/ShalatTable/ShalatTable";
import LocationOption from "../../Components/LocationOption/LocationOption";

class PrayPage extends Component {
    constructor(props) {
      super(props);
      this.stateTimes = this.props.times;
    }

    componentDidMount() {
      this.onChangeLocation();
    }

    cities = {'jakarta': [-6.1751, 106.865], 'bandung': [-6.9175, 107.6191] }
    timeToDisplay = ["fajr", "dhuhr", "asr", "isha", "maghrib"];

    onChangeLocation = (event) => {
      const location = (event)? event.target.value : 'jakarta';
      prayTimes.setMethod("Egypt");
      let date = new Date();
      let times = prayTimes.getTimes(date, this.cities[location]);
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
        times : jadwal
      });
    }

    render() {
        return (
            <div>
                <h1>Jadwal Shalat Jakarta</h1>
                <LocationOption changeLoc={(event) => this.onChangeLocation(event)}/>
                <ShalatTable times={this.props.times} />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    times: state.times
  }
}

export default connect(mapStateToProps)(PrayPage);