import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchLogo from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt=""></img>
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchLogo" alt="" />
          <input
            className="searchInput"
            placeholder="Collection, Item or User"
          ></input>
        </div>
      </div>

      <div className="headerItems">
        <p>Drop</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwichContainer">
          <img className="themeSwitchLogo" src={themeSwitchLogo} />
        </div>
      </div>

      <div className="loginButton"> GET IN </div>
    </div>
  );
};

export default Header;
