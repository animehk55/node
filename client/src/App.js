import React, { Component } from 'react';
import{
 BrowserRouter as Router,
 Route,
 Link
}from 'react-router-dom';


import { connect } from 'react-redux';
import * as actions from './actions';


import HeaderInfo from './header/header_info';
import Home from './header/home/Home_';
import AboutUs from './header/about_us/AboutUs';
import Footer from './footer/footer';
import Login from './header/login/login_';
import FoundVehicle from './header/foundVehicle/found_Vehicle';
import LostVehicle from './header/lostVehicle/lost_Vehicle';
import Information from './header/information/information_';
import ContactUs from './header/contact_us/contactUs';
import FAQs from './footer/FAQ';
import MissingVehicle from './footer/legalNotice';
import PrivacyPolicy from './footer/MissingVehicle';
import LegalNotice from './footer/PrivacyPolicy';

import './App.css';


class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <div>
    <div>
      <HeaderInfo />
    </div>
<Router>
<div>
<Route exact path="/HOME_" component={ Home }/>
<Route exact path="/ABOUT US_" component={ AboutUs }/>
{/*<Route exact path="/LOGIN_" component={ Login }/>*/}
<Route exact path="/FOUND VEHICLE_" component={ FoundVehicle }/>
<Route exact path="/LOSTVEHICLE_" component={ LostVehicle }/>
<Route exact path="/INFORMATION_" component={ Information }/>
<Route exact path="/CONTACT US_" component={ ContactUs }/>
<Route exact path="/FAQ_" component={ FAQs }/>
<Route exact path="/LEGAL_NOTICE_" component={ LegalNotice }/>
<Route exact path="/PRIVACY_POLICY_" component={ PrivacyPolicy }/>
<Route exact path="/MISSING_VEHICLE_" component={ MissingVehicle }/>
<Route exact path="/FOUND_VEHICLE_" component={ FoundVehicle }/>

</div>
</Router>
      <div>
      <Footer />
      </div>

      </div>
    );
  }
}

export default connect(null, actions)(App);
