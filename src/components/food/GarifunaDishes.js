import React, { useEffect, useState } from "react";
import styled from 'styled-components'

function GarifunaDishes() {
  const [recipe, setRecipe] = useState([{}]);
  const [recipeSearch, setRecipeSearch] = useState("");
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  // Fetching data from recipe API

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipe) => {
        setRecipe(recipe);
        console.log(recipe);
      })
      .then((recipe) => console.log(recipe))
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
      let newRecipeArr = recipe.filter((input) =>
        input.recipeName.toLowerCase().includes(recipeSearch)
      );
      // console.log(newRecipeArr);
      setFilteredRecipeList(newRecipeArr);
    }
  };
  // console.log(recipe)

  return <GarifunaDishesStyled></GarifunaDishesStyled>;
}

const GarifunaDishesStyled = styled.div``

export default GarifunaDishes
