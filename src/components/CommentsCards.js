import React, { useContext } from "react";

// contetx
import { CommentsContext } from "../Context/CommentsContextProvider";

// components
import CommentsCard from "./CommentsCard";

const CommentsCards = () => {
  const data = useContext(CommentsContext);

  return (
    <div>
      {data.map((item) => (
        <CommentsCard key={item.id} data_comments={item} />
      ))}
    </div>
  );
};

export default CommentsCards;
