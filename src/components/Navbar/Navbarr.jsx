import React from "react";
import {Container} from "react-bootstrap";
import profile from "../../assets/profile.jpg";
import { MyImg, User } from "./style";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyNavbar, MyContainer, UserNavLink } from "./style";
import { useSelector } from "react-redux";
const Navbarr = () => {
  const name = useSelector(state=>state.auth.user.name);
  const picture = useSelector(state=>state.auth.user.profilePicture);
  console.log(picture);
  return (
      <MyNavbar expand="lg" variant="dark">
        <MyContainer>
        <LinkContainer to="/home">
          <Navbar.Brand>Walkers Ireland</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/destinations">
              <Nav.Link>Destinations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/adventures">
              <Nav.Link>Adventures</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/healthyeating">
              <Nav.Link>HealthyEating</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/wellbeing">
              <Nav.Link>Wellbeing</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>

            <User>
            <MyImg src={`http://localhost:8800${picture}`} alt="" />
            <UserNavLink>{name}</UserNavLink>
            </User>
          </Nav>
        </Navbar.Collapse>
        </MyContainer>
      </MyNavbar>
  );
};

export default Navbarr;
