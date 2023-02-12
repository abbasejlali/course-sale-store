import React from "react";

import Getip from "../servies/Getip";

//Components
import CommentsCards from "./CommentsCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CommentsMain = () => {
  return (
    <>
      <Getip />
      <Navbar />
      <CommentsCards />
      <Footer />
    </>
  );
};

export default CommentsMain;
