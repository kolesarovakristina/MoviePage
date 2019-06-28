import React, { FC } from "react";
import Name from "./styles";

interface IProps {
  id: number;
  name: string;
  to: string;
  onClick: () => void;
}

const MovieName: FC<IProps> = ({ id, name, onClick, to }) => {
  return (
    <Name id={id} onClick={onClick} to={to}>
      {name}
    </Name>
  );
};
export default MovieName;
