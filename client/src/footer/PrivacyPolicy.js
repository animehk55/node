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
      <div>Privacy Policy</div>
      </div>
    );
  }
}

export default PrivacyPolicy;
