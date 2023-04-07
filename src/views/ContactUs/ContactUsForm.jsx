import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  InputFeild,
  SubmitButton,
  TextFeild,
  ErrorMessage,
} from "./style";

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
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

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
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <TextFeild
          type="textarea"
          rows={5}
          cols={5}
          placeholder="Enter your query here"
          {...register("query", {
            required: { value: true, message: "Place your query here" },
          })}
        />
        {errors.query && <ErrorMessage>{errors.query.message}</ErrorMessage>}

        <SubmitButton type="submit" name="Contact Us" value={"Contact Us"} />
        <hr />
      </Form>
    </>
  );
};

export default ContactUsForm;
