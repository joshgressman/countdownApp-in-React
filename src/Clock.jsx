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

  componentWillMount(){
      this.getTimeUntil(this.props.deadline);

  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000); //counts time
  }

  getTimeUntil(deadline){
     const time = Date.parse(deadline) - Date.parse(new Date());
     const seconds = Math.floor((time/1000) % 60); //seconds
     const minutes = Math.floor((time/1000/60) % 60); //minutes
     const hours = Math.floor(time/(1000 * 60 * 60) % 24); //min
     const days = Math.floor(time/(1000 * 60 * 60 * 24)); //days

     this.setState({days: days, hours: hours, min: minutes, sec: seconds});
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
