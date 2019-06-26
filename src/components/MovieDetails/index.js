import React from "react";
import { Wrapper, Title, Description } from "./styles";

const MovieDetails = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
export default MovieDetails;
