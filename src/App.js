// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import { Loading } from './Loading';

class App extends Component {
  constructor(props) {
    super (props);
    //state
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers(){
      this.setState({
        loading: true
      })

    axios('https://api.randomuser.me/?nat=US&results=3')
      .then(
        response => this.setState({
          users : response.data.results,
          loading: false
        })
      );

  }

  handleSubmit(event){
    event.preventDefault();
    this.getUsers();
    console.log("do something");
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        {!this.state.loading ?
          this.state.users.map(user  =>
          <div>
            <strong><p> {user.name.first} {user.name.last}</p></strong>
            <div>{user.cell} </div>

            <div>{user.dob.age} </div>
            <div>{user.email} </div>
            <div>{user.location.city} </div>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value='Load' />
            </form>
            <hr/>
          </div>

        ) : (
           <Loading message = "Please wait..." />
         )}
       </div>
    )
  }
}

export default App;
