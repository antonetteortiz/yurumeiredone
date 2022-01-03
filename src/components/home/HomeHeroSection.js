import React from "react";
import styled from "styled-components";
import Yurumein from "../../img/images/commerce.jpg";

function HomeHeroSection() {
  return (
    <HomeHeroSectionStyled>
      <div className="heroImage">
        <div className="heroText">
          <h1>Preserving our cultural legacy</h1>
          <button>Garifuna Culture</button>
          <button>FAQ's</button>
        </div>
      </div>
    </HomeHeroSectionStyled>
  );
}

const HomeHeroSectionStyled = styled.section`
  display: flex;
  padding: 0rem 1rem;
  .heroImage {
    border: 2px solid red;
    background-image: url(${Yurumein});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
  }
  .heroText {
    
  }
`;

export default HomeHeroSection;
