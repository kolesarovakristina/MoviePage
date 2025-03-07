import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  height: 420px;
`;
export const StyledButton = styled.button`
  width: 108%;
  height: 45px;
  font-size: 14px;
  border: 1px solid #168393;
  background-color:#168393;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #168393;
  }
`;
export const Error = styled.div`
  color: #ff4d4d;
  text-align: center;
`;
