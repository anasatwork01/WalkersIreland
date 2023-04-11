import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (min-width: 700px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

export const ImageContainer = styled.div`
  max-height: 300px;
  display: flex;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
`;

export const Info = styled.p`
  margin: 24px 0;
  color: #888;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  gap: 10px;
`;

export const Summary = styled.p`
  margin: 10px 0;
  line-height: 1.8rem;
`;

export const MyLink = styled(Link)`
width: 100%;
  text-decoration: none;
  color: inherit;
`;

export const Author = styled.p`
  color: #333;
`;
