import React from "react";
import styled from "styled-components";
function Cassava() {
  return (
    <CassavaStyled>
      <div className="container"></div>
    </CassavaStyled>
  );
}
const CassavaStyled = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("./assets/cassava.jpg");
`;
export default Cassava;
