import React, { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// material Ui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Icons
import {
  FaClock,
  FaHeadphonesAlt,
  FaRegClock,
  FaUserClock,
  FaUserGraduate,
  FaRegPlayCircle,
  FaCloudDownloadAlt,
} from "react-icons/fa";

// spa
import { Link, useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../Context/ProductsContextProvider";
import { UserContext } from "../Context/UserContextProvider";
import { CartContext } from "../Context/CartContextProvider";

// functions
import { ProductTF, purchasedPR } from "../helper/function";

// img
import github from "../img/github80.png";

// styles
import styles from "./DetailsProductBox.module.css";

const DetailsProductBox = () => {
  const params = useParams();
  const idMain = params.id - 1;
  const product = useContext(ProductsContext);
  const {
    id,
    title,
    clock,
    number,
    price,
    discribtion,
    number_sessions,
    headers,
    headlines,
    headline_describtion,
  } = product[idMain];

  const [open, setOpen] = useState(false);

  const user = useContext(UserContext);
  const { state, dispatch } = useContext(CartContext);

  const clickHandeler = () => {
    setOpen(!open);
  };

  return (
    <>
      {console.log(open)}
      <div className={styles.product_main}>
        <div className={styles.product_box}>
          <div className={styles.product_details}>
            <img src={github} alt="product_img" />
            <h1>{title}</h1>
            <p>{discribtion}</p>
            <div className={styles.btn_details}>
              {user && purchasedPR(state, id) && state.checkout && (
                <h3 className={styles.btn_cart}>
                  You are a student of this course.
                </h3>
              )}
              {user && ProductTF(state, id) && !state.checkout && (
                <Link to="/cart" className={styles.btn_cart}>
                  continue buy
                </Link>
              )}
              {user && !purchasedPR(state, id) && !ProductTF(state, id) && (
                <Link
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product[idMain] })
                  }
                >
                  Buy Course
                </Link>
              )}
              {!user && !ProductTF(state, id) && (
                <Link onClick={() => toast.error("please login to site")}>
                  Buy
                </Link>
              )}
              {user && purchasedPR(state, id) && state.checkout ? (
                <></>
              ) : (
                <span>{price} $</span>
              )}

              <ToastContainer />
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
        <div className={styles.product_describtion}>
          <ul>
            <li>
              <h2>{headers[0].header}</h2>
              <p>{headers[0].des}</p>
            </li>
            <li>
              <h2>{headers[1].header}</h2>
              <p>{headers[1].des}</p>
            </li>
            <li>
              <h2>{headers[2].header}</h2>
              <p>{headers[2].des}</p>
            </li>
          </ul>
        </div>
        <div className={styles.product_headline}>
          <ul>
            <li className={styles.headlines_li}>
              <h2>headlines</h2>
              {headlines.map((item) => (
                <Accordion key={item.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${item.id}a-content`}
                    id={`panel${item.id}a-header`}
                  >
                    <Typography>
                      Headlin {item.id} :{item.headline}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails className={styles.headline_productcard}>
                    {headline_describtion.map((item2) => (
                      <Typography key={item2.id}>
                        <div className={styles.headline_main}>
                          <div className={styles.headline_title}>
                            <span>{item2.id}</span>
                            <p>{item2.des}</p>
                          </div>
                          <div className={styles.headline_time}>
                            <span>{item2.time} Min</span>
                            <FaRegClock />
                          </div>
                        </div>
                        {user && purchasedPR(state, product[idMain].id) && (
                          <div className={styles.get_product}>
                            <div className={styles.view_video}>
                              <button className={styles.btn_video}>
                                <FaRegPlayCircle />
                                <span>View Video</span>
                              </button>
                            </div>
                            <div className={styles.download_video}>
                              <button className={styles.btn_video}>
                                <FaCloudDownloadAlt />
                                <span>Download Video</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailsProductBox;
