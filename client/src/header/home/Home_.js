import React, { Component } from 'react';
//import Vehicle from './800VehicleNMPLSHomicide-TylerBerg.jpg';
//import British from './British-police-find-car-lost.jpg';
//import Burned from './burned-car-in-ensley.jpg';
import SlideShow from 'react-image-slideshow';
import {ApSlideshow, ApSlideshowStyle} from 'apeman-react-slideshow'
import {ApImageStyle} from 'apeman-react-image'
import {ApSpinnerStyle} from 'apeman-react-spinner'

import '../../App.css';

class Home extends Component {
  render() {
    return (

<div className="side">

<div className='slidermargin'>
<ApImageStyle />
<ApSpinnerStyle />
       <ApSlideshowStyle />
       <ApSlideshow images={[
                    './800VehicleNMPLSHomicide-TylerBerg.jpg',
                    './British-police-find-car-lost.jpg',
                    './burned-car-in-ensley.jpg',
                    './forgot-where-you-parked.jpg'
               ]}
                    repeat={ true }
                    width={ 1200 }
                    height={ 370 }

       />
     </div>
     </div>


    );
  }
}

export default Home;
