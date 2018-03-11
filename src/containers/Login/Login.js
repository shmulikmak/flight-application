import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import loginBackground from '../../images/Login-Page-Background.jpg';
import "./Login.css";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: "user",
      userPassword: "password",
      user: "",
      password: "",
      sectionStyle: {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${loginBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  }

    validateForm() {     
        return this.state.user === this.state.userName && this.state.password === this.state.userPassword; 
    }

  handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push("/dashboard");
  }

  render() {
        return (
          <div className="Login" style={this.state.sectionStyle}>
            <h1 className="login-title">Enter "user" and "password"</h1>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="user" bsSize="large">
                  <ControlLabel>User</ControlLabel>
                      <FormControl
                  autoFocus
                  type="text"
                     value={this.state.user}
                  onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    value={this.state.password}
                  onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <Button
                  block
                  bsSize="large"
                disabled={!this.validateForm()}
                type="submit">
                Login
                      </Button>
                </form>
              </div>
            );
    }
  }
export default withRouter(Login);
