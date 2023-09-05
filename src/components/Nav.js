/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../img/logo/yurumeifavicon.svg";
import './Nav.css';

function Nav() {
const [isMenu, setisMenu] = useState(false);
const toggleClass = () => {
  setisMenu(isMenu === false ? true : false);
};
let boxClass = ["main-menu menu-right menuq1"];
if(isMenu) {
  boxClass.push('menuq2');
}else{
  boxClass.push('');
}
const subMenu = (
  <ul className={boxClass.join(' ')}>
    <li className="menu-item">
      <a href="/food">FOOD</a>
    </li>
    <li className="menu-item">
      <a href="/history">HISTORY</a>
    </li>
    <li className="menu-item">
      <a href="/language">LANGUAGE</a>
    </li>
    <li className="menu-item">
      <a href="/music">MUSIC</a>
    </li>
    <li className="menu-item">
      <a href="/traditions">TRADITIONS</a>
    </li>
  </ul>
);

  return (
    <HeaderStyled>
      <div className="logo" href="/">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <h1>
          <a href="/">YURUMEI</a>
        </h1>
      </div>

      <ul className="nav-items">
        <li >
          <a href="/" className="menu-item">
            HOME
          </a>
        </li>
        <li>
          <a href="#" className="menu-item">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/faq" className="menu-item">
            FAQs
          </a>
        </li>
        <li onClick={onClick}>
          GARIFUNA CULTURE
          {isActive ? <FiChevronUp /> : <FiChevronDown />}
          {isActive ? subMenu : null}
        </li>
        <li>
          <a href="#contact" className="menu-item">
            CONTACT US
          </a>
        </li>
      </ul>
    </HeaderStyled>
  );
}

const HeaderStyled = 'header-styled';

export default Nav;

