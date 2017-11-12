import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../App.css';
import logo from './../logo.svg';

import * as actions from '../actions';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import 'react-placeholder/lib/reactPlaceholder.css';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
      return <li><a href="/auth/google">Login With Google</a></li>;
      default:
      return [
        <li><Payments /></li>,
        <li><a href="/api/logout">Logout</a></li>
      ];
    }
  }
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
    //console.log(this.props);
    return (
      <div>
      <div className="area">
        {/* <a className="left brand-logo">
          Vehicles
        </a> */}
      <ul className="right">
        {/* {this.renderContent()} */}
        {this.renderContent()}
      </ul>
      </div>
    </div>

    );
  }
}
function mapStateToProps( { auth } ) {
  return { auth };
}
export default connect(mapStateToProps)(Header);

/*  // /homeLoggedIN/loggedOut*/
