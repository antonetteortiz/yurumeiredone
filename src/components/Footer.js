/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import logo from "../img/logo/yurumeifavicon.svg";

function Footer() {
  return (
    <FooterStyled>
      <div className="logo">
        <a className="logo" href="#">
          <img src={logo} alt="" />

          <h1>YURUMEI</h1>
        </a>
      </div>
      <div className="footer_top">
        <div className="quote">
          <h3>
            Preserving our <br /> cultural legacy
          </h3>
        </div>

        <div className="footer_info">
          <h4>Stay Connected</h4>
          <p>
            Join our community and stay connected <br /> by signing up for our
            newsletter
          </p>
          <div class="subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              class="footer__input"
            />

            <button class="button">
              Subscribe
              <i class="ri-arrow-right-up-line button__icon" />
            </button>
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
          <h4>Contact Us</h4>
          <ul>
            <li>
              Email:
              <span>
                <a
                  a
                  href="mailto:yurumei@gmail.com?subject=Yurumei!"
                  className="contact"
                >
                  yurumei@gmail.com
                </a>
              </span>
            </li>
            <li>
              Telephone: <span className="contact">202 358 1789</span>
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
  .logo {
    display: inline-block;
    align-items: center;
    text-transform: uppercase;
    transition: 0.3s;
    img {
      height: 50px;
    }
    h1 {
      float: right;
      letter-spacing: 0.5rem;
      font-size: 2rem;
      color: #ffcc00;
      padding-left: 5px;
    }
  }
  h1:hover {
    color: #ffffff;
  }

  .footer_top {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .quote {
      flex-grow: 2;

      font-family: "Sedgwick Ave", cursive;
      /* clamp changes the base font of the page and the size based on the viewport  */
      /* clamp() function takes three comma separated expressions as its parameter, in the order of minimum value, preferred value, maximum value */
      font-size: clamp(1rem, 10vw, 2.9rem);
      font-weight: 300;
    }
    .footer_info {
      /* padding: 1rem 0rem; */
      padding: 1rem 4rem;
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
      font-style: italic;
      /* color: white; */
      padding-left: 5px;
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
