import React from "react";
import { useForm } from "react-hook-form";
import { Form, InputFeild, SubmitButton, TextFeild } from "./style";

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
          {...register("Title", {
            required: { value: true, message: "Title is required" },
          })}
        />

        <InputFeild
          type="Summary"
          placeholder="Type summary here"
          {...register("Summary", {
            required: { value: true, message: "Summary is required" },
          })}
        />

        <InputFeild
          type="file"
          placeholder="Select Image"
          {...register("Image", {
            required: { value: true, message: "Image is required" },
          })}
        />

        <TextFeild
          type="textarea"
          rows={7}
          cols={7}
          placeholder="Please enter content for blog"
        />

        <SubmitButton type="submit" name="Post" value={"Post"} />
        <hr />
      </Form>
    </>
  );
};

export default CreateBlogForm;
