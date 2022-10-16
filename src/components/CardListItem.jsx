import React from "react";

export const CardListItem = ({ description }) => {
  return (
    <>
      {description.map((item) => (
        <li key={item.id} className="card-list__item">{item.listItem}</li>
      ))}
    </>
  );
};
