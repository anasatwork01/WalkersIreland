import React, { useState } from "react";
import Post from "../../components/Post/Post";
import { Container } from "react-bootstrap";
import test1 from "../../assets/test.jpg";
import test2 from "../../assets/test2.jpg";
import { PostContainer } from "./style";
import Header from "../../components/Header/Header";
import MyModal from "../../components/Modal/MyModal";

const Blogs = () => {
  const [showModel,setShowModel] = useState(false);

  const handleClose = ()=>{
    setShowModel(false);
  }

  const handleOpen = ()=>{
    setShowModel(true);
  }
  return (
    <>
    <Header handleOpen={handleOpen}/>
    <Container>
      <PostContainer>
        <Post source={test1} />
        <Post source={test2} />
        <Post source={test1} />
      </PostContainer>
    </Container>
    <MyModal show={showModel} handleClose={handleClose}/>
    </>
  );
};

export default Blogs;
