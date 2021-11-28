import React from "react";
import AOS from "aos";
import styled from "styled-components";
import GarifunaWomen from "../img/images/seniorgariwomen.png";
import Dugu from "../img/features/dugu.jpg";
import Jankunu from '../img/features/jankunu.jpg'

AOS.init();

function Traditions() {
  return (
    <TraditionsStyled>
      <div className="container">
        <div className="columnLeft">
          <img
            src={GarifunaWomen}
            alt="Garifuna Women"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-once="true"
            // data-aos-delay={delay}
            data-aos-anchor-placement="center bottom"
          />
        </div>
        <div className="columnRight">
          <h1>Garifuna World View</h1>
          <p>
            Within the Garifuna world view the maintenance of a harmonious
            relationship with the ancestors and members of kin is crucial.
            Reciprocity in relationships are vital and this is sustained even
            after a person dies. This interdependent relationship is rooted in
            the notion of "Au Bu Amuru Nu" which translates to "You for me and I
            for you".
          </p>
          <br />
          <p>
            The Garinagu view the ancestors as a link to those who are living, a
            way to forge bonds and maintain harmonious relationships among
            family members. If this sense of harmony is not intact between
            family members, an ancestor requests a Dugu healing ceremony. This
            request oftentimes comes through the dreams of a living relative.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="columnLeft">
          <div className="text">
            <h1>Dugu</h1>
            <p>
              A Dugu is performed following a request made by a deceased
              ancestor. Ancestors commmunicate multiple messages to relatives
              through dreams about their desire and expecations for the
              celebrations. If the request is left unheeded, a family may
              experience a series of misfortunes including sickness or death,
              until Dugu preparations begin..
            </p>
            <br />
            <p>
              For one week, family members of all ages and from all over Central
              and North America and Europe gather for the healing ritual. The
              most sacared of the ancestral rituals, the Dugu ceremony includes
              food, traditional music and dancing.
            </p>
          </div>
        </div>
        <div className="columnRight">
          <img
            src={Dugu}
            alt="Dugu"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-once="true"
            // data-aos-delay={delay}
            data-aos-anchor-placement="center bottom"
          />
        </div>

        {/* <div className="container">
          <div className="columnLeft">
            <img
              src={Jankunu}
              alt="Garifuna Women"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              // data-aos-delay={delay}
              data-aos-anchor-placement="center bottom"
            />
          </div>
          <div className="columnRight">
              <div className="text">
            <h1>Garifuna World View</h1>
            <p>
              Within the Garifuna world view the maintenance of a harmonious
              relationship with the ancestors and members of kin is crucial.
              Reciprocity in relationships are vital and this is sustained even
              after a person dies. This interdependent relationship is rooted in
              the notion of "Au Bu Amuru Nu" which translates to "You for me and
              I for you".
            </p>
            <br />
            <p>
              The Garinagu view the ancestors as a link to those who are living,
              a way to forge bonds and maintain harmonious relationships among
              family members. If this sense of harmony is not intact between
              family members, an ancestor requests a Dugu healing ceremony. This
              request oftentimes comes through the dreams of a living relative.
            </p>
              </div>
          </div>
        </div> */}
      </div>
    </TraditionsStyled>
  );
}

const TraditionsStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  .container {
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .columnLeft {
      padding: 1rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 768px) {
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width: 768px) {
          width: 90%;
          height: 90%;
        }
      }
    }
    .columnRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      line-height: 1.4;
      padding: 1rem 2rem;
      h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
      }
      p {
        margin-bottom: 2rem;
      }
    }
  }
`;
export default Traditions;
