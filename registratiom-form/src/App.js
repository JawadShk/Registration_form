import React, { Component } from 'react';
import './App.css';
import Register from './components/Register';
import Greet from './components/Greet';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegistered: false,
       name: null,
       email: null,
       password: null,
       showPass: false
    }
  }

  registrationHandler = (e) =>{
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    this.setState({name, email, password , isRegistered: true});
    e.preventDefault();
  } ;

  showPasswordHandler = () =>{
    this.setState({showPass: !this.state.showPass});
  }
  
  render() {
    return (
      <div>
        {
          this.state.isRegistered ? <Greet name={this.state.name} email={this.state.email}></Greet> : <Register submit={this.registrationHandler} showPass={this.state.showPass} click={this.showPasswordHandler}></Register>
        }
      </div>
    )
  }
}

export default App