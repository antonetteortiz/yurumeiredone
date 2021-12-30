/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { InnerLayout } from "../../Layouts";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const [hasError, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/contact", { ...contact })
      .then((response) => {
        setResult(response.data);
        setContact({ name: "", emailAddress: "", subject: "", message: "" });
        setError(false);
        setSuccess(true);
        console.log(contact);
      })
      .catch(() => {
        setSuccess(false);
        setError(true);
        setResult({
          success: false,
          message: "Something went wrong, please try again!",
        });
      });
  };

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const contactForm = (
    <div className="form_container">
      <div className="successMessage">
        {result && (
          <p className={`${result.success ? null : "error"}`}>
            {hasError ? result.message : null}
          </p>
        )}
      </div>
      <form className="contact__form" onSubmit={sendEmail}>
        <div className="contact__inputs">
          <div className="contact__content">
            <label for="" className="contact__label">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder=" "
              value={contact.name}
              className="contact__input"
              onChange={onInputChange}
            />
          </div>

          <div className="contact__content">
            <label for="" className="contact__label">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              placeholder=" "
              value={contact.emailAddress}
              className="contact__input"
              onChange={onInputChange}
            />
          </div>

          <div className="contact__content">
            <label for="" className="contact__label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder=" "
              value={contact.subject}
              className="contact__input"
              onChange={onInputChange}
            />
          </div>

          <div className="contact__content contact__area">
            <label for="" className="contact__label">
              Message
            </label>
            <textarea
              name="message"
              placeholder=" "
              value={contact.message}
              className="contact__input"
              onChange={onInputChange}
            />
          </div>
        </div>

        <button className="button button--flex" type="submit">
          Send Message
          <i className="ri-arrow-right-up-line button__icon"></i>
        </button>
      </form>
    </div>
  );

  const successMessage = (
    <div className="successMessage">
      {result && (
        <h3 className={`${result.success ? "success" : null}`}>
          {isSuccess ? result.message : null}
        </h3>
      )}
    </div>
  );

  
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
                    <i className="ri-phone-line contact__icon" />
                    001 917 213 2435
                  </span>
                </div>

                <div className="contact__information">
                  <h3 className="contact__subtitle">Write us by mail</h3>
                  <span className="contact__description">
                    <i className="ri-mail-line contact__icon" />
                    yurumei@gmail.com
                  </span>
                </div>
              </div>
            </div>
            {isSuccess ? successMessage : contactForm}
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
  .successMessage {
    display: flex;
    align-items: center;  
  }

  .success {
    padding-top: 20px;
  }

  .error {
    color: #960303;
  }

  .contact__form {
    height: 400px;
  }
  .button {
    background-color: #000000;
    color: #ffffff;
    padding: 0.5rem 1rem;
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
    margin-bottom: 0.5rem;
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
    color: black;
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
    background: #ffcc00;
  }

  .contact__input {
    width: 100%;
    height: 100%;
    padding-left: 0.2rem;
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
