import React from 'react'
import { ActiveSpan, Background, Button, ButtonText, ButtonsContainer, LoginCard, LoginContainer, PictureContainer, TextSec } from './style'
import LoginForm from './LoginForm'
import loginImg from '../../assets/login.jpg';
import logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'


const Login = () => {
  return (
      <Background>
        <LoginCard>
          <PictureContainer>
            <img src={loginImg} alt="Food"  width={'100%'} height={'100%'}/>
          </PictureContainer>
          <LoginContainer>
            <div>
              <img src={logo} alt="" width={'50%'} />
            </div>
            <div>
              <LoginForm/>
            </div>
            <ButtonsContainer>
            <Button primary>
              <img src={google} alt="google" />
              <ButtonText>Sign in with Google</ButtonText>
              </Button>
            <Button>
              <img src={facebook} alt="facebook" />
              <ButtonText>Sign in with Facebook</ButtonText>
              </Button>
            </ButtonsContainer>
            <TextSec>
              <p>Do not have an Account? <ActiveSpan>Sign Up</ActiveSpan></p>
            </TextSec>
          </LoginContainer>
        </LoginCard>
      </Background>
  )
}

export default Login