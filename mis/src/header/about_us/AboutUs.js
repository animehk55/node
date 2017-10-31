import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Aboutus extends Component {
  render() {
    return (
<div className="AboutMargin">

      <div className="AboutMargin-c"><h2>About us:</h2></div>
      This portal of police department provides services to the citizens to find the missing and stolen vehicles. The site will gather information of found vehicles, so that the vehicle owners, second-hand vehicle buyer and the insurance companies settling the claims of missing vehicles can browse the information and the vehicles can be returned to their owners.

      <div className="AboutMargin-c"><h2>Missing Vehicle</h2></div>
      The data of a missing vehicle can be entered in the system by any person. He/She needs to mention the same while entering the data. The mandatory information would be the name of the owner, vehicle registration number, chassis number, vehicle make and model, date of purchase, insurance policy number and its provider, location from where the vehicle was lost, date and time of missing, his/her contact details like address, phone number, email and the FIR number etc. After filling up all necessary information, the person will get confirming the receipt of information and he/she can then go and search the found vehicles database for his/her vehicle. If the vehicle data exists in the found database, the person will receive a call from us informing him/her to contact the administration department in the company’s registered office to collect the further details regarding his/her vehicle. The person needs to provide original papers of the vehicle, his/her photo identity proof  The vehicle details will be given only on producing these documents and after matching the information.

      <div className="AboutMargin-c"><h2>Found Vehicle</h2></div>
      A person locates a vehicle lying idle in front of the office or a residence or a parking lot and wishes to report its details to the owner of the vehicle. He can do so through our portal. In this case, he/she need not provide his/her personal details, however, he/she needs to enter the details of the found vehicle such as the registration number, vehicle company and model and location where it was found. Although the personal information is not mandatory, it can be filled in if the user wants to check the progress of the search of that vehicle owner. If he/she has entered his/her email address, he/she will receive a call from the police department after filling up the information. He / She will get a call for updating him/her about the progress of the search of the vehicle owner. He / She needs to provide his/her photo id proof for the same.

      </div>



    );
  }
}

export default Aboutus;
