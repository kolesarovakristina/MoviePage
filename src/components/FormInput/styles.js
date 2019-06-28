import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0 15px;
  height: 40px;
  width: calc(100%);
  font-size: 15px;
  display: inline-block;
  color: grey;
  border: 1px solid #168393;
  margin: 5px 0;
  outline: 0;
  &:focus {
    border-bottom: 2px solid #168393;
  }
`;
