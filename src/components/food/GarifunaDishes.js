import React, { useEffect, useState } from "react";
import styled from "styled-components";

function GarifunaDishes() {
  const [recipes, setRecipes] = useState([{}]);
  const [recipeSearch, setRecipeSearch] = useState("");
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipes) => {
        setRecipes(recipes);
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
      <div className="cardContainer" key={i}>
        {/* image container */}
        <div className="recipeImage">
          <img src={recipe.photo} alt="" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div className="recipeName">
          <h4>{recipe.recipeName}</h4>
        </div>

        <div className="recipeDescription">
          <p>{recipe.description}</p>
        </div>

        {/* action container */}
        <div className="viewButton">
          <button>
            <a href={`/food/${recipe._id}`}>View Recipe</a>
          </button>
        </div>
        {/* action container END */}
      </div>
    );
  });

  // console.log(filteredRecipeList);
  let recipeListFiltered = filteredRecipeList.map((recipe, i) => {
    return (
      // card container
      <div className="cardContainer" key={i}>
        {/* image container */}
        <div className="recipeImage">
          <img src={recipe.photo} alt="recipephoto" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div className="recipeName">
          <h4>{recipe.recipeName}</h4>
        </div>
        <div className="recipeDescription">
          <p>{recipe.description}</p>
        </div>

        {/* action container */}
        <div className="viewButton">
          <button>
            <a href={`/food/${recipe._id}`}>View Recipe</a>
          </button>
        </div>
        {/* action container END */}
      </div>
    );
  });
  return (
    <GarifunaDishesStyled>
      <div className="heading">
        <div className="title">
          <h1>Garifuna Recipes</h1>
        </div>
        <div className="search">
          <input
            className="searchInput"
            type="text"
            placeholder="Enter Name of Dish"
            value={recipeSearch}
            onChange={searchRecipe}
          />

          <button type="submit" onClick={() => searchRecipe()}>
            Search
          </button>
        </div>
      </div>
      {recipeSearch.length > 1 ? recipeListFiltered : recipeList}
    </GarifunaDishesStyled>
  );
}

const GarifunaDishesStyled = styled.div`
  padding: 4rem 5rem;
  display: flex;
  flex-wrap: wrap;
  background: black;
  .heading {
    display: inline-block;
    width: 100%;
    color: white;

    .searchInput {
      border: 3px solid black;
      padding: 5px;
      height: 40px;
      border-radius: 5px;
      outline: none;
      font-size: 20px;
      width: 250px;
    }
    button {
      border: 3px solid black;
      padding: 5px;
      height: 40px;
      border-radius: 5px;
      background: black;
      color: #ffcc00;
      font-size: 18px;
      margin-left: 10px;
    }
  }
  .cardContainer {
    background: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 24.9vw;
    padding: 20px;
    margin: 2rem;
    border-radius: 12px;
    box-shadow: 5px 5px 5px #ffcc00;
    @media only screen and (max-width 1450px) {
      width: 450px;
      border: 2px dotted purple;
    }
    img {
      height: 30vh;
      width: 100%;
      vertical-align: middle;
      object-fit: cover;
      overflow: hidden;
      padding-bottom: 5px;
      
    }
    .recipeName {
      border-top: 1px solid black;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding-top: 15px;
    }
    .recipeDescription {
      letter-spacing: 0.5px;
      height: 30%;
    }
    .viewButton {
      padding-top: 15px;
      display: flex;
      justify-content: center;
      bottom: 20px;
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
    }
  }
`;

export default GarifunaDishes;
