import React from "react";

// components
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardsHomePage from "./CardsHomePage";
import AboutMe from "./AboutMe";
import BannerHomeBottom from "./BannerHomeBottom";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsHomePage />
      <AboutMe />
      <BannerHomeBottom />
      <Footer />
    </div>
  );
};

export default HomePage;
