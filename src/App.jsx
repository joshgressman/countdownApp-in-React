import React, { Component} from 'react';
import './App.css';
//component is a reusable piece on the ui
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
      this.setState({deadline: this.state.newDeadline})
  }

render() {
  return (
    <div className='App'>
      <div className='App-title' >Countdown to {this.state.deadline}</div>
      <div>
        <div className="Clock-days">14 days</div>
        <div className="Clock-hours">30 hours</div>
        <div className="Clock-min">15 minutes</div>
        <div className="Clock-sec">20 seconds</div>
      </div>
      <input placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}/>
      <button onClick={() => this.changeDeadline()}>Submit</button>
    </div>
  )
  }
}

export default App;
