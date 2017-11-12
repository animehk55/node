import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class FAQs extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
      <div className="color">
                          <div className="FAQ-F">
                    <p className="FAQ-P">
                    <div className="center">  <h4 onClick={ () => this.handleClick() }>What is the purpose of this site?</h4> </div>
                    </p>
                    <ToggleDisplay show={this.state.show}>
                    1. Missing Vehicle Section: This section is useful for the users those who lost his/her vehicle from any location. Owner of the lost of vehicle can register his/her vehicle details and personal information on this site.
                    </ToggleDisplay>

                    <ToggleDisplay if={this.state.show} tag="section">
                    2. Found Vehicle Section: This section is useful to the users those how find the lost vehicle in a specific location.
                    </ToggleDisplay>

                    <ToggleDisplay if={this.state.show} tag="section">
                    3. Insurance Company Registration Section: By using this section Insurance companies can register their organization with this website and can avail the special benefits which are only for the insurance companies.
                    </ToggleDisplay>

                    <ToggleDisplay if={this.state.show} tag="section">
                    4. Advertisement Section: Advertisement companies can place their advertisement on the site for online marketing purpose.
                    </ToggleDisplay>

                  </div>

                    <div className="FAQ-F">
                    <p className="FAQ-P">
                    <div className="center">   <h4 onClick={ () => this.handleClick() }>How can I register my lost vehicle with this site?</h4> </div>
                    </p>
                    <ToggleDisplay show={this.state.show}>
                    In the Missing Vehicle Section, there are two forms available, one is for Vehicle Information and second is for Personal Information. You can use this section to register you vehicle with us.
                    </ToggleDisplay>
                    </div>


                    <div className="FAQ-F">
                    <p className="FAQ-P">
                    <div className="center">   <h4 onClick={ () => this.handleClick() }>How do understand, whether my vehicle is register with this site or not?</h4> </div>
                    </p>
                    <ToggleDisplay show={this.state.show}>
                    Once you finished the registration process of the Missing Vehicle Section you will received the system generated email from us.
                    </ToggleDisplay>
                    </div>

                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>What is the use of the login credentials which I have received from you, after completion of the Missing Vehicle registration process?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        You can use these login credentials, to check your vehicle status online, rather than spending the time on phone calls or office visits.
                        </ToggleDisplay>
                        </div>


                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>What is the use of the login credentials which I have received from you, after completion of the Missing Vehicle registration process?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        You can use these login credentials, to check your vehicle status online, rather than spending the time on phone calls or office visits.
                        </ToggleDisplay>
                        </div>


                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>What process will happen after Missing Vehicle registration?</h4></div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        After the completion of the Missing Vehicle registration our system will check the database and your number found in our found vehicle database you will received the vehicle no matching email from us.
                        </ToggleDisplay>
                        </div>



                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>Which section should I use to register a found vehicle?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        You can use the Found Vehicle section to register the found vehicle information.
                        </ToggleDisplay>
                        </div>



                        <div className="FAQ-F">
                        <p className="FAQ-P">
                      <div className="center">     <h4 onClick={ () => this.handleClick() }>In regards to Found Vehicle, what is the meaning of rewards?</h4></div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        It indicates that we will offer you a special gift from us without any charge, to help us.
                        </ToggleDisplay>
                        </div>



                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>How much time it will take to track my vehicle?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        It totally depending on the founder, how soon they can place the entry.
                        </ToggleDisplay>
                        </div>



                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>What should I do if I received the Vehicle Matching emails from you?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        You will have to come with our office to verify your identity along with some valid documentation of you Vehicle and Personal information.
                        </ToggleDisplay>
                        </div>




                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>What will happen if I collect my vehicle from somewhere else?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        You will have to inform us, that I have collected my vehicle from somewhere else. That time we will change you vehicle status to Handover and it will never show in a missing list.
                        </ToggleDisplay>
                        </div>




                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>How can I place my company advertisement on your portal?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        You can use our contact us section. Enter your personal information => selects the query mode general to advertisement => place your query in comments box. => Click submit button. You will receive the email which contains the registration link of Advertisement.
                        </ToggleDisplay>
                        </div>




                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>What will happen, if I complete the registration process of Advertisement?</h4></div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        After completion of the Advertisement registration, we will receive the system generated email, after that our Advertisement department will get in touch with you shortly for further procedure.
                        </ToggleDisplay>
                        </div>




                        <div className="FAQ-F">
                        <p className="FAQ-P">
                        <div className="center">   <h4 onClick={ () => this.handleClick() }>How can I choose my period of Advertisement?</h4> </div>
                        </p>
                        <ToggleDisplay show={this.state.show}>
                        While filling up the form, there is period field, by using the check button you can choose you registration period, currently we have three types of period one is Quarterly, second is Half Yearly and third one is yearly.
                        </ToggleDisplay>
                        </div>

      </div>
      </div>
    );
  }
}

export default FAQs;
