import React from 'react'
import AdventureHeader from '../../components/AdventuresHeader/AdventuresHeader'
import AdventuresPost from '../../components/AdventuresPost/AdventuresPost';
import { Container } from "react-bootstrap";
import { PostContainer } from "./style";

const Adventures = () => {

  return (
    <div>
      <AdventureHeader/>
      <AdventuresPost/>

      {/* <Container>
        <PostContainer>
          {allBlogs.map((blog) => (
            <AdventuresPost key={blog.id} blog={blog}/>
          ))}
        </PostContainer>
      </Container> */}


    </div>
  )
}

export default Adventures
