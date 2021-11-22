import React from "react";
import styled from "styled-components";
import { InnerLayout, SectionSyled } from "../Layouts";
import features from "../FeatureSections";

function FeatureContent() {
  return (
    <FeatureContentStyled>
      <div className="title-con">
        <h1>Featured Sections</h1>
      </div>
      <div className="features">
        {features.map((features) => {
          return (
            <div className="feature" key={features.id}>
              <div className="image">
                <img src={features.image} alt="" />
              </div>
              <h5>{features.title}</h5>
              <div className="content">
                <p>{features.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </FeatureContentStyled>
  );
}

const FeatureContentStyled = styled.div`
  margin: 10% auto;
  width: 95%;
  border-radius: 33px;
  padding: 20px 0px;
  .title-con{
      text-transform: uppercase;
      letter-spacing: .2rem;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0 2rem;
    padding-top: 2rem;
    .feature {
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      flex: 0 0 calc(30% - 20px);
      background-color: #ffcc00;
      padding: 20px;
      margin: 10px;
      border-radius: 20px;
      .image {
        height: 300px;
        width: 100%;
        overflow: hidden;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        transition: all 0.4s ease-in-out;
        img {
          height: 100%;
          width: 100%;
          transition: all 0.4s ease-in-out;
          object-fit: cover;
          border-top-right-radius: 20px;
          border-top-left-radius: 20px;
          /* filter: grayscale(50%); */
          &:hover {
            transform: scale(1.2) rotate(10deg);
            /* filter: grayscale(0); */
          }
        }
      }
      h5 {
        color: white;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.3rem;
        padding: 0 35px;
        text-align: center;
        background-color: #000000;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      p {
        padding-top: 20px;
      }
      .user {
        padding-top: 0.2rem;
        padding-bottom: 1.5rem;
        display: flex;
        padding-left: 1rem;
        padding-right: 1rem;
        p:first-child {
          padding-right: 0.4rem;
          opacity: 0.5;
        }
      }
    }
  }
`;

export default FeatureContent;
