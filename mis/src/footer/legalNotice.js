import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class LegalNotice extends Component {
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
      <div>Legal Notice</div>
      </div>
    );
  }
}

export default LegalNotice;
