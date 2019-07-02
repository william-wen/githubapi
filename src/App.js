import React, {Component} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      userData: {},
    }
  }

  onChange = e => {
    this.setState({
      userName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { userName } = this.state;
    axios.get(`https://api.github.com/users/${userName}`)
    .then(anyName => {
      this.setState({
        userData: anyName,
      })
    })
    .catch(anyErrorName => {
      console.log("There was an error lol sux");
    })
  }

  render () {
    const { userData } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.userName}/>
          <button type='submit'> Search </button>
        </form>
        <UserDisplay userData={userData}/>
      </div>
    );
  }
}

export default App;
