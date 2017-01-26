import React, { Component} from 'react';
import './App.css';
//component is a reusable piece on the ui
class App extends Component {
render() {
  return (
    <div className = 'App'>
      <div className = 'App-title' >Countdown to December 25th, 2017 </div>
      <div>
        <div className ="Clock-days">14 days</div>
        <div className ="Clock-hours">30 hours</div>
        <div className ="Clock-min">15 minutes</div>
        <div className ="Clock-sec">20 seconds</div>
      </div>
      <input placeholder ='new date' />
      <button>Submit</button>
    </div>
  )
  }
}

export default App;
