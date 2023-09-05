import React from "react";
import Nav from "../components/Nav";
import '../components/Nav.css';
import HistoryIntro from "../components/history/HistoryIntro";
import Heroes from "../components/history/Heroes";
import Footer from "../components/Footer";
import AddAHero from "../components/history/AddAHero";

function HistoryPage() {
  return (
    <div>
      <Nav />
      <HistoryIntro />
      <Heroes />
      <AddAHero />
      <Footer />
    </div>
  );
}

export default HistoryPage;
