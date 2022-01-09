import React, { Component } from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/* email */}
        <div className="form-gorup form-row">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
              console.log(this.state.email);
            }}
          ></input>

          {/* password */}
        </div>
        <div className="form-gorup form-row">
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
              console.log(this.state.password);
            }}
          ></input>
        </div>
        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary m-3" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      this.setState({
        message: <span className="text-success">Successfully Logged in</span>,
      });
      // call the app component updateloggedin stt=atus method
      this.props.updateIsLoggedInStatus(true);
    } else {
      this.setState({
        message: <span className="text-danger">invalid login,try again</span>,
      });
      // error
    }
    console.log(this.state.message);
  };
}
