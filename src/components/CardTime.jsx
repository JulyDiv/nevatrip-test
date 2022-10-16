import React from "react";

export const CardTime = ({ timeData }) => {
    return (
      <>
      {timeData.map((item) => (
        <span key={item.id} className="card-time__list">{item.timeTravel}</span>
      ))}
      </>
    );
}