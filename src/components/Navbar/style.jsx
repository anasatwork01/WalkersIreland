import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import {Container} from "react-bootstrap";

export const User = styled.div`
  display: flex;
  position: absolute;
  color: white;
  right: 0;

  @media screen and (max-width: 1000px){
    position: static;
  }
`;

export const UserNavLink = styled(Nav.Link)`
margin-left: 6px;  
color: white;
`

export const MyNavbar = styled(Navbar)`
background-color: black;
`;

export const MyContainer = styled(Container)`
position: relative;
`

export const MyImg = styled.img`
width: 40px;
`

  export const AuthDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `;