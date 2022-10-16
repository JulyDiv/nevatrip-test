/* eslint-disable @next/next/no-img-element */
// import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Card } from "../modules/Card/Card";
import dbCard from "../DBcard";

export default function Home() {
  const [card, setCard] = useState(dbCard);
  return (
    <>
      <section className="desktop">
        <div className="container">
          {card.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </section>

      <section className="mobile">
        <div className="container">
          <div className="card">
            <div className="label label-yellow">Новинка</div>
            <div className="card-image">
              <img
                src="img/mobile-image-1.jpeg"
                alt="photo: Saint Petersburg"
              />
            </div>
            <div className="card-content">
              <div className="title">
                АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop
                on Hop Off 2019
              </div>

              <div className="duration">2 часа</div>

              <ul className="advantages-list list">
                <li className="advantage-item list-item">
                  Билет на целый день
                </li>

                <li className="advantage-item list-item">
                  Неограниченное число катаний
                </li>

                <li className="advantage-item list-item">
                  6 остановок у главных достопримечательностей
                </li>

                <li className="advantage-item list-item">
                  Ближайший рейс сегодня
                  <ul className="time-list">
                    <li className="time-list-record">12:00</li>
                    <li className="time-list-record">12:00</li>
                    <li className="time-list-record">12:00</li>
                    <li className="time-list-record">12:00</li>
                  </ul>
                </li>
              </ul>

              <div className="info">
                <div className="info-price">
                  <div className="price">
                    <span>900</span> ₽
                  </div>
                  <div className="price-pier">
                    <span>1200</span> ₽ на причале
                  </div>
                </div>

                <button className="details" type="button">
                  Подробнее
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="label label-purple">Новинка</div>
            <div className="card-image">
              <img
                src="img/mobile-image-1.jpeg"
                alt="photo: Saint Petersburg"
              />
            </div>
            <div className="card-content">
              <div className="title">
                АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop
                on Hop Off 2019
              </div>

              <div className="duration">2 часа</div>

              <ul className="advantages-list list">
                <li className="advantage-item list-item">
                  Билет на целый день
                </li>

                <li className="advantage-item list-item">
                  Неограниченное число катаний
                </li>

                <li className="advantage-item list-item">
                  6 остановок у главных достопримечательностей
                </li>

                <li className="advantage-item list-item">
                  Ближайший рейс сегодня
                  <ul className="time-list">
                    <li className="time-list-record">12:00</li>
                    <li className="time-list-record">12:00</li>
                    <li className="time-list-record">12:00</li>
                    <li className="time-list-record">12:00</li>
                  </ul>
                </li>
              </ul>

              <div className="info">
                <div className="info-price">
                  <div className="price">
                    <span>2900</span> ₽
                  </div>
                  <div className="price-pier">
                    <span>1200</span> ₽ на причале
                  </div>
                </div>

                <button className="details" type="button">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
