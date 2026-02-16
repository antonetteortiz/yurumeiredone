/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo/yurumeifavicon.svg";
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [hasError, setError] = useState(false);
  const [postmarkError, setpostmarkError] = useState(false);

  const Subscribe = (e) => {
    e.preventDefault();
    // process.env.REACT_APP_API_URL = http://localhost:1987
    axios
      .post(`${process.env.REACT_APP_API_URL}/subscribe`, {
        email,
      })
      .then(function (response) {
        setSuccess(true);
        setError(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if (error.response.data.message === "error sending email") {
          setpostmarkError(true);
          setError(false);
        } else {
          setError(true);
          setpostmarkError(false);
        }
        console.log({ error });
        setSuccess(false);
      });
  };

  const Success = (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <strong className="font-bold">Yay! </strong>
      <span className="block sm:inline ">
        You have successfully subscribed to our newsletter.
      </span>
    </div>
  );

  const Warning = (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <strong className="font-bold">Holy smokes! </strong>
      <span className="block sm:inline">
        There was a problem creating subscription please try again.
      </span>
    </div>
  );

  const postmarkWarning = (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <strong className="font-bold">Oops, something wasn't right! </strong>
      <span className="block sm:inline">
        There was a problem with the email address you provided, please try
        again.
      </span>
    </div>
  );

  // const subscriptionForm = (
  //   <div class="subscribe">
  //     <form onSubmit={Subscribe}>
  //       <input
  //         type="email"
  //         placeholder="Enter your email"
  //         class="footer__input"
  //         value={email}
  //         onChange={(event) => setEmail(event.target.value)}
  //       />

  //       <button class="button">
  //         Subscribe
  //         <i class="ri-arrow-right-up-line button__icon" />
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <FooterStyled>
      <div className="footer_top">
        <div className="quote">
          <div className="logo">
            <img src={logo} alt="" />
            <a href="/home">
              <h1>YURUMEI</h1>
            </a>
          </div>
          <h6>Preserving our cultural legacy.</h6>
        </div>

        <div className="footer_info">
          <h2>Stay Connected</h2>
          <p>
            Join our community and stay connected by signing up for our
            newsletter
          </p>
          <div class="subscribe">
            {hasError ? Warning : null}
            {isSuccess ? Success : null}
            {postmarkError ? postmarkWarning : null}
            <form onSubmit={Subscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                class="footer__input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <button class="button">
                Subscribe
                <i class="ri-arrow-right-up-line button__icon" />
              </button>
            </form>
          </div>
          <div className="social">
            <div className="socialIcon">
              <a href="https://www.facebook.com/" className="socialLink">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
            <div className="socialIcon">
              <a href="https://www.instagram.com/" className="socialLink">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
            <div className="socialIcon">
              <a href="https://www.youtube.com/" className="socialLink">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer_info">
          <h2>Contact Us</h2>
          <ul>
            <li>
              Email:
              <span>
                <a
                  a
                  href="mailto:yurumei@gmail.com?subject=Yurumei!"
                  className="contact"
                >
                  <span>
                    <i className="ri-mail-line icon" />
                    yurumei@gmail.com
                  </span>
                </a>
              </span>
            </li>
            <li>
              Telephone:
              <span className="contact">
                <i className="ri-phone-line icon" />
                001 917 213 2435
              </span>
            </li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <span>Copyright © YURUMEI {new Date().getFullYear()}</span>
      </div>
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  background-color: #000000;
  color: #ffcc00;
  max-height: 500px;
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);

  .footer_top {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .logo {
      display: inline-flex;
      align-items: center;
      text-transform: uppercase;
      transition: 0.3s;
      img {
        height: 70px;
      }
      h1 {
        /* float: right; */
        display: inline;
        letter-spacing: 0.5rem;
        font-size: 4rem;
        color: #ffcc00;
        padding-left: 5px;
      }
      h1:hover {
        color: #ffffff;
      }
      p {
        font-size: 20px;
        line-height: 4rem;
      }
    }
    .quote {
      flex-grow: 2;
      font-family: "Poppins", cursive;
      /* clamp changes the base font of the page and the size based on the viewport  */
      /* clamp() function takes three comma separated expressions as its parameter, in the order of minimum value, preferred value, maximum value */
      font-size: clamp(1rem, 10vw, 2.9rem);
      font-weight: 300;
    }
    .footer_info {
      /* padding: 1rem 0rem; */
      padding: 1rem 4rem;
      input {
        display: block;
        width: 100%;
        padding: 0.5rem 0.8rem 0.5rem 0.8rem;
        margin: 8px 0;
        border: 0;
        border-radius: 5px;
        font-size: 12px;
      }
    }
    .social {
      font-size: 2rem;
      transition: 0.3s;
      margin-top: 1rem;
      .socialIcon {
        padding-right: 1rem;
        display: inline-flex;
      }
      .socialLink:hover {
        transform: translateY(-0.25rem);
      }
    }
    .button {
      border: 3px solid black;
      padding: 5px;
      height: 28px;
      width: 95px;
      border-radius: 5px;
      background: #ffcc00;
      color: black;
      font-size: 12px;
      margin-top: 10px;
      margin-left: 1px;
      text-transform: uppercase;
    }
    .contact {
      padding-left: 5px;
      span {
        padding-left: 5px;
        .icon {
          padding: 0px 5px;
        }
      }
    }
    .contact::hover {
      color: #ffffff;
    }
  }

  .copyright {
    text-align: center;
    align-items: flex-end;
    /* margin-top: 13rem; */
  }
`;
export default Footer;
