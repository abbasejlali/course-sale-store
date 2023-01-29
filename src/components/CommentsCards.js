import React, { useContext } from "react";

// contetx
import { CommentsContext } from "../Context/CommentsContextProvider";

// components
import CommentsCard from "./CommentsCard";

// styles
import styles from "./CommentsCards.module.css";

const CommentsCards = () => {
  const data = useContext(CommentsContext);

  return (
    <div className={styles.cards_main}>
      {data.map((item) => (
        <CommentsCard key={item.id} data_comments={item} />
      ))}
    </div>
  );
};

export default CommentsCards;
