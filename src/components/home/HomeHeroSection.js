import React from "react";
import styled from "styled-components";
import Yurumein from "../../img/images/commerce.jpg";

function HomeHeroSection() {
  return (
    <HomeHeroSectionStyled>
      <div className="heroContainer">
        <img src={Yurumein} alt="" />
        <div className="bottomLeft">
          <h1>Preserving our cultural legacy</h1>
          <button>
            Garifuna Culture{" "}
            <i className="ri-arrow-right-up-line button__icon" />
          </button>
          <button>
            FAQ's <i className="ri-arrow-right-up-line button__icon" />
          </button>
        </div>
      </div>
    </HomeHeroSectionStyled>
  );
}

const HomeHeroSectionStyled = styled.section`
  display: flex;
  padding: 0rem 1rem;
  img {
      width: 100%;
      height: 100%;
  }
  .heroContainer {
      position: relative;
      text-align: left;
      /* color: #ffcc00; */
      color: white;
  }
  .bottomLeft {
    border: 2px solid red;
    position: absolute;
    bottom: 50px;
    left: 16px;
    h1 {
        font-size: 5rem;
      }
    button {
        background-color: black;
        color: #ffcc00;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
        transition: 0.3s;
        margin-right: 1.5rem;
        cursor: pointer;
        border: none;
        outline: none;
        .button__icon {
          padding-left: 10px;
        }
      }
  }
 
`;

export default HomeHeroSection;
