import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

import { useState } from 'react';
import Cards from './cards';
import Footer from './footer';

function Home() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{width:'100%', height:'427px'}}          
            />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{width:'100%', height:'427px'}}
          />  
        </Carousel.Item>
        
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{width:'100%', height:'427px'}}/>
        </Carousel.Item>
      </Carousel>

      <Cards/>
      <Footer/>
      
      </>
    );
  }
  
  export default Home;