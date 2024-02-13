import dish1 from "../../assets/dish1.svg";
import dish2 from "../../assets/dish2.svg";
import dish3 from "../../assets/dish3.svg";
import client1 from "../../assets/avatar-left.svg";
import client2 from "../../assets/avatar-right.svg";
import vergul from "../../assets/vergul.svg";
import arrow from "../../assets/Arrows.svg";
import Hero from "../Hero/Hero";

const Main = () => {
  return (
    <header>
      <div className="containerChild">
        <div className="dishes">
          <h1>Special dishes for you</h1>
          <p>Made with premium & 100% organic ingredients</p>

          <div className="dishes__menu">
            <div className="dishes__menu-card">
              <img src={dish1} alt="Dish one" />

              <h2>Green Salad</h2>

              <h4>
                A salad combined witha delicious cut of bacon and mixed with
                tasty and fresh sesome oil.
              </h4>
            </div>

            <div className="dishes__menu-card">
              <img src={dish2} alt="Dish one" />

              <h2>Beef Salad</h2>

              <h4>
                A salad combined witha delicious cut of bacon and mixed with
                tasty and fresh sesome oil.
              </h4>
            </div>

            <div className="dishes__menu-card">
              <img src={dish3} alt="Dish one" />

              <h2>Nut Salad</h2>

              <h4>
                A salad combined witha delicious cut of bacon and mixed with
                tasty and fresh sesome oil.
              </h4>
            </div>
          </div>

          <button className="btn__dishes">View All</button>
        </div>
      </div>
      <div className="big__container">
        <div className="containerChild">
          <div className="clients__section">
            <h1>Happy Clients Says</h1>

            <div className="clients">
              <div className="client">
                <div className="client__avatar">
                  <img src={client1} alt="Client1" />

                  <div className="client__name">
                    <h2>Salimov To'lqin</h2>
                    <h3>CEO of UI.Desk</h3>
                  </div>

                  <img src={vergul} alt="Client2" />
                </div>

                <p>
                  Thirty for remove plenty regard you summer though. He
                  preference Partiality on or continuing in particular
                  principles as. Do believing oh disposing to supported
                  allowance we.
                </p>
              </div>

              <div className="client">
                <div className="client__avatar">
                  <img src={client2} alt="Client1" />

                  <div className="client__name">
                    <h2>RegoDev</h2>
                    <h3>CEO of UI Box</h3>
                  </div>

                  <img src={vergul} alt="Client2" />
                </div>

                <p>
                  Really boy law county she unable her sister. Feet you off its
                  like like six. Among sex are leave law built now. In built
                  table in an rapid blush. Merits behind on afraid or warmly.
                </p>
              </div>
            </div>

            <img className="arrow" src={arrow} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
