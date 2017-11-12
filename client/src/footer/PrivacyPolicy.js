import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class PrivacyPolicy extends Component {
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
      <div className="PrivacyPolicy">
        <h2>Legal Notice</h2>
        <h6> The contents of all materials available on this Internet site are copyrighted by
           SoftInd Solutions LLP Pune, unless otherwise indicated, and are subject to change at
            any time.
            All rights are reserved by SoftInd Solutions LLP, and content may not be reproduced,
             downloaded, disseminated, published, or transferred in any form or by any means, except
              with the prior written permission of SoftInd Solutions LLP, Pune.
         </h6>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default PrivacyPolicy;
