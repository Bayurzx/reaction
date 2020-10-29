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
    //bind this **Note that this line was not necessary as the arrow function takes care of it**
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  getUsers(){
      this.setState({
        loading: true
      })

    axios('https://api.randomuser.me/?nat=US&results=3')
      .then(
        response => this.setState({
          users : [...this.state.users, ...response.data.results],
          loading: false
        })
      );

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getUsers();
    console.log("do something");
  }

  componentDidMount = () => {
    this.getUsers();
  }

  render() {
    // Destructuring elements from this.state
    const {loading, users} = this.state

    return (
      <div className="App">
        {!loading ? (
          users.map(user  => (
          // It seems the key property is unique and can be represented by a unique value from the data collected
          // The key is inserted in the main div note that the main div is rewuired ti house other elements rendered
          <div key={user.id.value}>
            <strong><p style={{color:"#1e1e1e"}} > {user.name.first} {user.name.last}</p></strong>
            <div>{user.cell} </div>

            <div>{user.dob.age} </div>
            <div>{user.email} </div>
            <div>{user.location.city} </div>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Load" />
            </form>
            <hr/>
          </div>))

        ) : (
           <Loading message = "Please wait..." />
         )}
       </div>
    )
  }
}

export default App;
