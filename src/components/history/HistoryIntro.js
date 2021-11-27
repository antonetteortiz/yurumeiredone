import React from "react";
import styled from "styled-components";
import History1 from "../../img/features/historyIntro.png";

function HistoryIntro() {
  return (
    <HistoryIntroStyled>
      <div className="leftSide">
        <h3 className="heading">A Brief History of the Garinagu</h3>
        <p>
          <span className="garinagu">GARIFUNA</span>
           is both a language (a dialect) and a person of Garifuna decent. The
          Garinagu – the plural form of Garifuna – are indigenous, mixed-race
          descendants of West African, Island Carib, and Arawak people. In 1635,
          escaped and shipwrecked Africans found refuge on the island of Saint
          Vincent and intermarried with the Island Caribs and the Arawaks,
          resulting in the Garifuna people.
        </p>
        <p>
          For a time, the Afro-Caribbean Garifunas lived peacefully alongside
          French settlers who reached St. Vincent later in the 17th century,
          until being exiled by British troops in 1796 and eventually shipped
          off to Roatan, one of the Honduras Bay Islands in the Caribbean Sea.
          After successfully developing a healthy crop of cassava, a mainstay of
          traditional Garifuna diets, on Roatan, Garifunas branched out to the
          Caribbean mainland to establish fishing villages in Belize, Guatemala,
          Honduras and Nicaragua. According to one source, the Spanish agreed to
          transfer the Garifunas from Roatan to Trujillo, Colon on the coastal
          mainland of Honduras, effectively consolidating their claim on Roatan
          and the other Honduras Bay Islands and gaining better access to a
          workforce of Garifuna laborers.
        </p>
        <p>
          Today, the global population of Garifunas stands at upwards of 300,000
          people, many of whom live in the U.S. and Canada. Garifuna communities
          along the Caribbean Sea live mostly in coastal towns and villages in
          the Central American countries of Belize, Guatemala, Honduras and
          Nicaragua.
        </p>
      </div>
      <div className="rightSide">
        <img src={History1} alt="" />
      </div>
    </HistoryIntroStyled>
  );
}

const HistoryIntroStyled = styled.div`
  background-color: black;
  display: flex;
  color: darkgray;
  .leftSide {
    flex: 100%;
    padding: 8rem 0 0 2.5rem;
    margin: 0 auto;
    .heading {
      padding-bottom: 1rem;
      font-size: 2.5rem;
    }
    p{
        padding-bottom: 1rem;
        .garinagu{
            font-weight: 500;
            letter-spacing: 3px;
            padding-right: 10px;
            color: #FFCC00;
            font-style: italic;
        }
    }
  }

`;

export default HistoryIntro;
