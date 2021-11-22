import React from "react";
import styled from "styled-components";

function FAQ() {
  return (
    <FAQStyled>
      <div className="faq">
        <h2 className="section__title-center questions__title container">
          Some common questions <br /> were often asked
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  What is the ethnic heritage of the Garinagu people?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                 Arawak Indian, Carib Indian and West African.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  What causes leaves to become pale?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  What causes brown crispy leaves?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  How do i choose a plant?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  How do I change the pots?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  Why are gnats flying around my plant?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FAQStyled>
  );
}

const FAQStyled = styled.div`
.faq{
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
  }

  .questions__item {
    background-color: #000000;
    color: white;
    border-radius: 0.25rem;
  }

  .questions__item-title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .questions__icon {
    font-size: 1.25rem;
    color: var(--title-color);
  }

  .questions__description {
    font-size: var(--smaller-font-size);
    padding: 0 1.25rem 1.25rem 2.5rem;
  }

  .questions__header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
  }

  .questions__content {
    overflow: hidden;
    height: 0;
  }

  .questions__item,
  .questions__header,
  .questions__item-title,
  .questions__icon,
  .questions__description,
  .questions__content {
    transition: 0.3s;
  }

  .questions__item:hover {
    box-shadow: 0 2px 8px hsla(var(--hue), 4%, 15%, 0.15);
  }

  /*Rotate icon, change color of titles and background*/
  .accordion-open .questions__header,
  .accordion-open .questions__content {
    background-color: var(--first-color);
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
export default FAQ;
