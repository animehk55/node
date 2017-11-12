import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../../actions';
import { Link } from 'react-router-dom';
//import Payments from './Payments';

class Login extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
      return 'still deciding';
      case false:
      return 'im loggedout';
      default:
      return 'im logged in';
    }
  }
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Do you want to reset: " + this.state.value);
    event.preventDefault();
  }

  render() {
  //  console.log(this.props);
    return (
      <div>
        <div>
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <nav>
              <div className="nav-wrapper">
                <a className="left brand-logo">SOF</a>
                <ul className="right">
                   <li>
                     <a href="/auth/google">Login with Google</a>
                   </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps( { auth } ) {
  return { auth };
}

export default connect(mapStateToProps) (Login);


/*    <li>
      <a>Login with Google</a>
    </li>
*/
// write in blank space above

//   {this.renderContent()}
