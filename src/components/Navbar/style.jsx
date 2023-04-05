import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import {Container} from "react-bootstrap";

export const User = styled.div`
  display: flex;
  position: absolute;
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