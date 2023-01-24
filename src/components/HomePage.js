import React from "react";

// components
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardsHomePage from "./CardsHomePage";
import AboutMe from "./AboutMe";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsHomePage />
      <AboutMe />
    </div>
  );
};

export default HomePage;
