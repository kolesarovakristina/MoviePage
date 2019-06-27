import React from "react";
import Name from "./styles";

const MovieName = ({ id, name, onClick, to, movieTitle }) => {
  return (
    <Name id={id} onClick={onClick} to={to} movieTitle={movieTitle}>
      {name}
    </Name>
  );
};
export default MovieName;
