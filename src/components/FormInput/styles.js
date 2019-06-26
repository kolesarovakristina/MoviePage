import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0 15px;
  height: 40px;
  width: calc(100%);
  font-size: 15px;
  display: inline-block;
  color: grey;
  border: 1px solid rgb(22, 131, 147);
  margin: 5px 0;
  outline: 0;
  &:focus {
    border-bottom: 2px solid #168393;
  }
`;
