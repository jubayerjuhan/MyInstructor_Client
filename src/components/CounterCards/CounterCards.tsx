import React from "react";
import "./CounterCards.scss";
import { BsCurrencyDollar } from "react-icons/bs";

interface CounterCardsProps {
  title: string;
  count: number | string;
}
const CounterCards = ({ title, count }: CounterCardsProps) => {
  return (
    <div className="counter__card">
      <div className="info__section">
        <p className="title">{title}</p>
        <p className="description">{count}</p>
      </div>
      <div className="icon">
        <BsCurrencyDollar />
      </div>
    </div>
  );
};

export default CounterCards;
