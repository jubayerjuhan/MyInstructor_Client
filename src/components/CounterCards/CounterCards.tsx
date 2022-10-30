import React from "react";
import "./CounterCards.scss";

interface CounterCardsProps {
  title: string;
  count: number | string;
  icon: any;
}
const CounterCards = ({ title, count, icon }: CounterCardsProps) => {
  return (
    <div className="counter__card">
      <div className="info__section">
        <p className="title">{title}</p>
        <p className="description">{count}</p>
      </div>
      <div className="icon">{icon}</div>
    </div>
  );
};

export default CounterCards;
