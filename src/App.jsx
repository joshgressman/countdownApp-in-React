import React, { Component} from 'react';
import Clock from './Clock';
import './App.css';
//component is a reusable piece on the ui
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'October 17, 2017',
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
        <Clock
            deadline={this.state.deadline}
          />
      </div>
      <input placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}/>
      <button onClick={() => this.changeDeadline()}>Submit</button>
    </div>
  )
  }
}

export default App;
