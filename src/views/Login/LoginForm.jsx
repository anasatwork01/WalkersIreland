import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Form, InputFeild, SubmitButton } from "./style";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data)).then((response) => {
      if (response.error) {
        // alert(response)
      } else {
        navigate("/blog");
        toast.success('User Login successfully !', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <SubmitButton type="submit" name="Login" value={"Login"} />
      <hr />
    </Form>
  );
};

export default LoginForm;
