/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../img/logo/yurumeifavicon.svg";

function Nav() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  const subMenu = (
    <ul
      ref={dropdownRef}
      className={`menu ${isActive ? "active" : "inactive"}`}
    >
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

const HeaderStyled = styled.div`
  font-family: "Poppins", sans-serif;
  height: 90px;
  margin: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    letter-spacing: 0.5rem;
    margin-top: 5px;
    padding: 0.2rem 0.6rem;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    :hover {
      animation-name: bounce;
      -moz-animation-name: bounce;
      animation-timing-function: ease;
    }
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
    img {
      width: 60px;
    }
    h1 {
      float: right;
      padding-left: 5px;
      font-family: "Poppins", serif;
    }
  }
  .nav-items {
    display: inline-flex;
    text-align: right;
    /* position: relative; */
    li {
      font-family: "Poppins", serif;
      margin-right: 0.8rem;
      letter-spacing: 0.2rem;
      padding: 0.2rem 0.6rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      .menu-item {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .menu {
      visibility: hidden;
    }
    .menu.active {
      opacity: 0.8;
      visibility: visible;
      transform: translateY(0);
      text-decoration: none;
      position: absolute;
      text-align: left;
      background-color: black;
      color: white;
    }
  }
`;

export default Nav;

