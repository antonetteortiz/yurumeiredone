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
        YURUMEI
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
        /* background-color: rgba(255, 204, 0, 1); */
        text-decoration: underline;
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
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Nav;


// .container {
//     border-bottom: 2px solid #000000;
//     display: flex;
//     height: 200px;
//     width: 100%;
// }
// .child {
//     align-self: flex-end;
//     width: 100px;
//     height: 100px;
//     background: #FFB6C1;
//     animation-duration: 2s;
//     animation-iteration-count: infinite;
//     transform-origin: bottom;
// }
// .bounce:hover {
//     animation-name: bounce;
//     animation-timing-function: ease;
// }
// @keyframes bounce {
//   0%   { transform: translateY(0); }
//   50%  { transform: translateY(-100px); }
//   100% { transform: translateY(0); }
// }