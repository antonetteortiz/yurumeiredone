import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

function FAQ() {
  const accordionItems = document.querySelectorAll(".questions__item");

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions__header");

    accordionHeader.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-open");

      toggleItem(item);

      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });

  const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions__content");

    if (item.classList.contains("accordion-open")) {
      accordionContent.removeAttribute("style");
      item.classList.remove("accordion-open");
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
    }
  };
  
  return (
    <FAQStyled>
      <InnerLayout>
        <div className="faq">
          <h2 className="section__title-center questions__title container">
            SOME FREQUENTLY ASKED QUESTIONS
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
                    How many Garifuna people are there currently?
                  </h3>
                </header>

                <div className="questions__content">
                  <p className="questions__description">
                    The Garifuna population is estimated to
                    be around 600,000 in total, taking together its people in
                    Central America, Yurumein (Saint Vincent and the
                    Grenadines), and the United States.
                  </p>
                </div>
              </div>

              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">
                    What are the main staples of the Garinagu diet?
                  </h3>
                </header>

                <div className="questions__content">
                  <p className="questions__description">
                  The Garifuna foods consist of fish, chicken, cassava, bananas and plantains. One of the staples of the diet is cassava. Cassava is made into bread, a drink, a pudding and even a wine!
                  </p>
                </div>
              </div>

              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">
                    What are the colors of the Garifuna flag and what do they represent?
                  </h3>
                </header>

                <div className="questions__content">
                  <p className="questions__description">
                  The Garifuna flag consists of three horizontal strips of black, white and yellow, in that order, starting from the top. The flag has been accepted internationally as the flag of the Garifuna Nation and the colors have been used in forums where Garifuna people assert their Garifuna identity.
                  </p>
                </div>
              </div>

              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">
                    What is the significance of the November 19th celebrations?
                  </h3>
                </header>

                <div className="questions__content">
                  <p className="questions__description">
                  Every year on November 19, Garifuna Settlement day is observed which marks the arrival  of the Garifuna people in Belizean territory in 1802. The holiday was created by Thomas  Vincent Ramos, a Belizean civil rights activist and is celebrated for a whole week with  major festivities that include parades, live music, drumming, dancing, prayers and pageantry in Garifuna communities.
                  </p>
                </div>
              </div>

              <div className="questions__item">
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">
                    When it comes to spirituality, what is the Garifuna belief?
                  </h3>
                </header>

                <div className="questions__content">
                  <p className="questions__description">
                  The religion of the Garifuna consists of a mix of Catholicism, African and Indian beliefs. They believe that the departed ancestors mediate between the individual and external world and if a person behaves and performs well, then he will have good fortune. If not, then the harmony that exists in relationships with others and the  external world will be disrupted leading to misfortune and illness.  Their spiritualism is expressed through music, dancing and other art forms.
                  </p>
                </div>
              </div>
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

    .questions__item {
      background-color: #000000;
      color: white;
      border-radius: 0.25rem;
      padding-top: 1.5rem 0;
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
      border: 3px solid purple;
      padding-top: 1.5rem ;
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
