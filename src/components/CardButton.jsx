import React from "react";

export const CardButton = ({ text }) => {
    return (
      <>
        <button className="card-info__button" type="button">
          {text}
        </button>
      </>
    );
}