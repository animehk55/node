import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class MissingVehicle extends Component {
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
      <div className="MissingVehicleTAB">
        <h3>Privacy Policy</h3>
      <div className="MissingVehicle">Clients and associates of SoftInd Solutions LLP may download pages or other content for their own use, consistent with the mission and purpose of SoftInd Solutions LLP, on a single computer. However, no part of such content may be otherwise or subsequently reproduced, downloaded, disseminated, published, or transferred, in any form or by any means, except with the prior written permission of, and with express attribution to SoftInd Solutions LLP. </div>
      </div>
    );
  }
}

export default MissingVehicle;
