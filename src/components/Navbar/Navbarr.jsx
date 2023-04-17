import React from "react";
import {Container} from "react-bootstrap";
import profile from "../../assets/profile.jpg";
import { MyImg, User } from "./style";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyNavbar, MyContainer, UserNavLink } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
const Navbarr = () => {
  const dispatch = useDispatch();
  const name = useSelector(state=>state.auth.user.name);
  const picture = useSelector(state=>state.auth.user.profilePicture);
  const isauth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = ()=>{
    alert("Do you want to logout");
    dispatch(authActions.logout());
  }

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
            
            {isauth&&<MyImg src={`http://localhost:8800${picture}`} alt="" />}
            {isauth&&<LinkContainer to={'/me'}>
            <UserNavLink>{name}</UserNavLink>
            </LinkContainer>}
            {isauth&&<Nav.Link><span onClick={logoutHandler}>Logout</span></Nav.Link>}
            {!isauth&&<LinkContainer to="/login">
              <UserNavLink>Login</UserNavLink>
            </LinkContainer>}
            {!isauth&&<LinkContainer to="/signup">
              <UserNavLink>Signup</UserNavLink>
            </LinkContainer>}
            </User>
          </Nav>
        </Navbar.Collapse>
        </MyContainer>
      </MyNavbar>
  );
};

export default Navbarr;
