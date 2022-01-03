import React from "react";
import Nav from "../components/Nav";
import HomeHeroSection from "../components/home/HomeHeroSection";
import AboutSection from "../components/home/AboutSection";
import FeatureContent from "../components/home/FeatureContent";
import Questions from "../components/home/faq/Questions";
import Contact from "../components/home/ContactSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Nav />
      <HomeHeroSection />
      <FeatureContent />
      <AboutSection />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
