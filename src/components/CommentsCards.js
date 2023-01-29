import React, { useContext } from "react";

// contetx
import { CommentsContext } from "../Context/CommentsContextProvider";

const CommentsCards = () => {
  const data = useContext(CommentsContext);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </div>
  );
};

export default CommentsCards;
