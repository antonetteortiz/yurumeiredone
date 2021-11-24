import React from "react";
import styled from "styled-components";
import logo from "../img/logo/yurumeifavicon.svg";
import { InnerLayout } from "../Layouts";

function Footer() {
  return (
    <FooterStyled>
      <InnerLayout>
        <footer>
          <div>
            <div className="footer__content">
              <a href="#" className="footer__logo">
                <img src={logo} />
                <h1>YURUMEI</h1>
              </a>

              <h3 className="footer__title">
                Subscribe to our newsletter <br /> to stay update
              </h3>

              <div className="footer__subscribe">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer__input"
                />

                <button className="button button--flex footer__button">
                  Subscribe
                  <i className="ri-arrow-right-up-line button__icon"></i>
                </button>
              </div>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Our Address</h3>

              <ul className="footer__data">
                <li className="footer__information">Washington, DC </li>
                <li className="footer__information">USA 20011</li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Contact Us</h3>

              <ul className="footer__data">
                <li className="footer__information">001 917 213 2435</li>

                <div className="footer__social">
                  <a
                    href="https://www.facebook.com/"
                    className="footer__social-link"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="footer__social-link"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a
                    href="https://twitter.com/"
                    className="footer__social-link"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>

          <p className="footer__copy">&#169; YURUMEI. All rigths reserved</p>
        </footer>
      </InnerLayout>
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  background-color: #ffcc00;
.footer__content{
    display: grid;
    grid-template-columns: repeat(3, 1fr) 
}


  .footer__logo {
    border: 3px solid red;
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    transition: 0.3s;
    h1 {
      letter-spacing: 0.5rem;
      font-size: 2rem;
    }
  }

  .footer__logo:hover {
    color: #ffcc00;
  }

  .footer__title {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .footer__subscribe {
    background-color: black;
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
  }

  .footer__input {
    width: 70%;
    padding: 0 0.5rem;
    background: white;
    color: black;
    border: none;
    outline: none;
  }

  .footer__button {
    padding: 1rem;
  }

  .footer__data {
    display: grid;
    row-gap: 0.75rem;
  }

  .footer__information {
    font-size: 0.8rem;
  }

  .footer__social {
    display: inline-flex;
    column-gap: 0.75rem;
  }

  .footer__social-link {
    font-size: 1rem;
    color: black;
    transition: 0.3s;
  }

  .footer__social-link:hover {
    transform: translateY(-0.25rem);
  }

  .footer__cards {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  .footer__card {
    width: 35px;
  }
`;
export default Footer;
