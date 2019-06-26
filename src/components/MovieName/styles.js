import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 70%;
  background-color: white;
  color: rgb(22, 131, 147);
  border: 1px solid rgb(22, 131, 147);
  &:hover {
    background-color: rgb(22, 131, 147);
    color: white;
  }
`;
export const Title = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  padding: 30px;
`;
