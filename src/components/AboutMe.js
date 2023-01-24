import React from "react";

// icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// img
import abbas from "../img/Untitled-3.png";

// styles
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.about_main}>
      <div className={styles.about_textmain}>
        <div>
          <h4></h4>
          <p></p>
        </div>
        <div>
          <h4>Why did I choose programming?</h4>
          <p>
            For me, programming was very ideal, the working conditions were not
            uniform, I have to update myself with new technologies, it is
            possible to work remotely and finally, I really enjoy creating a
            product and seeing the final result.
          </p>
        </div>
        <div>
          <h4>Am I satisfied with programming?</h4>
          <p>
            Every job has its own difficulties and challenges, and programming
            is no exception to this rule, but overall, I am really satisfied
            with my choice. Programming led me to a path that removed many of
            the limitations and I was able to do useful things, doing useful
            things that benefit people always gives me the best feeling.
          </p>
        </div>
        <div>
          <h4>Why did I become a programmer?</h4>
          <p>
            Since I was a child, I had a strong interest in computers, and this
            interest is still in me until now, until in 1999, I implemented an
            internet business called Zafaranieh Store, and I worked for one
            year, and the further I went, the more I realized that my interest I
            was more into the field of IT until I got acquainted with
            programming and then I quickly dived into the field of programming
            and that is how I entered the field of programming and I am
            continuing until now.
          </p>
        </div>
        <div>
          <button>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <img src={abbas} alt="abbas ejlali" />
    </section>
  );
};

export default AboutMe;
