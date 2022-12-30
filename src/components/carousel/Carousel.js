import React from "react";
import "./Carousel.css";
import carousel1 from "../../assets/carousel-1.png";
import carousel2 from "../../assets/carousel-2.png";
import carousel3 from "../../assets/carousel-3.png";

const Carousel = () => {
  return (
    <div className="Carousel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-arrow-left-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
      </svg>

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
          <p className="color-secandary">Portfolio</p>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-arrow-right-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
      </svg>
    </div>
  );
};

export default Carousel;
