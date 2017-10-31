import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class FoundVehicle extends Component {
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
        <div>Found Vehicle</div>
        </div>
    );
  }
}

export default FoundVehicle;
