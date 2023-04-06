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

const Post = ({source}) => {
  return (
    <PostContainer>
      <ImageContainer>
        <MyLink to={`/post/id`}>
          <Image src={source} />
        </MyLink>
      </ImageContainer>
      <div>
        <MyLink to={`/post/id`}>
          <Title>{"Search Algorithm Introduction- Breadth First Search"}</Title>
        </MyLink>
        <Info>
          <Author className="author">{"Anas Khan"}</Author>
          <time>{"July 15, 2022"}</time>
        </Info>
        <Summary>
          {
            "Python Implementation from Scratch — Search is about planning and is widely applied in self-driving cars and route planning. In this post, let’s talk about finding a feasible path given a static environment. …"
          }
        </Summary>
      </div>
    </PostContainer>
  );
};

export default Post;
