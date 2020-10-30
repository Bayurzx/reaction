// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Loading } from './Loading';
import React, {Component, useState} from 'react';
// Note that useState is a hook that allow you to use State without class component
const App = () => {

  const [count=2, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2> Hello Counter App</h2>
      <button onClick={increment}>I was clicked {count} times</button>
    </div>
  )

}

// class App extends Component {
//
//   state = {
//      count : 0
//   }
//
//   increment = () => {
//     this.setState({
//     count : this.state.count + 1
//   })
// }
//
//   render() {
//     return (
//       <div>
//         <h2> Hello Counter App</h2>
//         <button onClick={this.increment}>I was clicked {this.state.count} times</button>
//       </div>
//     )
//   }
// }

export default App;
