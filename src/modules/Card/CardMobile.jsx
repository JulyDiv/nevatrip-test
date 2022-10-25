import React from "react";
import { useState } from "react";
import { CardButton } from "../../components/CardButton";
import { CardButtonShowMore } from "../../components/CardButtonShowMore";
import { CardListItem } from "../../components/CardListItem";
import { ImageCard } from "../../components/ImageCard";

export const CardMobile = ({ item }) => {
    const [showMoreBtn, setShowMoreBtn] = useState(false);
    const onClick = () => {
      setShowMoreBtn(true);
    };
    const tripTimes = item.timeData.map((item) => (
      <span key={item.id} className="card-list__time-item">
        {item.timeTravel}
      </span>
    ));
  return (
    <>
      <div key={item.id} className="card">
        {item.label
          ? item.price === 900 && (
              <div className="card-label card-label--yellow">{item.label}</div>
            )
          : ""}
        {item.label
          ? item.price === 2900 && (
              <div className="card-label card-label--purple">{item.label}</div>
            )
          : ""}
        <ImageCard img={item.img} />
        <div className="card-wrapper">
          <h1 className="card__title">{item.title}</h1>

          <span className="card__time">{item.time}</span>

          <ul className="card-list">
            <CardListItem description={item.description} />
            <div className="card-list__time">
              {tripTimes.length <= 4 ? (
                tripTimes
              ) : (
                <>
                  {tripTimes.slice(0, 3)}
                  {!showMoreBtn && (
                    <CardButtonShowMore text="еще..." onClick={onClick} />
                  )}
                  {showMoreBtn && tripTimes.slice(3)}
                </>
              )}
            </div>
          </ul>

          <div className="card-info">
            <div className="card-info__price">
              <span className="card-info__price-price">{item.price} ₽</span>
              <span className="card-info__price-pier">
                {item.pricePier} ₽ на причале
              </span>
            </div>
            <CardButton text="Подробнее" />
          </div>
        </div>
      </div>
    </>
  );
};
