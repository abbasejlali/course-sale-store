import React from "react";

// components
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardsHomePage from "./CardsHomePage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsHomePage />
    </div>
  );
};

export default HomePage;
