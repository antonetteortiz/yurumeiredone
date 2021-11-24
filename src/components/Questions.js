import React from "react";
import styled from "styled-components";
import FAQQuestions from "../FAQQuestions";
import { InnerLayout } from "../Layouts";
import FAQ from "./FAQ";

function Questions() {
  return (
    <FAQStyled>
      <InnerLayout>
        <div className="faq">
          <h2 className="section__title-center questions__title container">
            SOME FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="questions__container container grid">
            <div className="questions__group">
              {FAQQuestions.map((FAQQuestion) => {
                return (
                 <FAQ question={FAQQuestion} key={FAQQuestion.id} />
                );
              })}
            </div>
          </div>
        </div>
      </InnerLayout>
    </FAQStyled>
  );
}

const FAQStyled = styled.div`
  .faq {
    margin: 0;

    .questions {
      background-color: #fafafa;
    }

    .questions__container {
      gap: 1.5rem;
      padding: 1.5rem 0;
    }

    .questions__group {
      display: grid;
      row-gap: 1.5rem;
      padding-top: 1.5rem 0;
    }

    

    /*Rotate icon, change color of titles and background*/
    .accordion-open .questions__header,
    .accordion-open .questions__content {
      background-color: #ffcc00;
    }

    .accordion-open .questions__item-title,
    .accordion-open .questions__description,
    .accordion-open .questions__icon {
      color: #fff;
    }

    .accordion-open .questions__icon {
      transform: rotate(45deg);
    }
  }
`;
export default Questions;
