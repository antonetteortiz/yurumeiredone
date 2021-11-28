import React from "react";
import Nav from "../components/Nav";
import HomeFeature from "../components/home/HomeFeature";
import FeatureContent from "../components/home/FeatureContent";
import Questions from "../components/home/faq/Questions";
import Contact from "../components/home/Contact";
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
