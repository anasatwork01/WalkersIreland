import styled from "styled-components";


export const Background = styled.div`
  background: #dbdbdb;
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

export const Form = styled.form`
margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0px 70px;
  width: 50%;
  /* margin: auto; */

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

export const Button = styled.button`
  background: ${(props) => (props.primary ? "white" : "#337FFF")};
  color: ${(props) => (props.primary ? "black" : "white")};
  margin: 10px 0;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  border-radius: 15px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  `;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
`;



export const ButtonText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-left:15px;
`;

export const Contact = styled.h1`
text-align: center;
  padding: 0px 70px;
margin-top: 20px;
  font-size: 43px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
`

export const Text = styled.p`
text-align: center;
  padding: 0px 70px;
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
`

export const ContactDiv = styled.div`
  margin: auto; 
`
export const CenterDiv = styled.div``;