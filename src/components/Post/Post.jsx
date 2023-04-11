import React from "react";
import {
    Author,
  Image,
  ImageContainer,
  Info,
  MyLink,
  PostContainer,
  Summary,
  Title,
} from "./style";

const Post = ({source,blog}) => {
  return (
    <PostContainer>
      <ImageContainer>
        <MyLink to={`/blog/${blog._id}`}>
          <Image src={`http://localhost:8800/${blog.cover}`} />
        </MyLink>
      </ImageContainer>
      <div>
        <MyLink to={`/blog/${blog._id}`}>
          <Title>{blog.title}</Title>
        </MyLink>
        <Info>
          <Author className="author">{blog.author.name}</Author>
          <time>{blog.createdAt.slice(0, 10)}</time>
        </Info>
        <Summary>
          {blog.summary.slice(0,180)}
        </Summary>
      </div>
    </PostContainer>
  );
};

export default Post;
