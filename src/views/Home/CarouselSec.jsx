import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/image4.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image1.jpg";
import { Image } from "./style";

const CarouselSec = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Walkers Ireland</h3>
            <p>
              Welcome to Walkers Ireland, where we are dedicated to helping you
              achieve your health and fitness goals. Our goal is to provide you
              with comprehensive information and valuable resources that will
              enable you to lead a healthier and more active lifestyle.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
          <h3>Walkers Ireland</h3>
            <p>
              Welcome to Walkers Ireland, where we are dedicated to helping you
              achieve your health and fitness goals. Our goal is to provide you
              with comprehensive information and valuable resources that will
              enable you to lead a healthier and more active lifestyle.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
          <h3>Walkers Ireland</h3>
            <p>
              Welcome to Walkers Ireland, where we are dedicated to helping you
              achieve your health and fitness goals. Our goal is to provide you
              with comprehensive information and valuable resources that will
              enable you to lead a healthier and more active lifestyle.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSec;
