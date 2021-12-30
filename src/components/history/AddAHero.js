import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import hero from "../../img/images/chatpic.jpg";

function AddAHero() {
  const [heroName, setheroName] = useState();
  const [birthdate, setBirthdate] = useState();
  const [photo, setPhoto] = useState();
  const [notableAccomplishments, setNotableAccomplishments] = useState();
  const [description, setDescription] = useState();
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false);

  const submitToApi = (e) => {
    e.preventDefault();
    // console.log("submitting");
    let heroInputField = document.querySelector("#heroInputField");
    if (heroInputField.value !== "") {
      axios
        .post("https://yurumeiapi.herokuapp.com/hero", {
          heroName,
          birthdate,
          photo,
          notableAccomplishments,
          description,
        })
        .then(function (response) {
          // alert("Seremein (Thanks) for adding to our libary.");
          console.log(response);
          setSuccess(true);
        });
    }
  };

  return (
    <AddAHeroStyled>
      <section className="section">
        <div className="heading">
          <div className="hero">
            <img src={hero} alt="" />
          </div>
          <h1>
            Know of Garifuna Hero <br />
            or leader in the community?
          </h1>
          <h2>Add them here!</h2>
          {/* <button>
            Add Hero
            <i className="ri-arrow-right-up-line button__icon"></i>
          </button> */}
          <p className="addHeroParagraph">
            It is up to us to give our leaders and heroes their flowers. If you
            know anyone of Garifuna heritage that is doing something amazing to
            preserve and continue our ancestral traditions we'd love to know
            about them. Fill out this form and their information will be added
            to our site.
          </p>
        </div>
        <div className="heroForm">
          <form>
            <div>
              <label for="heroInputField">Name of Hero/Leader</label>
              <input
                type="text"
                className="form-control"
                id="heroInputField"
                onChange={(event) => setheroName(event.target.value)}
                required
              />
            </div>

            <div>
              <label for="dateOfBirth">
                Date of Birth - Date of Death
                <span>(Format MM DD YYYY)</span>
              </label>
              <input
                type="text"
                onChange={(event) => setBirthdate(event.target.value)}
              />
            </div>

            <div>
              <label for="photo">
                Photo
                <span> (Please enter link to a photo of hero)</span>
              </label>
              <input
                type="text"
                onChange={(event) => setPhoto(event.target.value)}
              />
            </div>

            <div>
              <label for="exampleInputEmail1">Notable Accomplishments</label>

              <textarea
                rows="4"
                onChange={(event) =>
                  setNotableAccomplishments(event.target.value)
                }
              ></textarea>
            </div>

            <div>
              <label for="summary">
                Summary of contribution to the Garifuna Community
              </label>
              <textarea
                rows="5"
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <button type="submit" onClick={(e) => submitToApi(e)}>
              Submit Hero
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </form>
        </div>
      </section>
    </AddAHeroStyled>
  );
}

const AddAHeroStyled = styled.div`
  /* margin: 2rem 0; */
  .section {
    display: flex;
    padding: 2rem 15rem;
    background-color: #ffcc00;
    border-radius: 5px;
  }
  .heading {
    padding: 30px;
    width: 40%;
    padding-top: 5px;
    .hero {
      width: 350px;
      height: 325px;
      margin-bottom: 20px;
      img {
        width: 350px;
        height: 325px;
        object-fit: cover;
      }
    }
    p {
      padding-top: 20px;
    }
    button {
      background-color: black;
      color: #ffcc00;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: 0.3s;
      margin-top: 1.5rem;
      .button__icon {
        padding-left: 10px;
      }
    }
  }
  .heroForm {
    padding: 3vw;
    width: 75%;
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
      .button__icon {
        padding-left: 10px;
      }
    }
  }
`;

export default AddAHero;
