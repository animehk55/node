import React, { Component } from 'react';
import '../App.css';
import logo from './../logo.svg';
import 'react-placeholder/lib/reactPlaceholder.css';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import{
 BrowserRouter as Router,
 Route,
 Link
}from 'react-router-dom';

class HeaderInfo extends Component {
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
      <ul>
      <li><a href="HOME_">Home</a></li>
      <li><a href="ABOUT US_">ABOUT US</a></li>
      <li><a href="LOSTVEHICLE_">LOST VEHICLE</a></li>
      <li><a href="FOUND VEHICLE_">FOUND VEHICLE</a></li>
      <li><a href="INFORMATION_">INFORMATION</a></li>
      <li><a href="CONTACT US_">CONTACT US</a></li>
      <li className="searchbar_">      <tr><td><input type="text" placeholder="Search by Vehcle Number"/></td> </tr>       </li>
      <li><a href="LOGIN_">SIGN IN</a></li>
      </ul>
      <div>


      </div>
      </div>
    </div>

    );
  }
}

export default HeaderInfo;
