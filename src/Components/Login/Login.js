import React from "react";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <section>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <Link to="/checklist">
            <button>
              Login
            </button>
          </Link>
        </form>
      </section>
    );
  }
}
