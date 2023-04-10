import React from "react";
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

const SinglePageRecipe = () => {
  return (
    <BlogContainer>
      <Title>Recipe Name</Title>
      <Calories>Calories: 100</Calories>
      <div>
        <Image src={test} alt="" />
      </div>
      <Heading>Ingredients</Heading>
      <Ingredient>
        <ul>
          <li>Onion</li>
          <li>Onion</li>
          <li>Onion</li>
        </ul>
      </Ingredient>

      <Heading>Recipe</Heading>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla
        possimus esse, nihil dignissimosandae porro minus ad, aspernatur
        voluptate dicta, nesciunt perspiciatis incidunt facilis, praesentium
        consectetur totam accusamus maiores corrupti iste vitae assumenda iure.
        Tempore adipisci a ipsam ratione quidem voluptate, fionem quam et, iure
        iste facilis, eum eaque cum laudantium ut doloremque, suscipit illo
        eligendi sed. Voluptatem est vel quo reprehenderit vitae expedita harum
        voluptas, quasi aut repudiandae officiis nam sequi unde obcaecati iure
        omnis rerum distinctio repellat voluptatibus doloribus corporis placeat
        minima? Debitis delectus asperiores repudiandae officiis facere
        perferendis dicta autem laudantium magnam accusantium? Harum culpa,
        alias commodi maxime ex, esse, reprehenderit et earum dolor molestias
        dolores? Vero nobis eum et voluptatem autem quos corporis dolore
        molestias laudantium provident, veniam nihil labore dicta expedita eos?
      </Content>

      <Heading>Benefits</Heading>
      <Content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis
        at a exercitationem, dolorem modi, iusto iure harum eum fugiat id nobis
        vero, laborum corporis dolorum nam in assumenda? Doloremque! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Nisi debitis at a
        exercitationem, dolorem modi, iusto iure harum eum fugiat id nobis vero,
        laborum corporis dolorum nam in assumenda? Doloremque! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Nisi debitis at a
        exercitationem, dolorem modi, iusto iure harum eum fugiat id nobis vero,
        laborum corporis dolorum nam in assumenda? Doloremque! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Nisi debitis at a
        exercitationem, dolorem modi, iusto iure harum eum fugiat id nobis vero,
        laborum corporis dolorum nam in assumenda? Doloremque!
      </Content>
    </BlogContainer>
  );
};

export default SinglePageRecipe;
