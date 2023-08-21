import React, { useState } from 'react';
import css from './Slider.module.css'
import { Carousel, Card, Button } from 'react-bootstrap';
import product1 from '../Images/img1.png'
import product2 from '../Images/img2.png'
import product3 from '../images/img3.png'

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  }
  return (
    <div className="container my-3">  
    <div className='row'>
     <div className='col-2' style={{position:"relative"}}>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     </div>
     <div className='col-8' style={{ overflow: 'hidden'}}>
         <div id="carouselExample" className="carousel slide">
     <div className="carousel-inner">
       <div className={`${css.carouselItem} carousel-item active`}>
       <div className={`${css.cardcontainer} card-container`}>
       <Card className={`${css.cardcenter} ${css.responsiveCard}`} >
               {/* Card Content */}
               <Card.Body>
  <div className="row">
    <div className='col-4'>
           <Card.Title className='fw-bold'>SKIN</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">Super Skin Care</Card.Subtitle>
           <h2>
           30$
        </h2>
        <Card.Link href="#"><button className={css.button}> Button
</button></Card.Link>
</div>
<div className='col-8'>
  <img src={product1} alt="product1" className={`${css.productImage} ${css.rotatedImage}`}/> 
</div>
</div>
      </Card.Body>
      </Card>
      </div>  
    </div>
    <div className={`${css.carouselItem} carousel-item`}>
    <div className={`${css.cardcontainer} card-container`}>
    <Card  className={`${css.cardcenter} ${css.responsiveCard}`}>
            {/* Card Content */}
            <Card.Body>
            <div className="row">
    <div className='col-4'>
        <Card.Title>SKIN</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Super Skin Care</Card.Subtitle>
        <h2>
           35$
        </h2>
        <Card.Link href="#"><button className={css.button}> Button
</button></Card.Link>
</div>
<div className='col-8'>
  <img src={product2} alt="product2" className={`${css.productImage} ${css.rotatedImage}`}/>
</div>
</div>

      </Card.Body>
          </Card>
          </div>
    </div>
    <div className={`${css.carouselItem} carousel-item`}>
    <div className={`${css.cardcontainer} card-container`}>
    <Card  className={`${css.cardcenter} ${css.responsiveCard}`}>
            {/* Card Content */}
            <Card.Body>
            <div className="row">
    <div className='col-4'>
        <Card.Title>NATURE</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Super Skin Care</Card.Subtitle>
        <h2>
           25$
        </h2>
          <Card.Link href="#"><button className={css.button}> Button
</button></Card.Link>
        </div>
        <div className='col-8'>  
  <img src={product3} alt="product3" className={`${css.productImage} ${css.rotatedImage}`}/>
</div>
</div>
      </Card.Body>
          </Card>
          </div>
    </div>
  </div>
  </div>
</div>
<div className='col-2' style={{position:"relative"}}>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div >
     </div >
  );
}

export default Slider;
