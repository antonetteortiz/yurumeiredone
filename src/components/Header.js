import React from "react";
import styled from "styled-components";
import logo from "../img/logo/yurumeifavicon.svg";

function Header() {
  return (
    <HeaderStyled>
      <a className="logo">
        <img src={logo} alt="" /> 
        
            <h1>YURUMEI</h1>
        
      </a>
      <ul className="nav-items">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">GARIFUNA CULTURE</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
        <div className="primary-btn">GET CONNECTED</div>
      {/* <div class="nav__close" id="nav-close">
        <i class="ri-close-line"></i>
      </div>
      <div class="nav__btns">
           
            <i class="ri-moon-line change-theme" id="theme-button"></i>

            <div class="nav__toggle" id="nav-toggle">
              <i class="ri-menu-line"></i>
            </div>
          </div> */}
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
      letter-spacing: .2rem;
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(255, 204, 0, 0.6);
      padding: 0.6rem 1.3rem;
      border-radius: 70px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(255, 204, 0, 1);
      }
    }
  }

  .logo {
    /* display: inline;
    width: 250px; */
    img {
      width: 60px;
    }
    h1 {
        float: right;
        letter-spacing: .2rem;
        margin-left: 2px;
    }
  }
`;

export default Header;
