import React, { Component } from 'react';
import Marquee from 'marquee-react-dwyer';
//import logo from './logo.svg';
import '../../App.css';

class Information extends Component {
  render() {
    console.log(Marquee);
    return (
      <div className="center">
        <h1>Vehicle Details</h1>
      <div className="InfoSlider">
 <marquee direction = "up">
   <div className="center">
   JH-O1-5435 <br />
   JH-02-6589 <br />
   JH-32-7896 <br />
   JH-89-9856 <br />
   JH-O1-5435 <br />
   JH-02-6589 <br />
   JH-32-7896 <br />
   JH-89-9845 <br />
   JH-O1-5412 <br />
   JH-02-6596 <br />
   JH-32-7887 <br />
   JH-89-9852 <br />
 </div>
 </marquee>
</div>
</div>

    );
  }
}

export default Information;
