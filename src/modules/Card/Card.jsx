import React from "react";
import { CardListItem } from "../../components/CardListItem";
import { CardTime } from "../../components/CardTime";
import { ImageCard } from "../../components/ImageCard";

export const Card = ({
  item
}) => {
  return (
    <>
      <div key={item.id} className="card">
        {item.label ? (
          <div className="card-label card-label--blue">{item.label}</div>
        ) : (
          ""
        )}
        <ImageCard img={item.img} />
        <div className="card-title">
          <h1 className="card-title__title">{item.title}</h1>

          <span className="card__time">{item.time}</span>

          <ul className="card-list">
            <CardListItem description={item.description} />
            <div className="card-time">
              <CardTime timeData={item.timeData} />
            </div>

            {/* <li className="card-list__item">
              {listItem4}
              <div className="card-time">
                <span className="card-time__list">12:00</span>
                <span className="card-time__list">12:00</span>
                <span className="card-time__list">12:00</span>
              </div>
            </li> */}
          </ul>

          <div className="card-info">
            <div className="card-info__price">
              <span className="card-info__price-price">{item.price} ₽</span>
              <span className="card-info__price-pier">
                {item.pricePier} ₽ на причале
              </span>
            </div>
            {/* 
            <button className="card-info__button" type="button">
              {button}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
