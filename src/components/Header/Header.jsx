import React from "react";
import { HeaderContainer, MyHeader, FlexContainer } from "./style";
import icon from "../../assets/createpost2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <MyHeader>
      <HeaderContainer>
        <h3>{"BLOG"}</h3>
        <Link to={'/writeBlog'}>
          <FlexContainer>
            <img src={icon} alt="" />
          </FlexContainer>
        </Link>
      </HeaderContainer>
    </MyHeader>
  );
};

export default Header;
