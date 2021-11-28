import React from "react";
import styled from "styled-components";
import Phrases from "./Phrases";
// import PhrasesBackground from '../../img/features/phrasesbackground.png'

function CommonPhrases() {
  return (
    <CommonPhrasesStyled>
      <div className="phrasesContainer">
        <div className="leftContainer">
          <h1 className="text">Common Garifuna Phrases and Expressions </h1>
          <Phrases />
        </div>
        
      </div>
    </CommonPhrasesStyled>
  );
}

const CommonPhrasesStyled = styled.div`
  padding: 4rem 10rem;
  border: 5px solid green;
  /* background-image: url(../../img/features/phrasesbackground.png); */
  .phrasesContainer {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: center;
  }
`;

export default CommonPhrases;
