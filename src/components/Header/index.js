import React from "react";
import {HeaderWrapper,StyledButton} from "./styles";

class Header extends React.Component{
    state={
        isLoged:true
    }
    logOut = () => {
        console.log("logout");
        this.setState({ isLoged: false });
        window.localStorage.removeItem("token");
        this.props.history.push("/");
        
      };
    render(){
        return(
            <HeaderWrapper>
 <StyledButton onClick={this.logOut}>Log Out</StyledButton>
            </HeaderWrapper>
        )
    }
}
export default Header;