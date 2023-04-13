import React, { useEffect, useState } from "react";
import {
  Title,
  Image,
  ImageContainer,
  Content,
  Calories,
  BlogContainer,
  Info,
  Ingredient,
  Heading,
} from "./style";
import test from "../../assets/test.jpg";
import { useParams } from "react-router";
import axios from "axios";

const SinglePageRecipe = () => {
  const [meal, setMeal] = useState({
    name:"",
    photo:"",
    calories:"",
    ingredients:[],
    recipe:"",
    benefits:"",
    kind:""
  });

  const {id} = useParams();

  console.log(id);

  useEffect(() => {
    async function getMeal() {
      try {
        console.log("in function")
        const res = await axios.get(`http://localhost:8800/api/v1/meals/${id}`);
        setMeal(res.data);
        return res;
      } catch (err) {
        alert(err);
      }
    }
    getMeal();
  }, [id]);
  return (
    <BlogContainer>
      <Title>{meal.name}</Title>
      <Calories>{meal.calories} Calories per servings</Calories>
      <div>
        <Image src={`http://localhost:8800/${meal.photo}`} alt="" />
      </div>
      <Heading>Ingredients</Heading>
      <Ingredient>
        <ul>
          {
            meal.ingredients.map((ingridient)=><li>{ingridient}</li>)
          }
        </ul>
      </Ingredient>

      <Heading>Recipe</Heading>
      <Content>
        {meal.recipe}
      </Content>

      <Heading>Benefits</Heading>
      <Content>
        {meal.benefits}
      </Content>
    </BlogContainer>
  );
};

export default SinglePageRecipe;
