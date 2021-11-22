// import styled from "styled-components";
import Nav from "./components/Nav";
import HomeFeature from "./components/HomeFeature";
import FeatureContent from "./components/FeatureContent";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="header">
      <Nav />
      <HomeFeature />
      <FeatureContent />
      <FAQ />
    </div>
  );
}

// const AppStyled = styled.div``

export default App;
