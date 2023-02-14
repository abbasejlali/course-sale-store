import React from "react";

// Components
import Footer from "./Footer";
import Navbar from "./Navbar";
import DetailsProductBox from "./DetailsProductBox";

const DetailsProduct = (props) => {
  return (
    <>
      <Navbar />
      <DetailsProductBox />
      <Footer />
    </>
  );
};

export default DetailsProduct;
