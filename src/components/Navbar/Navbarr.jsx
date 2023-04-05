import React from "react";
import {Container} from "react-bootstrap";
import profile from "../../assets/profile.jpg";
import { User } from "./style";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyNavbar, MyContainer, UserNavLink } from "./style";
const Navbarr = () => {
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
            <LinkContainer to="/wellbeing">
              <Nav.Link>Wellbeing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>

            <User>
            <img src={profile} alt="" />
            <UserNavLink>User</UserNavLink>
            </User>
          </Nav>
        </Navbar.Collapse>
        </MyContainer>
      </MyNavbar>
  );
};

export default Navbarr;
