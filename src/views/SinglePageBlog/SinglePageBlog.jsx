import React from "react";
import {
  Title,
  Image,
  ImageContainer,
  Content,
  Author,
  BlogContainer,
  Info,
} from "./style";
import test from "../../assets/test.jpg";

const SinglePageBlog = () => {
  return (
    <BlogContainer>
      <Title>Title</Title>
      <Author>By: Maarij Khan <Info>Dated: 07-07-2002</Info></Author>
      <Image src={test} alt="" />
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla
        possimus esse, nihil dignissimos reiciendis voluptatum accusamus quia?
        Vel officiis reprehenderit, magnam repudiandae nostrum doloremque
        temporibus neque consequatur quas cumque nemo incidunt beatae fugit
        suscipit, praesentium placeat velit nam deserunt. Velit voluptatum, quis
        odit soluta quibusdam ratione quod, placeat perspiciatis odio aliquid
        facere et optio. Ipsa voluptates impedit dolore quo recusandae. Quo sunt
        nulla tenetur perspiciatis laborum, non deserunt modi eveniet eum
        tempore distinctio quaerat consectetur earum animi veniam dolore itaque
        consequuntur optio repudiandae sed soluta labore reprehenderit
        accusantium exercitationem. Magni sapiente perferendis tempore. Debitis
        praesentium ea quaerat ratione autem facilis dolores quibusdam adipisci
        a illum magnam cupiditate soluta alias cumque deserunt, fuga doloribus
        ipsa quod laboriosam voluptas eos! Sunt aliquid nobis commodi ipsum
        quisquam reprehenderit at ut, quod, iste deserunt sequi fugiat ullam
        impedit. Numquam magnam nemo eaque nisi non dicta illum repellendus modi
        recusandae, exercitationem ullam voluptates laborum, placeat hic facere
        quo aliquid? Temporibus veniam rem rerum enim aspernatur libero?
        Exercitationem dignissimos recusandae porro minus ad, aspernatur
        voluptate dicta, nesciunt perspiciatis incidunt facilis, praesentium
        consectetur totam accusamus maiores corrupti iste vitae assumenda iure.
        Tempore adipisci a ipsam ratione quidem voluptate, fugiat dolores
        nesciunt illum vero fugit itaque, sapiente amet harum tenetur possimus
        exercitationem facere, maxime reprehenderit asperiores aliquam
        voluptatibus. Molestiae, cupiditate ullam! Exercitationem quam et, iure
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
    </BlogContainer>
  );
};

export default SinglePageBlog;
