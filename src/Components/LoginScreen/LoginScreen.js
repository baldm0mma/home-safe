import React, { Component } from 'react';
import { Login } from '../Login/Login';
import './LoginScreen.scss';

export class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: 'homeowner'
    };
  }
  toggleUser = user => {
    this.setState({ user });
  };
  render = () => {
    return (
      <div className='loginScreen-container'>
        <Login></Login>
        <nav className="nav-wrapper">
          <button className="login-button" onClick={() => this.toggleUser('homeowner')}>
            Homeowner
          </button>
          <button className="login-button" onClick={() => this.toggleUser('firstResponder')}>
            First Responder
          </button>
        </nav>
      </div>
    );
  };
}
