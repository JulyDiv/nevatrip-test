/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Card } from "../modules/Card/Card";
import dbCard from "../DBcard";
import dbCardMobile from "../DBcardMobile";
import { CardMobile } from "../modules/Card/CardMobile";

export default function Home() {
  const [card, setCard] = useState(dbCard);
  const [cardMobile, setCardMobile] = useState(dbCardMobile);
  return (
    <>
      <section className="desktop">
        <div className="container">
          {card.map((item) => (
            <div key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="mobile">
        <div className="container">
          {cardMobile.map((item) => (
            <div key={item.id}>
              <CardMobile item={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
