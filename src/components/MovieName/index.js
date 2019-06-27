import React from "react";
import Name from "./styles";

const MovieName = ({ id, name, onClick, to }) => {
  return (
    <Name id={id} onClick={onClick} to={to} >
      {name}
    </Name>
  );
};
export default MovieName;
