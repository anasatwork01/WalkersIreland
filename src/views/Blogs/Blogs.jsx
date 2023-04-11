import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import { Container } from "react-bootstrap";
import test1 from "../../assets/test.jpg";
import test2 from "../../assets/test2.jpg";
import { PostContainer } from "./style";
import Header from "../../components/Header/Header";
import MyModal from "../../components/Modal/MyModal";
import axios from "axios";

const Blogs = () => {
  const [showModel, setShowModel] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    async function getAllBlogs() {
      try {
        const res = await axios.get("http://localhost:8800/api/v1/blog/post");
        setAllBlogs(res.data);
        return res;
      } catch (err) {
        alert(err);
      }
    }
    getAllBlogs();
  }, []);

  console.log(allBlogs);

  const handleClose = () => {
    setShowModel(false);
  };

  const handleOpen = () => {
    setShowModel(true);
  };
  return (
    <>
      <Header handleOpen={handleOpen} />
      <Container>
        <PostContainer>
          {allBlogs.map((blog) => (
            <Post key={blog._id} blog={blog}/>
          ))}
        </PostContainer>
      </Container>
      <MyModal show={showModel} handleClose={handleClose} />
    </>
  );
};

export default Blogs;
