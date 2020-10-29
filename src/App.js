// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Loading } from './Loading';
import React, {Component} from 'react';

class App extends Component {

  state = {
     count : 0
  }

  increment = () => {
    this.setState({
    count : this.state.count + 1
  })
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
