import React from 'react';
import {Carousel} from  'react-bootstrap';
import image1 from '../assets/images/hamburger.jpeg'
import image2 from '../assets/images/hamburger2.jpeg'
import image3 from '../assets/images/cake1.jpeg'


const CarouselContainer = () => {
    return ( <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> );
}
 
export default CarouselContainer;