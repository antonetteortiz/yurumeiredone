import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Heroes() {
  const [heroes, setHeroes] = useState([{}]);

  // Fetching data from heroes API

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Heroes";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((heroes) => setHeroes(heroes))
      .catch((err) => console.log(err));
  }, []);
  console.log(heroes);

  let heroesList = heroes.map((hero, i) => {
    return (
      <div className="heroCard">
        <div className="imageCon">
          <img src={hero.photo} alt="Photo of Hero" />
        </div>
        <h2 className="heroName">{hero.heroName}</h2>

        <p>D.O.B {hero.birthdate}</p>

        <p>{hero.notableAccomplishments}</p>
      </div>
    );
  });

  return (
    <HeroesStyled>
      <h3 className="heading">Garifuna Heroes and Leaders</h3>
      <div className="heroContainer">{heroesList}</div>
    </HeroesStyled>
  );
}

const HeroesStyled = styled.div`
  padding: 4rem 5rem;
  border: 0.5px solid green;
  .heading {
    font-size: 3rem;
  }
  .heroContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    .heroCard {
      border: 2px solid black;
      border-radius: 15px;
      padding: 2rem;
      inline-size: 400px;
      overflow-wrap: break-word;
      .heroName {
          text-decoration: underline;
      }
      .imageCon {
        width: 350px;
        height: 450px;
        margin-bottom: 30px;
        img {
          width: 325px;
          height: 450px;
          object-fit: cover;
        }
      }
    }
  }
`;
export default Heroes;
