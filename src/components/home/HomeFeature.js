import React from "react";
import styled from "styled-components";
import DrumsOfMyFather from "../../img/images/drums.png";

function HomeFeature() {
  return (
    <HomeFeatureStyled>
      <div className="mainContent">
        <div className="left">
          <div className="heading">
          <h1>
            Preserving our <br /> cultural legacy.
          </h1>
          </div>
          <p>
            <span className="yurumei">YURUMEI</span>, is a global community
            whose sole purpose is to promote the preservation and protection of
            the Garinagu cultural heritage. Cultural Heritage is an expression
            of the ways of living developed by a community and passed on from
            generation to generation, including customs, practices, places,
            objects, artistic expressions and values. (ICOMOS, 2002)
          </p>
          <br />
          <p>
            The word <span className="definition">yurumein</span> in the
            Garifuna language translate to our homeland in English. This online
            community serves to be a place to gather all information as it
            relates to our homeland, Yurumein.
          </p>
        </div>
        <div className="right">
          <div>
            <img src={DrumsOfMyFather} alt="Drums of my Father" />
          </div>

          <div className="home__social">
            <span className="home__social-follow">Follow Us</span>

            <div className="home__social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="home__social-link" rel="noreferrer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="home__social-link" rel="noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="home__social-link" rel="noreferrer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeFeatureStyled>
  );
}

const HomeFeatureStyled = styled.div`
  margin: 0 auto;
  width: 95%;
  height: 75%;
  background-color: #ffcc00;
  padding: 0 2rem;
  border-radius: 33px;
  .mainContent {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    height: 100%;
    width: 100%;
    padding-bottom: 5rem;
    .left {
      display: flex;
      padding-top: 6rem;
      flex-direction: column;
      .heading{
        padding-bottom: 1rem;
      }
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.5rem;
      }
      .yurumei {
        letter-spacing: 0.2rem;
        font-weight: bold;
      }
      .definition {
        font-style: italic;
      }

      .btns-con {
        margin-top: 3rem;
      }
    }
    .right {
      margin-top: 3rem;
      img {
        width: 110%;
      }
      .home__social {
        position: fixed;
        top: 20rem;
        right: -1rem;
        display: grid;
        justify-items: center;
        row-gap: 3.5rem;
      }

      .home__social-follow {
        font-weight: 500;
        font-size: 1.2rem;
        position: relative;
        transform: rotate(90deg);
      }

      .home__social-follow::after {
        content: "";
        position: absolute;
        width: 1rem;
        height: 2px;
        right: -45%;
        top: 50%;
      }

      .home__social-links {
        display: inline-flex;
        flex-direction: column;
        row-gap: 0.25rem;
      }

      .home__social-link {
        font-size: 1rem;
        transition: 0.3s;
      }

      .home__social-link:hover {
        transform: translateX(0.25rem);
      }
    }
  }
`;

export default HomeFeature;
