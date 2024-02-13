import React from "react";
import card1 from "../../assets/orderCard1.svg";
import card2 from "../../assets/orderCard2.svg";
import card3 from "../../assets/orderCard3.svg";
import "../../index.css";

const Hero = () => {
  return (
    <div className="containerChild">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title">
            Just <span className="spanner">Eat healthy</span> food to live a
            healthier life
          </h1>
          <p className="hero__subtitle">
            Enjoy a healthy life by eating healthy foods that have extraordinary
            flavors that make your life healthier for today and in the future
          </p>
          <button className="btn__hero">Order Now</button>
        </div>
      </div>

      <div className="why__choose">
        <h1 className="text-center">Why Choose US?</h1>
        <p className="text-center">
          Organic food is grown without the use of synthetic chemicals
        </p>

        <div className="why__cards flex">
          <img src={card1} alt="Card" />
          <img src={card2} alt="Card" />
          <img src={card3} alt="Card" />
        </div>

        <div className="why__stats flex">
          <div className="stat">
            <h2>40+</h2>
            <h4>Food Partners</h4>
          </div>

          <div className="stat">
            <h2>459+</h2>
            <h4>Trusted Clients</h4>
          </div>

          <div className="stat">
            <h2>12k+</h2>
            <h4>Order Online</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
