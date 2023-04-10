import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 43px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  text-align: center;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  max-height: 300px;
`;

export const BlogContainer = styled(Container)`
  position: relative;
`;

export const Content = styled.p`
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
`;
export const Calories = styled.h6`
  margin-top: 10px;
  font-family: "Inter";
  font-style: normal;
  text-align: center;
  font-weight: bold;
`;

export const Info = styled.span`
margin-left: 10px;
  color: #888;
  font-size: 1rem;
  font-weight: bold;
`;

export const Ingredient = styled.div`
`

export const Heading = styled.h3`
margin-top: 20px;
`
