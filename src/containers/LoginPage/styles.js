import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 30%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin: auto;
  height: 420px;
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 15px;
  display: inline-block;
  color: grey;
  border: 1px solid rgb(22, 131, 147);
  margin 2px 0;
  outline: 0;
  &:focus{
    border-bottom: 2px solid #168393;
  }
`;
export const StyledButton = styled.button`
  width: 108%;
  height: 45px;
  font-size: 14px;
  border: 1px solid rgb(22, 131, 147);
  background-color: rgb(22, 131, 147);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 5px;
  cursor: pointer;
  transition: all .15s ease-in-out;
    &:hover {
      background-color: #fff;
      color: rgb(22, 131, 147);
    }
`;


