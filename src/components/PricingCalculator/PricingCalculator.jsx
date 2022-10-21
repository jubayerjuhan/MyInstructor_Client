import React, { useEffect, useState } from "react";
import Button from "../core/Button/Button";
import "./PricingCalculator.scss";

const PricingCalculator = ({ cart }) => {
  const lessonPrice = 80;
  const hoursArray = Array.from(Array(101).keys());
  const [totalLessonPrice, setTotalLessonPrice] = useState(lessonPrice);
  let discountPercent = 0;

  const calculateHoursPrice = (e) => {
    const hours = e.target.value;

    if (hours > 5) discountPercent = 5;
    if (hours > 9) discountPercent = 10;

    const price = lessonPrice - (discountPercent / 100) * lessonPrice;
    setTotalLessonPrice(hours * price);
  };

  const lessons = [
    {
      title: "1-5",
      discountPercentage: 0,
    },
    {
      title: "6-9",
      discountPercentage: 5,
    },
    {
      title: "10-19",
      discountPercentage: 10,
    },
  ];

  // handle purchase click
  const handlePurchaseClick = () => {
    console.log(totalLessonPrice, typeof totalLessonPrice);
  };
  return (
    <div className="pricing__calculator">
      <div className="lesson__pricing">
        <p className="title">Driving Lesson Pricing</p>
        <p className="small__description">How Many Lessons Do You Need</p>
        <div className="lessons__list">
          {lessons.map((lesson, key) => {
            const calculatedPrice =
              lessonPrice - (lesson.discountPercentage / 100) * lessonPrice;
            return (
              <div className="lesson__info" key={key}>
                <p className="lesson__duration">{lesson.title} hrs</p>
                <p className="lesson__price">{calculatedPrice}$/hr</p>
                {lesson.discountPercentage > 0 && (
                  <p className="discount__tooltip">
                    Save {lesson.discountPercentage}%
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <p className="tip__suggestion">
          * You can book 1 hr or 2 hr driving lessons
        </p>
      </div>
      <div className="lesson__calculator">
        <p className="title">Price Calculator</p>
        <div className="calculator__select">
          <select name="" id="" onChange={calculateHoursPrice}>
            {hoursArray.map((hour, key) => {
              if (hour <= 0) return null;
              return (
                <option value={hour} key={key}>
                  {hour}
                </option>
              );
            })}
          </select>
          <p className="description">/hrs</p>
        </div>
        <div className="total__lesson-price">
          <p className="title">${totalLessonPrice} Total</p>
        </div>
      </div>
      {!cart && (
        <div className="test__package">
          <p className="title">Test Package</p>
          <p className="price">$120</p>
          <ul className="feature__list">
            <li className="feature">Pick up & drop off</li>
            <li className="feature">Pre-test lesson</li>
            <li className="feature">Use of car for test</li>
          </ul>
        </div>
      )}
      {cart && (
        <div className="pricing__calculator-buttons">
          <Button
            width={"100%"}
            title={`Continue For $${totalLessonPrice}`}
            onClick={handlePurchaseClick}
          />
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;
