import React from 'react'
import poorppl from './Assets/poorppl.jpg'
import childpic from './Assets/shravan-k-acharya-cuStP_i-xPg-unsplash.jpg'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'
import stetho from './Assets/pina-messina-iIDiRMITYik-unsplash.jpg'
import villagepic from './Assets/theodore-goutas-aeq3jJj0sUw-unsplash.jpg'
function CarouselComponent() {
    return (
        
        <div>
                
            <Carousel  controls={false} fade={true} wrap={true}  >
            
             <Carousel.Item interval={3000}>
      <div className="active">
    <img
      className="imgclass"
      src={villagepic}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      {/* <h3 style={{color:"green"}}>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      width="100%"
      height="20%"
      className="imgclass"
      src={childpic}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3 style={{color:"green"}}>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000} >
    <img
      className="imgclass"
      src={stetho}
      
    />

    <Carousel.Caption>
      {/* <h3 style={{color:"green"}}>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselComponent
