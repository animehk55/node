import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Do you want to reset: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div >
      <br />
      <br /	>
      <br />
      <div>
      <div className="wrapLogin">

    <div className="fleftLogin">

                  <div>
                  <br />
                  <br /	>
                  <br />
                  <br /	>
                  <section>
                  <form>
                      <fieldset>
                        <legend><b> </b></legend>
                          <table>
                            <tr>
                              <td>User Name</td>
                              <td><input type="text"/></td>
                            </tr>
                            <tr>
                                        <td></td>
                                        <td></td>
                                        </tr>
                                        <tr>
                              <td>Password</td>
                              <td><input type="password" /></td>
                            </tr>
                                        <tr>
                                        <td></td>
                                        <td></td>
                                        </tr>
                                        <tr>
                                            <td className="flexLoginCenterLogin"><button className="btn-register">Login</button></td>
                                            <td>  <form onSubmit={this.handleSubmit}>
                                                <input type="submit" value="Reset" />
                                                    </form>
                                            </td>
                                        </tr>
                          </table>

                      </fieldset>
                    </form>

                </section>

                  </div>



    </div>
  </div>
      </div>
    </div>
    );
  }
}

export default Login;
