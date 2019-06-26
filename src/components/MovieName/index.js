import React from "react";
import { Wrapper, Title } from "./styles";

const MovieName = ({ id, title, onClick, to }) => {
  return (
    <Title id={id} onClick={onClick} to={to}>
      {title}
    </Title>
  );
};
export default MovieName;
