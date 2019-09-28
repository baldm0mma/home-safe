import React, { Component } from 'react';
import { Login } from '../Login/Login';

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
      <div>
        <Login></Login>
        <nav>
          <button onClick={() => this.toggleUser('homeowner')}>Homeowner</button>
          <button onClick={() => this.toggleUser('firstResponder')}>
            First Responder
          </button>
        </nav>
      </div>
    );
  };
}
