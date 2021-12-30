/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import YouthAtYurumein from "../../img/images/commerce.jpg";

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
      .post("https://yurumeiapi.herokuapp.com/contact", { ...contact })
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
    <div className="contactFormContainer">
      <div className="successMessage">
        {result && (
          <p className={`${result.success ? null : "error"}`}>
            {hasError ? result.message : null}
          </p>
        )}
      </div>
      <div className="formHeading">
      <h1>Let's talk.</h1>
      <p>Share your excitement with us!</p>
      </div>
      <form onSubmit={sendEmail}>
        <div>
          <label for="">Name</label>
          <input
            type="text"
            className="form-control"
            value={contact.name}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label for="">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            placeholder=" "
            value={contact.emailAddress}
            className="contact__input"
            onChange={onInputChange}
          />
        </div>

        <div>
          <label for="">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder=" "
            value={contact.subject}
            className="contact__input"
            onChange={onInputChange}
          />
        </div>

        <div>
          <label for="">Message</label>

          <textarea
            rows="4"
            name="message"
            placeholder=" "
            value={contact.message}
            className="contact__input"
            onChange={onInputChange}
          ></textarea>
        </div>

        <button type="submit">
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
      <div className="section">
        <div className="heading">
          <div className="image">
            <img src={YouthAtYurumein} alt="yurumei" />
          </div>
          <h2>We'd Love To Hear From You!</h2>
          <div>
            <h4 >Call or text us for instant support</h4>
            <div className="contactInfo">

            <span>
              <i className="ri-phone-line icon" />
              001 917 213 2435
            </span>
            </div>

            <h4 >Write us by mail</h4>
            <span>
              <i className="ri-mail-line icon" />
              yurumei@gmail.com
            </span>
          </div>
        </div>
        {isSuccess ? successMessage : contactForm}
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  .section {
    display: flex;
    background-color: #ffcc00;
    border-radius: 33px;
    margin: 4rem 2rem;
    .heading {
      padding:  30px;
      flex: 75%;
      width: 100%;
      img {
        width: 100%;
      }
      h2 {
        padding: 20px 0;
      }
      .contactInfo {
        padding-bottom: 30px;
      }
      .icon {
        padding-right: 10px
      }
    }
    
    
    .contactFormContainer{
      /* padding: 3vw; */
      padding: 40px;
      /* display: flex; */
      flex: 100%;
      margin: 0 auto;
      align-items: center;
      border-left: 1px solid black;
      label {
        display: block;
        text-align: left;
        font-size: 20px;
        /* margin-bottom: 10px; */
      }
      span {
        font-size: 15px;
        padding-left: 5px;
      }
      input,
      textarea {
        display: block;
        width: 100%;
        padding: 0.5rem 0.8rem 0.5rem 0.8rem;
        margin: 8px 0;
        border: 0;
        border-radius: 5px;
        font-size: 12px;
      }
      button {
        background-color: black;
        color: #ffcc00;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
        transition: 0.3s;
        margin-top: 1.5rem;
        cursor: pointer;
        border: none;
        outline: none;
        .button__icon {
          padding-left: 10px;
        }
      }
      .formHeading {
        padding-bottom: 30px;
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
    }
  }

  /* .contact__form {
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
  } */
`;
export default Contact;
