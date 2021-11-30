import React, { useEffect, useState } from "react";
import styled from 'styled-components'

function GarifunaDishes() {
  const [recipes, setRecipes] = useState([{}]);
  const [recipeSearch, setRecipeSearch] = useState("");
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  // Fetching data from recipe API

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipe) => {
        setRecipes(recipes);
        console.log(recipes);
      })
      .then((recipes) => console.log(recipes))
      .catch((err) => console.log(err));
    //  console.log(recipe);

    // Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, []);

  const searchRecipe = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setRecipeSearch(e.target.value.toLowerCase());
    if (recipeSearch.length > 1) {
      let newRecipeArr = recipes.filter((input) =>
        input.recipeName.toLowerCase().includes(recipeSearch)
      );
      // console.log(newRecipeArr);
      setFilteredRecipeList(newRecipeArr);
    }
  };
  // console.log(recipe)
  let recipeList = recipes.map((recipe, i) => {
    // console.log(recipe)
    return (
      // card container
      <div className="recipeCard shadow-lg rounded">
        {/* image container */}
        <div>
          <img className="recipeImage" src={recipe.photo} alt="" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div className="recipe-name">
          <h4>{recipe.recipeName}</h4>
        </div>

        <div className="view-recipe">
          <div className="recipe-description">
            <p>{recipe.description}</p>
          </div>
        </div>

        {/* action container */}
        <div className="action-container">
          <button
            className="recipeButton"
            style={{
              outline: "none",
              border: "none",
            }}
          >
            Like
          </button>
          
            <button className="recipeButton" size="small" color="primary">
              View
            </button>
        </div>
        {/* action container END */}
      </div>
    );
  });

  console.log(filteredRecipeList);
  let recipeListFiltered = filteredRecipeList.map((recipe, i) => {
    return (
      // card container
      <div className="recipeCard">
        {/* image container */}
        <div>
          <img className="recipeImage" src={recipe.photo} alt="" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div
          className="lead"
          style={{ paddingTop: "20px", paddingLeft: "10px" }}
        >
          <h4 className="lead">{recipe.recipeName}</h4>
          <div style={{ borderTop: "2px solid #FFD800", height: "100px" }}>
            <p className="lead" style={{ paddingTop: "10px" }}>
              {recipe.description}
            </p>
          </div>
        </div>

        {/* action container */}
        <div>
          <div style={{ display: "flex", margin: "1rem" }}>
            <button
              className="recipeButton"
              style={{
                outline: "none",
                border: "none",
                marginRight: "10px",
                borderRadius: "4px",
              }}
            >
              Like
            </button>

            
              <button className="recipeButton" size="small" color="primary">
                View
              </button>
            
          </div>
        </div>
        {/* action container END */}
      </div>
    );
  });
  return (
    <GarifunaDishesStyled>
      <div>
        <h1 className="mt-5" style={{ alignText: "center" }}>
          Garifuna Recipes
        </h1>
        <div>
          <div container spacing={2} justify="center">
            <div>
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Enter Name of Dish"
                  style={{ border: "1px solid black" }}
                  value={recipeSearch}
                  onChange={searchRecipe}
                />

                <button
                  className="btn my-2 my-lg-0 "
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#FFD800",
                  }}
                  type="submit"
                  onClick={() => searchRecipe()}
                >
                  Search
                </button>
              </form>

              <button
                className="btn my-2 my-lg-0 form-inline "
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFD800",
                  marginLeft: "10px",
                }}
                type="submit"
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {recipeSearch.length > 1 ? recipeListFiltered : recipeList}
      </div>
    </GarifunaDishesStyled>
  );
}

const GarifunaDishesStyled = styled.div``

export default GarifunaDishes
