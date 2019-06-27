import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 50%;
  margin-top:10%;
  background-color: #f2f2f2;
  color: grey;
  border: 1px solid rgb(22, 131, 147);
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #168393;
  font-family: 'Oswald', sans-serif;
`;
export const Description = styled.div`
color:#666666;
padding:50px;
text0align:center;
`;
export const Error = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  width: 50%;
  border: 1px solid rgb(22, 131, 147);
  background-color: white;
  margin: auto;
`;
