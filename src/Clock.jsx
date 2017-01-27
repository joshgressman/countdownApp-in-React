import React, { Component} from 'react';
import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.state.days} days</div>
        <div className="Clock-hours">{this.state.hours} hours</div>
        <div className="Clock-min">{this.state.min} minutes</div>
        <div className="Clock-sec">{this.state.sec} seconds</div>
      </div>
    )
  }
}

export default Clock;
