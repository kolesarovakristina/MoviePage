import React from "react";
import FormInput from "../../components/FormInput";
import { StyledWrapper, StyledButton, Error } from "./styles";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { saveTokenToLocalStorage } from "../../utils";
import logo from "../../assets/logo.png";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    error: null
  };
  handleUserNameInput = e => {
    this.setState({ username: e.target.value });
  };

  handleUserPasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://wdassignment.devfl.com/api/login",
        auth: {
          username: this.state.username,
          password: this.state.password
        },
        headers: {
          Authorization: `Basic ${this.auth}`
        }
      });
      this.setState({
        error: null
      });
      saveTokenToLocalStorage(response.data.data.token);
      alert("You have been successfully logged.");
      this.props.history.push("/dashboard/homepage");
    } catch (err) {
      if (err.response.status) {
        this.setState({
          error: "Invalid credentials.Try again."
        });
      }
    }
  };
  render() {
    const { username, password, error } = this.state;
    return (
      <StyledWrapper>
        <img src={logo} alt="logo" />
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={this.handleUserNameInput}
          />
          <FormInput
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleUserPasswordInput}
          />
          <Error>{error}</Error>
          <StyledButton>LOG IN</StyledButton>
        </form>
      </StyledWrapper>
    );
  }
}

export default withRouter(LoginPage);
