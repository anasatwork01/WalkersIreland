import styled from "styled-components";
import { Link } from "react-router-dom";


export const Background = styled.div`
  background: #dbdbdb;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const LoginCard = styled.div`
  background: white;
  width: 65%;
  margin: auto;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  border-radius: 5px;
  overflow:hidden;
  

  @media (max-width: 1200px) {
    width: 85%;
  }
  @media (max-width: 950px) {
    width: 95%;
  }
`;

export const PictureContainer = styled.div`
text-align: center;
  flex: 1;
  @media (max-width: 768px) {
    flex: 0;
  }
`;

export const LoginContainer = styled.div`
  flex: 1;
`;

export const LogoContainer = styled.div`
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 70px;
`;

export const InputFeild = styled.input`
  margin: 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

export const SubmitButton = styled.input`
  background: black;
  margin: 10px 0;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  color: white;
  border-radius: 15px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;


export const ActiveLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #f10606;
  text-decoration: none;
`;
export const TextSec = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-align:center;
`;

export const ErrorMessage = styled.p`
    text-align: left;
    color: red;
`;