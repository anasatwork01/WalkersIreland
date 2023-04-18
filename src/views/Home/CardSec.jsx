import React from "react";
import { CardContainer, Heading, MyCol } from "./style";
import { Card, Container, Row } from "react-bootstrap";

const CardSec = () => {
  return (
    <CardContainer>
      <Container>
        <Heading>Our Services</Heading>
        <Row>
          <MyCol sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Adventure</Card.Title>
                <Card.Text>
                  {
                    "Welcome to our Adventure tab, where we offer an exciting range of outdoor activities for thrill-seekers and nature lovers alike. Whether you're looking for an adrenaline-pumping adventure or a relaxing outdoor experience, we have something for everyone.".slice(0,200)+"...."
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </MyCol>
          <MyCol sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Healthy Eating</Card.Title>
                <Card.Text>{"Welcome to our Healthy Recipe tab, where we offer a wide range of delicious and nutritious recipes that are easy to make and good for you. We believe that eating healthy doesn't have to be boring or tasteless, and that's why we've created a collection of recipes that are both healthy and delicious.".slice(0,200)+"...."}
                </Card.Text>
              </Card.Body>
            </Card>
          </MyCol>
          <MyCol sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Blog Section </Card.Title>
                <Card.Text>
                  {"Welcome to our Blog tab, where we offer a diverse range of articles and resources on a variety of topics related to health, wellness, and lifestyle. Our blog is a place where you can find inspiration, advice, and information to help you live your best life.".slice(0,200)+'....'}
                </Card.Text>
              </Card.Body>
            </Card>
          </MyCol>
        </Row>
      </Container>
    </CardContainer>
  );
};

export default CardSec;
