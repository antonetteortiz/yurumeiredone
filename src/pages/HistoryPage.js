import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import HistoryIntro from "../components/history/HistoryIntro";
import Heroes from "../components/history/Heroes";
import Footer from "../components/Footer";

function HistoryPage() {
  


  return (
    <div>
      <Nav />
        <HistoryPageStyled>
            <HistoryIntro />
            <Heroes />
        </HistoryPageStyled>
      <Footer />
    </div>
  );
}

const HistoryPageStyled = styled.div`

`

export default HistoryPage;
