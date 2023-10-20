
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/esm/Container';


function SlickSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      
        return (
            <Container>
            <Slider {...settings}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 4</div>
            <div>Slide 3</div>
            <div>Slide 3</div>
            <div>Slide 3</div>
            <div>Slide 3</div>
            <div>Slide 3</div>
          </Slider>
          </Container>
    
  )
}

export default SlickSlider
