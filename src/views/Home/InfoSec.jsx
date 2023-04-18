import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import infoImg from "../../assets/infopic.jpg";
import { Content, InfoContainer, Infoimg, SubTitle, Title } from "./style";

const InfoSec = () => {
  return (
    <InfoContainer>
      <Row>
        <Col xs={12} md={12} lg={6}>
          <div>
            <SubTitle>Step into a healthier you with every stride.</SubTitle>
            <Title>Walkers Ireland</Title>
            <Content>
              We understand that fitness is a journey, and that's why we offer a
              range of resources to support you at every step of your journey.
              From workout plans and nutritional advice to expert tips and
              motivation, we have everything you need to get started and stay on
              track. Our team of fitness experts and trainers are passionate
              about helping you achieve your goals, and we are committed to
              providing you with the most up-to-date information and guidance.
              We believe that fitness should be accessible to everyone,
              regardless of their age, fitness level, or experience
            </Content>
            <Content>
              We also understand the importance of community, and that's why we
              encourage engagement and interaction among our members. Whether
              it's through our social media platforms or online forums, we
              provide you with a platform to connect with like-minded
              individuals, share your experiences, and support each other on
                your fitness journey.
            </Content>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <Infoimg src={infoImg} alt="" />
        </Col>
      </Row>
    </InfoContainer>
  );
};

export default InfoSec;
