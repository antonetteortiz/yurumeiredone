import React from "react";
import Nav from "../components/Nav";
import HomeFeature from "../components/HomeFeature";
import FeatureContent from "../components/FeatureContent";
import Questions from "../components/faq/Questions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Nav />
      <HomeFeature />
      <FeatureContent />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
