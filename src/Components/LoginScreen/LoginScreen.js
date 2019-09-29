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
      <div className={`loginScreen-container ${this.state.user === "homeowner" ? "homeowner-background" : "first-responder-background"}`}>
        <Login></Login>
          <p className="login-message">Which one are you?</p>
        <nav className="nav-wrapper">
          <button className="user-button" onClick={() => this.toggleUser('homeowner')}>
            Homeowner
          </button>
          <button className="user-button" onClick={() => this.toggleUser('firstResponder')}>
            First Responder
          </button>
        </nav>
      </div>
    );
  };
}
