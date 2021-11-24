import React from "react";
import styled from "styled-components";
import FAQQuestions from "../FAQQuestions";
import { InnerLayout } from "../Layouts";
import FAQ from "./FAQ";

function Questions() {


  // const accordionItems = document.querySelectorAll(".questions__item");

  // accordionItems.forEach((item) => {
  //   const accordionHeader = item.querySelector(".questions__header");

  //   accordionHeader.OnClick={(event)=>{
  //     console.log('On click')
  //   }}

    // accordionHeader.OnClick={(e) => {
    //   const openItem = document.querySelector(".accordion-open");

    //   toggleItem(e);

    //   if (openItem && openItem !== item) {
    //     toggleItem(openItem);
    //   }
    // }}

  // });

  // const toggleItem = (item) => {
  //   const accordionContent = item.querySelector(".questions__content");

  //   if (item.classList.contains("accordion-open")) {
  //     accordionContent.removeAttribute("style");
  //     item.classList.remove("accordion-open");
  //   } else {
  //     accordionContent.style.height = accordionContent.scrollHeight + "px";
  //     item.classList.add("accordion-open");
  //   }
  // };

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
