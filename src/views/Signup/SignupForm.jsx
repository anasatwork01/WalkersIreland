import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Form, InputFeild, SubmitButton } from "./style";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
      <InputFeild
        type="password"
        placeholder="Password"
        {...register("password", {
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 8,
            message: "password should be of atleast 8 charachters",
          },
        })}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <InputFeild
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: { value: true, message: "Confirm Password is required" },
          validate: (val) => {
            if (watch('password') !== val) {
              return "Your passwords do no match";
            }
        }})}
      />
      {errors.confirmPassword && (
        <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
      )}
      <SubmitButton type="submit" name="SignUp" value={"Sign up"} />
      <hr />
    </Form>
  );
};

export default SignupForm;
