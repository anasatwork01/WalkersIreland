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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 70px;
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 800px) and (min-width: 550px) {
    width: 75%;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const InputFeild = styled.input`
  margin: 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

export const TextFeild = styled.textarea`
  margin: 10px 0;
  /* border: 1px solid grey;
  height: 200px; */
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


export const Title = styled.h1`
  padding: 0px 70px;
margin-top: 20px;
  text-align: center;
  text-decoration: underline;
  font-size: 43px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
`


export const BlogDiv = styled.div`
text-align: center;
  margin: auto;
`

export const ErrorMessage = styled.p`
    text-align: left;
    color: red;
`;