import React from 'react';
import styled from "styled-components";
import Eigini from '../../img/features/eigini.png'

function FoodHero() {
    return (
        <FoodHeroStyled>
            <div className="image">
                <img src={Eigini} alt="" />
            </div>
        </FoodHeroStyled>
    )
}

const FoodHeroStyled = styled.div`
  .image {
    max-height: 800px;
    width: 100vw;
    img {
        width: 100vw;
        height: 800px;
        object-fit: cover;
    }
  }
`;
export default FoodHero
