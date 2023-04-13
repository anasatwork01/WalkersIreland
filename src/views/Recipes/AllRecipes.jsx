import React, { useEffect, useState } from "react";
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
import axios from "axios";

const AllRecipes = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [filter, setFilter] = useState("");

  const filterHandler =(data)=>{
    console.log(data);
    setFilter(data);
  }

  

  useEffect(() => {
    async function getAllMeals() {
      try {
        const res = await axios.get(`http://localhost:8800/api/v1/meals?${filter?`kind=${filter}`:""}`);
        setAllMeals(res.data);
        return res;
      } catch (err) {
        alert(err);
      }
    }
    getAllMeals();
  }, [filter]);

  

  const navigate = useNavigate();
  return (
    <div>
      <RecipesHeader filterHandler={filterHandler}/>

      <Container>
        <Row>
          {allMeals.map((meal, index) => (
            <Col key={meal._id} xs={12} md={6} lg={4} onClick={ ()=>{
              navigate(`/healthyeating/${meal._id}`)
            }}>
              <OneCard key={index}>
                <CardImg variant="top" src={`http://localhost:8800/${meal.photo}`} />
                <Card.Body>
                  <Card.Title>{meal.name}</Card.Title>
                  <Card.Text>{`${meal.calories} calaries per serving`}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                     {meal.kind}
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
