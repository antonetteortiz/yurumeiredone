import React from 'react'
import styled from "styled-components";
function Plaintain() {
    return (
      <PlaintainStyled>
        <div className="container"></div>
      </PlaintainStyled>
    );
}
const PlaintainStyled = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("./assets/plantain.jpg");
`;
export default Plaintain
