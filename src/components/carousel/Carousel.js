import React from 'react'
import './Carousel.css'
import carousel1 from '../../assets/carousel-1.png'
import carousel2 from '../../assets/carousel-2.png'
import carousel3 from '../../assets/carousel-3.png'



const Carousel = () => {
  return (
    <div className='Carousel'>
        <div className="carouselItem carouselItem1">
            <img src={carousel1} alt="carousel-img" className="carousel-img" />
            <div className="carousel-content-wrapper">
                <p className="color-secandary">Take a quiz!</p>
                <p className="font-weight-bold h5">Learn and earn $CKB</p>
            </div>
        </div>
        <div className="carouselItem carouselItem2">
            <img src={carousel2} alt="carousel-img" className="carousel-img" />
            <div className="carousel-content-wrapper">
                <p className="color-secandary">Portfolio 
              
                </p>
                <p className="font-weight-bold h5">
                    Track your trades in one place, not all over the place
                </p>
            </div>
        </div>
        <div className="carouselItem carouselItem3">
            <img src={carousel3} alt="carousel-img" className="carousel-img" />
            <div className="carousel-content-wrapper">
                <p className="color-secandary">Portfolio</p>
                    Track your trades in one place, not all over the place
                <p className="font-weight-bold h5"></p>
            </div>
        </div>
    </div>
  )
}

export default Carousel