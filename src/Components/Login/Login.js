import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <section className="login">
        <form className="login-form">
          <input className="login-input" type="text" name="username" placeholder="Enter email" />
          <input className="login-input" type="password" name="password" placeholder="Enter password" />
          <Link to="/checklist">
            <button className="login-button">Login</button>
          </Link>
        </form>
      </section>
    );
  }
}
 