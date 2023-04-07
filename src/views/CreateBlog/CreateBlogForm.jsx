import React from "react";
import { useForm } from "react-hook-form";
import { Form, InputFeild, SubmitButton, TextFeild, ErrorMessage } from "./style";

const CreateBlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
