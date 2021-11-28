import React from "react";
import styled from "styled-components";
import bubble from '../../img/svg/bubble.svg'
// import bubble1 from '../../img/svg/bubble1.svg'
import bubble2 from '../../img/svg/bubble2.svg'
import message from '../../img/svg/message.svg'
import family from '../../img/svg/family.svg'

function languageHeading () {
  return (
    <LanguageStyled>
      <div className="left-content">
        <div className="leftTextContainer">
          <h1>Garifuna Language</h1>
          <p >
          Garífuna language, formerly also called Black Carib language, an Arawakan language spoken by over 200,000 people in Belize, Guatemala, Honduras, and Nicaragua, and also by many who have emigrated to the United States.
          </p>
          <br />
          <p>
          The language remained basically that of the aboriginal Arawakan people, but with a men’s jargon in which Carib forms could be substituted for Arawakan equivalents, based probably on an old Carib pidgin, scarcely attested. The women’s Arawakan language did not change much over time, but the Garífuna men’s forms derived from Carib were mostly lost. That explains how Garífuna (Black Carib) can be an Arawakan language but have a name that suggests a Cariban connection. The names Carib and Garífuna are both derived from Proto-Cariban *karípona ‘native, indigenous person.
          </p>
        </div>
      </div>
      <div className="right-content">
        <img src={family} className="family" alt="family" />
        <img src={bubble2} className="bubble2" alt="thought bubble" />
        <img src={message} className="message" alt="thought bubble" />
        <img src={bubble} className="bubble" alt="thought bubble" />
      </div>
    </LanguageStyled>
  );
}

const LanguageStyled = styled.div`
  padding: 4rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    padding-bottom: 8rem;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      padding-bottom: 1.4rem;
      @media screen and (max-width: 800px){
                font-size: 2.5rem;
            }
    }
    p {
      padding-bottom: 1.4rem;
      line-height: 1.8rem;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .family {
      width: 80%;
    }
    .bubble2 {
      position: absolute;
      width: 100px;
      /* top: 5%; */
      right: 55%;
      left: auto;
      animation: move2 20s infinite;
      transition: all 0.4s ease-in-out;
    }
    .message {
      position: absolute;
      width: 135px;
      top: 0;
      right: 5%;
      left: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
    }
    .bubble {
      width: 155px;
      position: absolute;
      bottom: 45%;
      left: 60px;
      transition: all 0.4s ease-in-out;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.4s ease-in-out;
    }
  }
  /* Header Animations */
  .message{
        @keyframes move {
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2 {
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default languageHeading;
