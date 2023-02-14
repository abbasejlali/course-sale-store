import React, { useContext } from "react";

// Icons
import {
  FaClock,
  FaHeadphonesAlt,
  FaUserClock,
  FaUserGraduate,
} from "react-icons/fa";

// spa
import { useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../Context/ProductsContextProvider";

// img
import github from "../img/github80.png";

// styles
import styles from "./DetailsProductBox.module.css";

const DetailsProductBox = () => {
  const params = useParams();
  const idMain = params.id - 1;

  const product = useContext(ProductsContext);
  const { id, title, clock, number, price, discribtion, number_sessions } =
    product[idMain];

  return (
    <>
      <div className={styles.product_main}>
        <div className={styles.product_box}>
          <div className={styles.product_details}>
            <img src={github} alt="product_img" />
            <h1>{title}</h1>
            <p>{discribtion}</p>
            <div className={styles.btn_details}>
              <button>Buy Course</button>
              <span>{price} $</span>
            </div>
          </div>
          <div className={styles.product_video}>
            <video
              controls
              poster="https://botostart.org/images/posters/javascript.png"
              width="100%"
            >
              <source
                src="https://botostart.org/courses/other/javascript/videos/1-%20introduction.mp4"
                type="video/mp4"
              />
            </video>
            <div className={styles.product_icons}>
              <div>
                <FaUserGraduate />
                <span>{number}</span>
              </div>
              <div>
                <FaUserClock />
                <span>{number_sessions}</span>
              </div>
              <div>
                <FaClock />
                <span>{clock}</span>
              </div>
              <div>
                <FaHeadphonesAlt />
                <span>24H Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProductBox;
