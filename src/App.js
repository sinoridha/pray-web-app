import React, { Component } from "react";
import "./App.css";
import PrayPage from './Containers/PrayPage/PrayPage';

// console.log(prayTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrayPage/>
      </div>
    );
  }
}

export default App;
