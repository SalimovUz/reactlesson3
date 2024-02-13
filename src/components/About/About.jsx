import React from "react";
import about from "../../assets/about.svg";
import vegetables from "../../assets/vegetables.svg";
import cooker from "../../assets/cooker.svg";

const About = () => {
  return (
    <div className="containerChild">
      <div className="about flex">
        <div className="about__left">
          <h1>About US</h1>

          <p>
            Organic food is grown without the use of synthetic chemicals, such
            as human-made pesticides and fertilizers, and does not contain
            genetically modified organisms (GMOs). Organic foods include fresh
            produce, meats, and dairy products as well as processed foods such
            as crackers, drinks, and frozen meals.
          </p>

          <button>Learn More</button>
        </div>

        <div className="about__right">
          <img src={about} alt="LeftImg" />
        </div>
      </div>

      <div className="vegetables flex">
        <div className="vegetables__left">
          <img src={vegetables} alt="Vegetable Img" />
        </div>

        <div className="vegetables__right">
          <h1>Fresh Vegetables Every Day</h1>

          <p>
            Healthy life as informed declared we enjoy the margaret. Joy
            horrible moreover man feelings own shy. Request norland neither
            mistake for yet. Between the for morning assured country believe.
          </p>

          <button>Learn More</button>
        </div>
      </div>

      <div className="cooker flex gap-2">
        <div className="cooker__left">
          <h1>Cooker by the Best Chefs</h1>

          <p>
            Believing neglected so so allowance existence departure in. In
            design active temper be uneasy. Thirty for remove plenty regard you
            summer though. He preference connection astonished on of ye.
          </p>

          <label form="checked" className="checked flex gap-3 my-4">
            <input checked type="checkbox" name="Checked" id="checked" />

            <h4>A guaranteed delicious meal</h4>
          </label>

          <label form="checked" className="checked flex gap-3 my-4">
            <input checked type="checkbox" name="Checked" id="checked" />

            <h4>A guaranteed delicious meal</h4>
          </label>

          <label form="checked" className="checked flex gap-3 my-4">
            <input checked type="checkbox" name="Checked" id="checked" />

            <h4>A guaranteed delicious meal</h4>
          </label>
        </div>

        <div className="cooker__right">
          <img src={cooker} alt="Cooker-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
