import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import basket from "../../assets/basket-icon.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="navbar__left">
            <h1>UI.desk</h1>
          </div>

          <div className="navbar__center">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Testimionals</a></li>
            </ul>
          </div>

          <div className="navbar__right">
            <img src={searchIcon} alt="Search Icon" />
            <img src={basket} alt="Basket Icon" />
            <button className="btn__nav">Order Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
