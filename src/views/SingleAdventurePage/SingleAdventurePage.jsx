import React from 'react'
import {
    Title,
    Image,
    Content,
    Author,
    Routee,
    BlogContainer,
    Info,
  } from "./style";
  import test from '../../assets/test.jpg'
import { Route } from 'react-router';

const SingleAdventurePage = () => {
  return (
    <div>
          <BlogContainer>
      <Title>"Title"</Title>
      <Author>Path <Info>Sea Kayaking</Info></Author>
      <Image src={test} alt="" />
      <Content>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ipsa odio rerum enim omnis odit accusamus molestias praesentium unde nam.
      </Content>
      <Routee>Route</Routee>
      <Image src={test} alt="" />
    </BlogContainer>
    </div>
  )
}

export default SingleAdventurePage
