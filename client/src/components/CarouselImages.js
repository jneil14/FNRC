import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; 
import about1 from "../assets/images/about1.JPG";
import about2 from "../assets/images/about2.JPG";

function CarouselImages() {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="about__img">
          <img
            className="d-block"
            src={about1}
            alt="office1"
          />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className="about__img">
          <img
            className="d-block"
            src={about2}
            alt="office2"
          />
        </div>

      </Carousel.Item>
      
    </Carousel>
  );



}

export default CarouselImages;
