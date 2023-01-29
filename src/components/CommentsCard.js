import React from "react";

// icons
import { FaUserAlt } from "react-icons/fa";

// video
import video from "../video/kian-baban.mov";

// styles
import styles from "./CommentsCard.module.css";

const CommentsCard = ({ data_comments }) => {
  return (
    <div className={styles.comment_main}>
      <div className={styles.comment_text}>
        <div className={styles.comment_titr}>
          <div>
            <FaUserAlt />
          </div>
          <div>
            <h5>{data_comments.student_name}</h5>
            <span>{data_comments.course_name}</span>
          </div>
        </div>
        <div>
          <p>{data_comments.comment}</p>
        </div>
      </div>
      <div className={styles.comment_video}>
        <video
          controls
          width="100%"
          height="100%"
          poster="https://botostart.org/comments/kian-baban.png"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CommentsCard;
