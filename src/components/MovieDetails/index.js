import React from "react";
import { Wrapper, Title, Description } from "./styles";
import ButtonBack from "../ButtonBack";

const MovieDetails = ({ title, description }) => {
  return (
    <Wrapper>
     
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
export default MovieDetails;
