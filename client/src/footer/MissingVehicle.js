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
      <div>
      <div>Missing Vehicle</div>
      </div>
    );
  }
}

export default MissingVehicle;
