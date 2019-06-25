import React from "react";
import { Wrapper, Title } from "./styles";

const MovieName = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};
export default MovieName;
