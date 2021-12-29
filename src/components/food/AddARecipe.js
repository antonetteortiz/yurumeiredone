import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";

function AddARecipe() {
  console.log("Create Recipe");
  const [recipeName, setRecipeName] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();
  const [servings, setServings] = useState();
  const [ingredients, setIngredients] = useState();
  const [steps, setSteps] = useState();
  const [author, setAuthor] = useState();
  const [setSuccess] = useState(false);

  const submitToApi = (e) => {
    e.preventDefault();
    // console.log("submitting");
    let recipeInputField = document.querySelector("#recipeInputField");
    if (recipeInputField.value !== "") {
      axios
        .post("https://yurumeiapi.herokuapp.com/Recipe", {
          recipeName,
          description,
          photo,
          servings,
          ingredients,
          steps,
          author,
        })
        .then(function (response) {
          // alert("Seremein (Thanks) for adding to our libary.");
          console.log(response);
          setSuccess(true);
        });
    }
  };

  return (
    <AddARecipeStyled>
      <InnerLayout>
        <div className="section">
          <div className="heading">
            <h1>ADD YOUR RECIPE</h1>
            <p>Share with us your favorite Garifuna recipe!</p>
          </div>

          <form>
            <div className="formCon">
              <label for="recipeInputField">Recipe Name</label>
              <input
                type="text"
                className="formInput"
                id="recipeInputField"
                onChange={(event) => setRecipeName(event.target.value)}
                required
              />
            </div>

            <div className="formCon">
              <label for="exampleInputEmail1">Recipe Description</label>
              <input
                type="text"
                className="formInput"
                aria-describedby="emailHelp"
                onChange={(event) => setDescription(event.target.value)}
              />
              
            </div>

            <div className="formCon">
              <label for="exampleFormControlSelect1">Photo</label>
              <input
                type="text"
                className="formInput"
                aria-describedby="emailHelp"
                onChange={(event) => setPhoto(event.target.value)}
              />
            <div className="hint">
              <label for="hint" className="hint"></label>
              <small id="emailHelp">
                Please enter link to recipe photo (jpeg/png)
              </small>
            </div>
            </div>


            <div className="formCon">
              <label for="exampleInputEmail1">Servings</label>
              <select
                class="form-control"
                onChange={(event) => setServings(event.target.value)}
              >
                <option></option>
                <option>1 serving</option>
                <option>2 servings</option>
                <option>3 servings</option>
                <option>4 servings</option>
                <option>5 servings</option>
                <option>6 servings</option>
                <option>7 servings</option>
                <option>8 servings</option>
                <option>9 servings</option>
                <option>10 servings</option>
              </select>
            </div>

            <div className="formCon">
              <label for="exampleInputEmail1">Ingredients</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(event) => setIngredients(event.target.value)}
              ></textarea>
            </div>

            <div className="formCon">
              <label for="exampleInputEmail1">Directions</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(event) => setSteps(event.target.value)}
              ></textarea>
            </div>

            <div className="formCon">
              <label for="exampleFormControlSelect1">Author</label>
              <input
                type="text"
                className="formInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>

            <button
              type="submit"
              className="submitButton"
              onClick={(e) => submitToApi(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </InnerLayout>
    </AddARecipeStyled>
  );
}


const AddARecipeStyled = styled.div`
  background: #ffcc00;
  display: flex;
  flex-direction: column;
  label {
    float: left;
    text-align: left;
    margin-right: 15px;
    width: 9rem;
  }
  textarea:focus,
  input:focus {
    border: 2px solid white;
  }
  /* button, */
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    border-radius: 5px;
    width: 40%;
  }
  button {
    background-color: black;
    color: #ffcc00;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: 0.3s;
    margin-top: 1.5rem;
  text-transform: uppercase;
    ;
  }
  .heading {
    padding-bottom: 15px;
  }
  .formCon {
    padding: 0.5rem 0;
  }
  .hint {
    padding-left: 10rem;
    font-style: italic;
  }
`;

export default AddARecipe;
