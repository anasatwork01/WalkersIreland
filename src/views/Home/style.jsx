import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  top: 0;
  left: 0;
  max-height: 500px;
`;

export const InfoContainer = styled(Container)`
margin-top: 50px;
margin-bottom: 50px;
`;

export const Infoimg= styled.img`
width: 100%;
object-fit: cover;
  top: 0;
  left: 0;
  max-height: 600px;
`;

export const SubTitle = styled.h4`
margin-top: 30px;
color: #333333;
text-align: center;
`;

export const Title = styled.h2`
margin-top: 20px;
text-align: center;
`;

export const Heading = styled.h2`
text-align: center;
margin-bottom: 20px;
color: white;
`;

export const Content = styled.p`
margin-top: 30px;
`;

export const CardContainer = styled.div`
padding-top: 50px;
padding-bottom: 50px;
background-color: #0a051b;
`;

export const MyCol = styled(Col)`
margin-top: 20px;
cursor: pointer;
`;