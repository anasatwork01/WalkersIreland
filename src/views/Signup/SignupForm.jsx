import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Form, InputFeild, SubmitButton } from "./style";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { toast } from "react-toastify";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
    dispatch(registerUser(data)).then((response) => {
      if (response.error) {
        // alert(response.error)
      } else {
        navigate("/login");
        toast.success('User created successfully !', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
    });
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
        {...register("passwordConfirm", {
          required: { value: true, message: "Confirm Password is required" },
          validate: (val) => {
            if (watch("password") !== val) {
              return "Your passwords do no match";
            }
          },
        })}
      />
      {errors.passwordConfirm && (
        <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
      )}
      <SubmitButton type="submit" name="SignUp" value={"Sign up"} />
      <hr />
    </Form>
  );
};

export default SignupForm;
