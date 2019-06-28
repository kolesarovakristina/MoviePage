import React, { FC } from "react";
import { Wrapper, Title, Description } from "./styles";

interface IProps {
  title: string;
  description: string;
}
const MovieDetails: FC<IProps> = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
export default MovieDetails;
