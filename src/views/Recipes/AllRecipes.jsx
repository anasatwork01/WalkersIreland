import React from "react";
import RecipesHeader from "../../components/RecipesHeader/RecipesHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Button } from "react-bootstrap";
import meal from "../../assets/meal.jpg";
import meal1 from "../../assets/meal1.jpg";
import meal2 from "../../assets/meal2.jpg";
import { useNavigate } from "react-router-dom";
import {OneCard, CardImg } from "./style";

const AllRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Pasta",
      ingredients: ["pasta", "tomatoes", "cheese"],
      image:  meal1 ,
      content: "lorem20ijq;jd jq jdlnd qlnlqd lnlqnlqljelnqdd,nqdl",
      calories: "100",
    },
    {
      id: 2,
      title: "Pizza",
      ingredients: ["dough", "tomatoes", "cheese"],
      image:  meal2 ,
      content: "lorem20ijq;jd jq jdlnd qlnlqd lnlqnlqljelnqdd,nqdl",
      calories: "100",
    },
    {
      id: 3,
      title: "Salad",
      ingredients: ["lettuce", "tomatoes", "cucumber"],
      image: meal ,
      content: "lorem20ijq;jd jq jdlnd qlnlqd lnlqnlqljelnqdd,nqdl",
      calories: "100",
    },
    {
      id: 4,
        title: "Pizza",
        ingredients: ["dough", "tomatoes", "cheese"],
        image:  meal2 ,
        content: "lorem20qdnql ndllqndlnql nqhqdqdkqdnbkqd",
        calories: "100",
      },
      {
        id: 5,
        title: "Salad",
        ingredients: ["lettuce", "tomatoes", "cucumber"],
        image: meal ,
        content: "lorem20ijq;jd jq jdlnd qlnlqd lnlqnlqljelnqdd,nqdl",
        calories: "100",
      },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <RecipesHeader />

      <Container>
        <Row>
          {recipes.map((recipe, index) => (
            <Col xs={12} md={6} lg={4} onClick={ ()=>{
              navigate(`/healthyeating/${recipe.id}`)
            }}>
              <OneCard key={index}>
                <CardImg variant="top" src={recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>{recipe.content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Calories: {recipe.calories}
                  </small>
                </Card.Footer>
              </OneCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllRecipes;
