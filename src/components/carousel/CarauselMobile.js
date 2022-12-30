import React from 'react'
import carousel1 from "../../assets/carousel-1.png";
import carousel2 from "../../assets/carousel-2.png";
import carousel3 from "../../assets/carousel-3.png";

const CarauselMobile = () => {
  return (
    <div className="d-block d-sm-none .d-none .d-sm-block .d-md-none">
<div id="carouselExampleSlidesOnly" className="carousel carousel-sm slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="..." />
    </div>
  </div>
</div>

    </div>
  )
}

export default CarauselMobile