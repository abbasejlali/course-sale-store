import React from "react";

//Components
import CommentsCards from "./CommentsCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CommentsMain = () => {
  return (
    <>
      <Navbar />
      <CommentsCards />
      <Footer />
    </>
  );
};

export default CommentsMain;
