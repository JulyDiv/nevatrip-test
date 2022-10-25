import React from "react";

export const CardButtonShowMore = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="card-list__time-button"
    >
      {text}
    </button>
  );
};