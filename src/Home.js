import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import Header from './Header'
import './Home.css'
import hospitalpic from './alex-mecl-oj6nOfh9Obo-unsplash.jpg'
import ReactCardFlip from 'react-card-flip';

const style1={
  marginLeft:"5px",
   color:"black",
  
   shadow:"5px",
    borderRadius:"30px",
     width: '31rem' ,
     padding:"3px",
      height:'300px',
      backgroundColor:"#fedebe",
    boxShadow:"1px 1px 2px 1px rgb(206,101,153)",
    pointer:"cursor",
}
const style2={
  marginLeft:"5px",
   color:"white",
   backgroundColor: "#E7717D",
   shadow:"5px",
    borderRadius:"30px",
     width: '33rem' ,
      height:'300px',
      backgroundColor: "#36096D",
      backgroundImage: "linear-gradient(315deg, #36096d 0%, #37d5d6 74%)",


}
function Home() {
  const [isFlipped,setIsFlipped]=useState(false);  

  const handleClick=(e)=>{
    e.preventDefault();
    setIsFlipped(!isFlipped)
  };
    return (
        <>
       
        <NavbarComponent/>
        
        <CarouselComponent/>
        <Header/>
        <div className="midtext">
        <p>Donate Medical supplies to save the life of a poor.</p>
        </div>
        <div className="quote">
          <p>"Health Cannot be a question of income , it is a fundamental human right"<sub>-Nelson Mandela</sub></p>
        </div>
<br/><br/>

       <div class="card text-center cardss">
  
  <div class="card-body">
    <h2 class="card-title" class="lined">ABOUT US</h2>
    <p class="card-text">Founded in 2021, TheCrutch an online fundraising platform that connects communities providing a tool for hospitals and NGO's to formalize their fundraising efforts and a channel for funders to find hospitals they wish to support.

Our team is young, diverse, and passionate about healthcare. We believe that access to good hospital equipments should not be dependent on wealth.</p>
    
  </div>
  
</div><br/>

<div class="card text-center cardss">
  
  <div class="card-body">
    <h2 class="card-title" class="lined">OUR SERVICES</h2>
    <p class="card-text">We know that you care about how effectively your donation is being used. That’s why we show you how every rupee was spent, how you made a difference, and how grateful the hospitals are in which your equipments were donated!</p>
    
  </div>
  
</div>
<br/>
<div class="card text-center cardss">
  
  <div class="card-body">
    <h2 class="card-title" class="lined">HOW IT WORKS</h2>
    <p class="card-text">To ensure integrity, we’re there through every step of every project. We vet all requests, purchase each item, and ship materials directly to verified locations using leading e-commerce platforms or other NGO services</p>
    
  </div>
  
</div>
        
        </>
    )
}

export default Home

