import React, { useEffect, useState } from "react";
import {
  Title,
  Image,
  Content,
  Author,
  BlogContainer,
  Info,
} from "./style";
import axios from "axios";
import { useParams } from "react-router";

const SinglePageBlog = () => {
  const [blog, setBlog] = useState({
    title:"",
    author:{
      name:""
    },
    createdAt:"",
    cover:"",
    content:""

  });

  const {id} = useParams();

  console.log(id);

  useEffect(() => {
    console.log("Here");
    async function getBlog() {
      try {
        console.log("in function")
        const res = await axios.get(`http://localhost:8800/api/v1/blog/post/${id}`);
        console.log(res);
        setBlog(res.data);
        return res;
      } catch (err) {
        alert(err);
      }
    }
    getBlog();
  }, [id]);

  return (
    <BlogContainer>
      <Title>{blog.title}</Title>
      <Author>By: {blog.author.name} <Info>Dated: {blog.createdAt.slice(0,10)}</Info></Author>
      <Image src={`http://localhost:8800/${blog.cover}`} alt="" />
      <Content>
        {blog.content}
      </Content>
    </BlogContainer>
  );
};

export default SinglePageBlog;
