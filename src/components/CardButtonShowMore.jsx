import React from "react";

export const CardButtonShowMore = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="card-time__list-button"
    //   className={style ? "time-btn" : "hidden"}
    >
      {text}
    </button>
  );
};