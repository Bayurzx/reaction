// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Loading } from './Loading';
import React, {Component} from 'react';


// I am createing two Lifecycle method ComponentDidMount and ComponentDidUpdate
// We will rewrite using Hook so checkout the Hook branch
class App extends Component {

  state = {
     count : 0
  }

  increment = () => {
    this.setState({
    count : this.state.count + 1
  })
}

  componentDidMount = () => {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate = () => {
    document.title = `Clicked ${this.state.count} times`
  }

  render() {
    return (
      <div>
        <h2> Hello Counter App</h2>
        <button onClick={this.increment}>I was clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default App;
