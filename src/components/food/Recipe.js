import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";

function Recipe(props) {
  const params = useParams();
  const [recipes, setRecipes] = useState([{}]);

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipes) => {
        setRecipes(recipes);
      })
      .then((recipes) => console.log(recipes))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(params)
  let foodRecipes = recipes.map((recipe, i) => {
    return (
      <div>
        {recipe._id === params._id ? (
          <div className="recipe">
            <div className="heading">
              <h1>{recipe.recipeName}</h1>

              <p>by {recipe.author}</p>
            </div>
            <div className="image">
              <img
                src={recipe.photo}
                alt="recipe"
                style={{ height: "550px", paddingBottom: "20px" }}
              />
            </div>

            <div className="ingredients">
              <h2>Ingredients</h2>
              <p className="lead" style={{ paddingTop: "20px", fontSize: "20px" }}>
                {recipe.ingredients.map((ingredient, j) => {
                  return <p>{ingredient}</p>;
                })}
              </p>
            </div>

            <div className="directions">
              <h3 style={{ paddingTop: "20px" }}>
                <h3>Directions</h3>
              </h3>

              <h6 style={{ paddingTop: "20px" }}>
                <p>{recipe.servings}</p>
              </h6>

              <p style={{ paddingTop: "20px" }}>
                {recipe.steps.map((steps, l) => {
                  return <p>- {steps}</p>;
                })}
              </p>
            </div>

            {/* <div className="card my-4 recipeComment">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn commentButton"
                    // onChange={(event) => setComment(event.target.value)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        ) : null}
      </div>
    );
  });

  return (
    <RecipeStyled>
      <InnerLayout>{foodRecipes}</InnerLayout>
    </RecipeStyled>
  );
}

const RecipeStyled = styled.div`
  background: #ffcc00;
  p{
      font-size:20px;
  }
`;
export default Recipe;
