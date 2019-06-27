import styled from "styled-components";
import { Link } from "react-router-dom";

const Name = styled(Link)`
  display: flex;
  background-color: #f2f2f2;
  color: #168393;
  text-decoration: none;
  border: 1px solid #168393;
  font-size: 20px;
  font-weight: bold;
  padding: 50px;
  &:hover {
    background-color: #fff;
    color: #168393;
  }
`;
export default Name;
