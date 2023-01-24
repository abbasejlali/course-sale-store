import React, { useState } from "react";

// icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// img
import abbas from "../img/Untitled-3.png";

// styles
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const [number, setNumber] = useState(1);

  const numberplus = (e) => {
    setNumber(number + 1);
    if (number >= 3) {
      setNumber(() => number - 2);
    }
  };
  const numberminus = (e) => {
    setNumber(number - 1);
    if (number <= 1) {
      setNumber(() => number + 2);
    }
  };
  return (
    <section className={styles.about_main}>
      {console.log(number)}

      <div className={styles.about_textmain}>
        <div
          style={{
            zIndex: `${number === 1 ? "4" : "3"}`,
            transform: `${number === 1 ? "rotate(0deg)" : "rotate(4deg)"}`,
          }}
        >
          <h4>Why did I choose programming?</h4>
          <p>
            For me, programming was very ideal, the working conditions were not
            uniform, I have to update myself with new technologies, it is
            possible to work remotely and finally, I really enjoy creating a
            product and seeing the final result.
          </p>
        </div>
        <div
          style={{
            zIndex: `${number === 2 ? "4" : "2"}`,
            transform: `${number === 2 ? "rotate(0deg)" : "rotate(8deg)"}`,
          }}
        >
          <h4>Am I satisfied with programming?</h4>
          <p>
            Every job has its own difficulties and challenges, and programming
            is no exception to this rule, but overall, I am really satisfied
            with my choice. Programming led me to a path that removed many of
            the limitations and I was able to do useful things, doing useful
            things that benefit people always gives me the best feeling.
          </p>
        </div>
        <div
          style={{
            zIndex: `${number === 3 ? "4" : "1"}`,
            transform: `${number === 3 ? "rotate(0deg)" : "rotate(12deg)"}`,
          }}
        >
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
          <button onClick={numberminus}>
            <FaArrowLeft />
          </button>
          <button onClick={numberplus}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <img src={abbas} alt="abbas ejlali" />
    </section>
  );
};

export default AboutMe;
