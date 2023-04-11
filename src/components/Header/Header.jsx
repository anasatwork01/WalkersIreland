import React, { useState } from "react";
import { HeaderContainer, MyHeader, FlexContainer, Text, BlogHeading } from "./style";
import icon from "../../assets/createpost2.png";
import { Link } from "react-router-dom";

const Header = ({handleOpen}) => {
  const [isLogin , setIsLogin] = useState(false);
  return (
    <MyHeader>
      <HeaderContainer>
        <BlogHeading>BLOG SECTION</BlogHeading>
        <Link to={isLogin?'/writeBlog':''}>
          <FlexContainer onClick={isLogin? ()=>{return}: handleOpen}>
          <img src={icon} alt="" />
            <Text>Post a blog</Text>
          </FlexContainer>
        </Link>
      </HeaderContainer>
    </MyHeader>
  );
};

export default Header;
