import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MyHeader = styled.div`
  background-color: #f5f0f0;
  box-shadow: 2px 7px 65px -1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 2px 7px 65px -1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 2px 7px 65px -1px rgba(0, 0, 0, 0.7);
`;

export const FlexContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 8px
`;

export const Text = styled.p`
  cursor: pointer;
  color: black;
  margin-left: 5px;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h1`
  color: black;
  margin-left: 5px;
  font-size: 27px;
`;

export const Select = styled.select`
border: none;
    word-wrap: normal;
    background: none;

`;