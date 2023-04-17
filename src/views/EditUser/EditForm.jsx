import React, { useRef, useState } from "react";
import { ErrorMessage, Form, InputFeild, SubmitButton } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Avatar from "react-avatar-edit";

const EditForm = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector(state=>state.auth.token);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.patch(
        "http://localhost:8800/api/v1/users/updateMe",
        data,{
            headers:{
              Authorization: `Bearer ${token}`
            }}
      );
      if (response) {
        toast.success("User Updated successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <InputFeild
          type="file"
          placeholder="Select Image"
          {...register("image", {
            required: { value: true, message: "Image is required" },
          })}
        />
        <InputFeild
          type="text"
          placeholder="Name"
          value={user.name}
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <InputFeild
          type="text"
          placeholder="Email"
          value={user.email}
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please Enter a Valid Email",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <SubmitButton type="submit" name="update" value={"Update Profile"} />
        <hr />
      </Form>
    </>
  );
};

export default EditForm;
