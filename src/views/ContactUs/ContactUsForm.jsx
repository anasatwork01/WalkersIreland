import React from "react";
import { useForm } from "react-hook-form";
import { Form, InputFeild, SubmitButton, TextFeild } from "./style";

const ContactUsForm = () => {
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
          placeholder="Name"
          {...register("Name", {
            required: { value: true, message: "Name is required" },
          })}
        />

        <InputFeild
          type="text"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please Enter a Valid Email",
            },
          })}
        />

        <TextFeild
          type="textarea"
          rows={5}
          cols = {5}
          placeholder="Enter your query here"
        />

        <SubmitButton type="submit" name="Contact Us" value={"Contact Us"} />
        <hr />
      </Form>
    </>
  );
};

export default ContactUsForm;
