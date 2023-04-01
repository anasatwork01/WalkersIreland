import React from "react";
import {
  ActiveLink,
  Background,
  LoginCard,
  LoginContainer,
  PictureContainer,
  TextSec,
  LogoContainer,
} from "./style";
import SignupForm from "./SignupForm";
import loginImg from "../../assets/login.jpg";
import logo from "../../assets/logo.png";


const SignUp = () => {
  return (
    <Background>
      <LoginCard>
        <PictureContainer>
          <img src={loginImg} alt="Food" width={"100%"} height={"100%"} />
        </PictureContainer>
        <LoginContainer>
          <LogoContainer>
            <img src={logo} alt="" width={"50%"} />
          </LogoContainer>
          <div>
            <SignupForm />
          </div>
          <TextSec>
            <p>
              Already  have an Account?{" "}
              <ActiveLink to={"/login"}>Login</ActiveLink>
            </p>
          </TextSec>
        </LoginContainer>
      </LoginCard>
    </Background>
  );
};

export default SignUp;
