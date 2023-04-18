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

import test from '../../assets/test.jpg'

const AdventuresPost = ({source,blog}) => {
  return (
    <PostContainer>
      <ImageContainer>
        <MyLink to={`/adventures/1`}>
          <Image src={test}/>
        </MyLink>
      </ImageContainer>
      <div>
        <MyLink to={`/adventures/1`}>
          <Title>Sea Routes</Title>
        </MyLink>
      
          <Author className="author"><Info>Sea Kayaking</Info></Author>
    
        <Summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla error sed excepturi voluptatem explicabo amet quod perspiciatis dolor tempore?
        </Summary>
      </div>
    </PostContainer>
  );
};

export default AdventuresPost;
