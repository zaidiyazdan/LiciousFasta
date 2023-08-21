import React from "react";
import ReactDOM from "react-dom/client";
import image from "../assets/img/Red Yellow Retro Food Delivery Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

// const logedUser = () => {
//     // API call to check authentication.
//     // If Sucess return true
//     return true;
// }

export const Title = () => {
  return (
    <a href="/">
      <img src={image} alt="food-logo" className="logo" />
    </a>
  );
};

const Header = (props) => {
  //function to log out
  const logOut = () => {
    setTimeout(() => {
      props.SetIsLoggedIn(false);
    }, 1000);
  };

  return (
    <div className="header">
      <Title />
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          {
            //Only js Expressions work over here.
            <button onClick={logOut}>Log Out</button>
          }
        </ul>
      </nav>
    </div>
  );
};
export default Header;
// why should we use default.
// We can export only one thing with export default;

// Another way is exporting it direct in the name. we have to use {} in it , it is called named Import
