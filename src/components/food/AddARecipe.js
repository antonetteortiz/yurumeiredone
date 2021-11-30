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
            <h1>Add your recipe</h1>
          </div>

          <form
          // className="form"
          // style={{
          //   width: "1200px",
          //   margin: "0 auto",
          //   padding: "20px 0px 80px, 0px",
          // }}
          >
            <div className="formCon">
              <label for="recipeInputField">Recipe</label>
              <input
                type="text"
                className="formInput"
                id="recipeInputField"
                onChange={(event) => setRecipeName(event.target.value)}
                required
              />
              {/* <div className="invalid-feedback">Please create an artist.</div> */}
              {/* <small id="emailHelp" className="form-text text-muted"></small> */}
            </div>

            <div className="formCon">
              <label for="exampleInputEmail1">Recipe Description</label>
              <input
                type="text"
                className="formInput"
                aria-describedby="emailHelp"
                onChange={(event) => setDescription(event.target.value)}
              />
              {/* <small id="emailHelp" className="form-text text-muted"></small> */}
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

(function () {
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      // eslint-disable-next-line no-unused-vars
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

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
  .formCon {
    padding: 0.5rem 0;
  }
  .hint {
    padding-left: 10rem;
    font-style: italic;
  }
`;

export default AddARecipe;
