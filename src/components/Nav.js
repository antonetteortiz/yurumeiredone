/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import logo from "../img/logo/yurumeifavicon.svg";

function Nav() {
  return (
    <HeaderStyled>
      <a className="logo" href="/">
        <img src={logo} alt="" />

        <h1>
          {" "}
          <a href="/">YURUMEI</a>
        </h1>
      </a>
      <ul className="nav-items">
        <li>
          <a href="/">HOME</a>
        </li>
        {/* <li>
          <a href="#">ABOUT</a>
        </li> */}
        <li>
          <a href="/faq">FAQs</a>
        </li>
        <li>
          <a href="#">GARIFUNA CULTURE</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
      </ul>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  min-height: 10vh;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
      letter-spacing: 0.2rem;
      padding: 0.2rem 0.6rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(255, 204, 0, 1);
      }
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(255, 204, 0, 0.6);
    }
  }

  .logo {
    /* display: inline;
    width: 250px; */
    letter-spacing: 0.5rem;
    margin-top: 5px;
    padding: 0.2rem 0.6rem;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 204, 0, 1);
    }
    img {
      width: 60px;
    }
    h1 {
      float: right;
      padding-left: 5px;
    }
  }
`;

export default Nav;
