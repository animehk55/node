import React, { Component } from 'react';
import '../App.css';
import logo from './../logo.svg';

import * as actions from '../actions';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import 'react-placeholder/lib/reactPlaceholder.css';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

// import{
//  BrowserRouter as Router,
//  Route,
//  Link
// }from 'react-router-dom';

import header from './header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;


class HeaderInfo extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Missing Vehicle</h2>
        </div>
        </div>
      <div className="area">
      {/* <ul>
      <li><a href="/auth/google">SIGN-IN with Goooooooogle</a></li>
      </ul> */}
      <div>
        <BrowserRouter>
          <div>
            <header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/homeLoggedIN" component={Dashboard} />
            <Route path="/LoggedOut" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
      </div>
    </div>

    );
  }
}

export default connect(null, actions)(HeaderInfo);


/*  // /homeLoggedIN/loggedOut*/
