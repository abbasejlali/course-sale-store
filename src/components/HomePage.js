import React from "react";

// components
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardsHomePage from "./CardsHomePage";
import AboutMe from "./AboutMe";
import BannerHomeBottom from "./BannerHomeBottom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsHomePage />
      <AboutMe />
      <BannerHomeBottom />
    </div>
  );
};

export default HomePage;
