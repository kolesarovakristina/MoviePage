import React, { FC } from "react";
import { StyledFooter, StyledText } from "./styles";

interface IProps {
  text: string;
}

const Footer: FC<IProps> = ({ text }) => (
  <StyledFooter className="footer">
    <StyledText>{text} •</StyledText>
  </StyledFooter>
);
export default Footer;
