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

import Header from './Header';
import HeaderHome from './header_Home';
import Landing from './Landing';
import LoggedOT from './LoggOutPage';

//
// const LoggggggIN = () => <h2>Not logged in now, Please login</h2>;
// const HomeHome = () => <h2>U are in home page</h2>;
// const LogggggedOUT = () => <h2>U are logged out now</h2>;
//

class HeaderInfo extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
      {/* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Missing Vehicle</h2>
        </div>
        </div> */}
      <div className="area">
      {/* <ul>
      <li><a href="/auth/google">SIGN-IN with Goooooooogle</a></li>
      </ul> */}
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/mainPAge" component={HeaderHome} />
            <Route path="/LoggedOut" component={LoggedOT} />
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
