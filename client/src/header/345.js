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

class header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
      return 'still deciding';
      case false:
      return 'im loggedout';
      default:
      return 'im logged in';
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
      <ul className="right">
        {/* {this.renderContent()} */}
      <li><a href="LOGIN_">SIGN-IN with Goooooooogle</a></li>
      </ul>
      </div>
    </div>

    );
  }
}
function mapStateToProps( { auth } ) {
  return { auth };
}

export default connect(mapStateToProps) (header);

/*  // /homeLoggedIN/loggedOut*/
