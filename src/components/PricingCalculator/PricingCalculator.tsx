import React from "react";
import "./PricingCalculator.scss";

const PricingCalculator = () => {
  const lessons = [{}, { saving: 30 }, { saving: 20 }];
  return (
    <div className="pricing__calculator">
      <div className="lesson__pricing">
        <p className="title">Driving Lesson Pricing</p>
        <p className="small__description">How Many Lessons Do You Need</p>
        <div className="lessons__list">
          {lessons.map((lesson) => (
            <div className="lesson__info">
              <p className="lesson__duration">1-5 hrs</p>
              <p className="lesson__price">30$/hr</p>
              {lesson.saving && (
                <p className="saving__tips">Save {lesson.saving}%</p>
              )}
            </div>
          ))}
        </div>
        <p className="tip__suggestion">
          * You can book 1 hr or 2 hr driving lessons
        </p>
      </div>
      <div className="lesson__calculator">
        <p className="title">Price Calculator</p>
        <div className="calculator__select">
          <select name="" id="">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
          </select>
          <p className="description">/hrs</p>
        </div>
        <div className="total__lesson-price">
          <p className="title">$340 Total</p>
        </div>
      </div>
      <div className="test__package">
        <p className="title">Test Package</p>
        <p className="price">$120</p>
        <ul className="feature__list">
          <li className="feature">Pick up & drop off</li>
          <li className="feature">Pre-test lesson</li>
          <li className="feature">Use of car for test</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCalculator;
