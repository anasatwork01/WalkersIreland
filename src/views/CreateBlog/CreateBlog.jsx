import React from 'react'
import { Title, BlogDiv } from "./style";
import CreateBlogForm from './CreateBlogForm';

const CreateBlog = () => {
  return (
    <BlogDiv>
      <Title>Create your own blog</Title>
      <CreateBlogForm/>
    </BlogDiv>
  )
}

export default CreateBlog
