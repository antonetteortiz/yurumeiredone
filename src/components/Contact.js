import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';

function Contact() {
    return (
        <ContactStyled>
            <InnerLayout>
             <section className="contact section container" id="contact">                
                <div className="contact__container grid">
                    <div className="contact__box">
                        <h2 className="section-title">
                            Reach out to us today
                        </h2>

                        <div className="contact__data">
                            <div className="contact__information">
                                <h3 className="contact__subtitle">Call us for instant support</h3>
                                <span className="contact__description">
                                    <i className="ri-phone-line contact__icon"></i>
                                    +999 888 777
                                </span>
                            </div>

                            <div className="contact__information">
                                <h3 className="contact__subtitle">Write us by mail</h3>
                                <span className="contact__description">
                                    <i className="ri-mail-line contact__icon"></i>
                                    user@email.com
                                </span>
                            </div>
                        </div>
                    </div>

                    <form action="" className="contact__form">
                        <div className="contact__inputs">
                            <div className="contact__content">
                                <input type="email" placeholder=" " className="contact__input"/>
                                <label for="" className="contact__label">Email</label>
                            </div>

                            <div className="contact__content">
                                <input type="text" placeholder=" " className="contact__input" />
                                <label for="" className="contact__label">Subject</label>
                            </div>

                            <div className="contact__content contact__area">
                                <textarea name="message" placeholder=" " className="contact__input"></textarea>                              
                                <label for="" className="contact__label">Message</label>
                            </div>
                        </div>

                        <button className="button button--flex">
                            Send Message
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </form>
                </div>
            </section>
            </InnerLayout>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
button{
  cursor: pointer;
  border: none;
  outline: none;
}
h2{
    color: black;
    font-weight: 600;
}
.button{
  display: inline-block;
  background-color: #FFCC00;
  color: #000000;
  padding: 1rem 1.75rem;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  transition: .3s;
}
.button--flex{
  display: inline-flex;
  align-items: center;
  column-gap: .5rem;
}

.contact__container{
  row-gap: 3.5rem;
}

.contact__data{
  display: grid;
  row-gap: 2rem;
}

.contact__subtitle{
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--text-color);
  margin-bottom: var(--mb-0-5);
}

.contact__description{
  display: inline-flex;
  align-items: center;
  column-gap: .5rem;
  color: var(--title-color);
  font-weight: var(--font-medium);
}

.contact__icon{
  font-size: 1.25rem;
}

.contact__inputs{
  display: grid;
  row-gap: 2rem;
  margin-bottom: var(--mb-2-5);
}

.contact__content{
  position: relative;
  height: 3rem;
  border-bottom: 1px solid var(--text-color-light);
}

.contact__input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem 1rem 0;
  background: none;

  color: var(--text-color);

  
  border: none;
  outline: none;
  z-index: 1;
}

.contact__label{
  position: absolute;
  top: .75rem;
  width: 100%;
  font-size: var(--small-font-size);
  color: var(--text-color-light);
  transition: .3s;
}

.contact__area{
  height: 7rem;
}

.contact__area textarea{
  resize: none;
}
`
export default Contact
