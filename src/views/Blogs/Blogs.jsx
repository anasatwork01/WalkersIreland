import React from "react";
import Post from "../../components/Post/Post";
import { Container } from "react-bootstrap";
import test1 from "../../assets/test.jpg";
import test2 from "../../assets/test2.jpg";
import { PostContainer } from "./style";
import Header from "../../components/Header/Header";

const Blogs = () => {
  return (
    <>
    <Header/>
    <Container>
      <PostContainer>
        <Post source={test1} />
        <Post source={test2} />
        <Post source={test1} />
      </PostContainer>
    </Container>
    </>
  );
};

export default Blogs;
