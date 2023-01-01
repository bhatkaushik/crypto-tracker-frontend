import React from "react";
import carousel1 from "../../../assets/carousel-1.png";
import "./carouselMobile.css";

const CarauselMobile = () => {
  return (
    <div className="carousel-mobile">
      <div className="carousel-mobile-flex">
        <img
          src={carousel1}
          alt="carousel__img"
          className="carousel__img__mobile"
        />
        <div className="carousel__content__wrapper__mobile ">
          <p className="text-secondary carousel__p1__mobile">Take a quiz!</p>
          <p className="carousel__p2__mobile">Learn and earn $CKB</p>
        </div>
      </div>
      <div className="carousel__mobile__navigation">
        <div className="radio-wrapper">
          <input className="radio__flex__mobile" type="radio" />
          <input className="radio__flex__mobile" type="radio" />
          <input className="radio__flex__mobile" type="radio" />
          <input className="radio__flex__mobile" type="radio" />
        </div>
      </div>
    </div>
  );
};

export default CarauselMobile;
