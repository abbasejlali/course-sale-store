import React from "react";
import { Link } from "react-router-dom";

// img
import logo from "../img/logo-100-50.png";

// icons
import { FaShoppingBasket, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <section>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
      <div>
        <span>
          <FaSignInAlt />?
        </span>
        <span>
          <FaShoppingBasket />?
        </span>
      </div>
    </section>
  );
};

export default Navbar;
