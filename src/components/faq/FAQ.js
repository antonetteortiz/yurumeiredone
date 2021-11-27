import React, { useState } from "react";
import styled from "styled-components";

function FAQ({ question }) {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    if (isOpen === false) {
      setOpen(true);
    } else if (isOpen === true) {
      setOpen(false);
    }
  };

  const answer = (
    <div className="questions__content">
      <p className="questions__description">{question.answer}</p>
    </div>
  );
  return (
    <FAQStyled>
      <div className="questions__item">
        <header className="questions_header">
          <h3 className="questions__item-title" onClick={toggle}>
            <i className="ri-add-line questions__icon" />
            {question.question}
          </h3>
        </header>
        {isOpen ? answer : null}
      </div>
    </FAQStyled>
  );
}

const FAQStyled = styled.div`
  .questions__item {
    background-color: #000000;
    color: white;
    border-radius: 0.25rem;
    padding-top: 1.5rem 0;
  }

  .questions__item-title {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.8rem 0;
  }

  .questions__icon {
    font-size: 1.25rem;
    color: white;
    padding: 0 20px;
  }

  .questions__description {
    font-size: 1rem;
    font-weight: 600;
    padding-left: 60px;
    color: #000000;
    background-color: #FFCC00;
  }

  .questions__header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 1.75rem 0.5rem;
    cursor: pointer;
    padding-top: 1.5rem;
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
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
`;

export default FAQ;
