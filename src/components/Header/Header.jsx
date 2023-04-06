import React from "react";
import { HeaderContainer, MyHeader, FlexContainer, Text, BlogHeading } from "./style";
import icon from "../../assets/createpost2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <MyHeader>
      <HeaderContainer>
        <BlogHeading>BLOGS SECTION</BlogHeading>
        <Link to={'/writeBlog'}>
          <FlexContainer>
          <img src={icon} alt="" />
            <Text>Post a blog</Text>
          </FlexContainer>
        </Link>
      </HeaderContainer>
    </MyHeader>
  );
};

export default Header;
