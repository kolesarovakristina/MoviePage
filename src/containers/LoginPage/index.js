import React from "react";
import FormInput from "../../components/FormInput";
import {
  StyledWrapper,
  StyledButton
} from "./styles";
import axios from "axios";
// import base64 from "base-64";
// import { withRouter } from "react-router-dom";


class LoginPage extends React.Component {
    state={
        username:"",
        password:"",
        token:""
    }
    handleUserNameInput = e => {
    this.setState({ username: e.target.value });
      };
    
    handleUserPasswordInput = e => {
    this.setState({ password: e.target.value });
      };

      onSubmit = async event => {
        event.preventDefault();
        const form = new FormData();
        form.append("username", `${this.state.username}`);
        form.append("password", `${this.state.password}`);
        try {
          const response = await axios({
            method: "post",
            url: "http://wdassignment.devfl.com/api/login",
            data: form,
            config: { headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
         }}

          });
          console.log(response)
        //  this.props.history.push("/")
        } catch (err) {
          console.log(err);
        }
      };
  render() {
      const {username,password}= this.state;
    return (
      <StyledWrapper>
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
          </form>
            <StyledButton>LOG IN</StyledButton>
      </StyledWrapper>
    );
  }
}

export default LoginPage;