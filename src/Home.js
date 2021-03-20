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
        <div style={{display:"flex" ,flex:"inline", flexDirection:"row", }}>
        <ReactCardFlip cardZIndex="fixed" flipSpeedBackToFront="1" flipSpeedFrontToBack="1.5" containerStyle={style2} isFlipped={isFlipped} flipDirection="vertical">
        <div className="MissionCard" style={style1} onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          <h2>Our Mission</h2>
          
        </div>

        <div style={style1} onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          This is the back of the card.
          
        </div>
      </ReactCardFlip>
      <ReactCardFlip cardZIndex="fixed" flipSpeedBackToFront="1" flipSpeedFrontToBack="1.5" containerStyle={style2} isFlipped={isFlipped} flipDirection="vertical">
        <div style={style1} onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          <h2>Our Mission</h2>
          
        </div>

        <div style={style1} onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          This is the back of the card.
          
        </div>
      </ReactCardFlip>
      <ReactCardFlip cardZIndex="absolute" flipSpeedBackToFront="1" flipSpeedFrontToBack="1.5" containerStyle={style2} isFlipped={isFlipped} flipDirection="vertical">
        <div style={style1} onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          <h2>Our Mission</h2>
          
        </div>

        <div style={style1} onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          This is the back of the card.
          
        </div>
      </ReactCardFlip>  
        </div>
        <p>How does it works</p>
        </>
    )
}

export default Home
