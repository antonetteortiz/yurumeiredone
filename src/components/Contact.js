import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

function Contact() {
  return (
    <ContactStyled>
      <InnerLayout>
        <section className="section container">
          <div className="contact__container">
            <div className="contact__box">
              <h2 className="section-title">Reach out to us today</h2>

              <div className="contact__data">
                <div className="contact__information">
                  <h3 className="contact__subtitle">
                    Call or text us for instant support
                  </h3>
                  <span className="contact__description">
                    <i className="ri-phone-line contact__icon"/>
                    001 917 213 2435
                  </span>
                </div>

                <div className="contact__information">
                  <h3 className="contact__subtitle">Write us by mail</h3>
                  <span className="contact__description">
                    <i className="ri-mail-line contact__icon"/>
                    yurumei@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="form_container">
              <form  className="contact__form">
                <div className="contact__inputs">
                  <div className="contact__content">
                    <label for="" className="contact__label">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder=" "
                      className="contact__input"
                    />
                  </div>

                  <div className="contact__content">
                    <label for="" className="contact__label">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder=" "
                      className="contact__input"
                    />
                  </div>

                  <div className="contact__content contact__area">
                    <label for="" className="contact__label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder=" "
                      className="contact__input"
                    />
                  </div>
                </div>

                <button className="button button--flex">
                  Send Message
                  <i className="ri-arrow-right-up-line button__icon"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </InnerLayout>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  .section {
    padding: 2rem 0 1rem;
    background-color: #ffcc00;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
  h2 {
    color: black;
    font-weight: 600;
  }
  .button {
    background-color: #000000;
    color: #ffffff;
    padding: .5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: 0.3s;
    margin-top: 1.5rem;
    float: right;
  }
  .button--flex {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .contact__container {
    row-gap: 3.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
  }

  .contact__data {
    display: grid;
    row-gap: 2rem;
  }

  .contact__subtitle {
    font-size: 1rem;
    font-weight: 500;
    color: #000000;
    margin-bottom: .5rem;
  }

  .contact__description {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: #000000;
    font-weight: 500;
  }

  .contact__icon {
    font-size: 1.5rem;
    color: black
  }

  .contact__inputs {
    display: grid;
    row-gap: 2rem;
    margin-bottom: 1.2rem;
  }

  .contact__content {
    position: relative;
    height: 2rem;
    top: 2;
    background: #FFCC00;
  }

  .contact__input {
    width: 100%;
    height: 100%;
    padding-left: .2rem;
    outline: none;
    /* z-index: 1; */
  }

  .contact__label {
    /* width: 100%;
    font-size: .813rem;
    color: #000000;
    transition: 0.3s; */
  }

  .contact__area {
    height: 7rem;
  }

  .contact__area textarea {
    resize: none;
  }
`;
export default Contact;
