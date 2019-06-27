    
import React from "react";
import { withRouter } from "react-router-dom";
import image from '../../assets/back-arrow.png';
import { StyledButton } from "./styles";


class ButtonBack extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <span>
     <StyledButton src={image} onClick={this.goBack} />
      </span>
     );
  }
}
export default withRouter(ButtonBack);