import React from "react";
import { useForm } from "react-hook-form";
import { Form, InputFeild, SubmitButton, TextFeild, ErrorMessage } from "./style";
import axios from "axios";
import { useSelector } from "react-redux";

const CreateBlogForm = () => {
  const token = useSelector(state=>state.auth.token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postBlog = async(data)=>{
    try{
      const res = axios.post('http://localhost:8800/api/v1/blog/post',data,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      return res;
    }catch(err){
      alert(err)
    }
  }

  
  const onSubmit = async(data) => {
    console.log(data)
    const res = await postBlog({...data,image:data.image[0]});
    console.log(res);

  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputFeild
          type="text"
          placeholder="Enter Title"
          {...register("title", {
            required: { value: true, message: "Title is required" },
          })}
        />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}        

        <InputFeild
          type="Summary"
          placeholder="Type summary here"
          {...register("summary", {
            required: { value: true, message: "Summary is required" },
          })}
        />
          {errors.summary && <ErrorMessage>{errors.summary.message}</ErrorMessage>}

        <InputFeild
          type="file"
          placeholder="Select Image"
          {...register("image", {
            required: { value: true, message: "Image is required" },
          })}
        />
          {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}

        <TextFeild
          type="textarea"
          rows={7}
          cols={7}
          placeholder="Please enter content for blog"
          {...register("content", {
            required: { value: true, message: "Content for blog required" },
          })}
        />

{errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}

        <SubmitButton type="submit" name="Post" value={"Post"} />
        <hr />
      </Form>
    </>
  );
};

export default CreateBlogForm;
