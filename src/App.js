// import styled from "styled-components";
import Nav from "./components/Nav";
import HomeFeature from "./components/HomeFeature";
import FeatureContent from "./components/FeatureContent";
import Questions from "./components/Questions";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="header">
      <Nav />
      <HomeFeature />
      <FeatureContent />
      <Questions />
      <Contact />
    </div>
  );
}

// const AppStyled = styled.div``

export default App;
