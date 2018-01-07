import React, { Component } from "react";
import "./App.css";
import prayTimes from "./PrayTime/PrayTimes";
import ShalatTable from "./Components/ShalatTable";
// console.log(prayTimes);

class App extends Component {
  state = {
    location: null,
    times: [
      { id: "fajr", name: "Subuh", time: null },
      { id: "dhuhr", name: "Dhuhr", time: null },
      { id: "asr", name: "Ashr", time: null },
      { id: "isha", name: "Magrib", time: null },
      { id: "maghrib", name: "Isya", time: null }
    ]
  };

  componentDidMount() {
    this.getDayPrayTimesHandler();
  }

  getDayPrayTimesHandler = () => {
    const willDisplay = ["fajr", "dhuhr", "asr", "isha", "maghrib"];

    prayTimes.setMethod("Egypt");
    let date = new Date(); // today

    let times = prayTimes.getTimes(date, [-6.1751, 106.865]);
    let jadwal = this.state.times.map(time => {
      return {
        id: time.id,
        name: time.name,
        time: times[time.id]
      };
    });
    this.setState({ times: jadwal });
  };


  render() {
    return (
      <div className="App">
        <h1>Jadwal Shalat Jakarta</h1>
        <ShalatTable times={this.state.times} />
      </div>
    );
  }
}

export default App;
