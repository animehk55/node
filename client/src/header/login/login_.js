import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../../actions';
import { Link } from 'react-router-dom';
//import Payments from './Payments';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Do you want to reset: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <nav>
              <div className="nav-wrapper">
                <a className="left brand-logo">SOF</a>
                <ul className="right">
                  <li>
                    <a>Login with Google</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
