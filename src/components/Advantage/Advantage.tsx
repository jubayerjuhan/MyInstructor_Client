import React from "react";
import Button from "../core/Button/Button";
import FaqComponent from "../FAQ/FaqComponent";
import "./Advantage.scss";
import { GiSteeringWheel } from "react-icons/gi";

const Advantage = () => {
  const faqs = [1, 2, 3, 4, 5];
  return (
    <section className="advantage__section sectionPadding">
      <p className="title">My Instructor Advantage</p>
      <div className="advantage__list">
        {faqs.map((faq, key) => {
          return <FaqComponent key={key} icon={<GiSteeringWheel />} />;
        })}
      </div>
      <div className="bookbutton">
        <Button title="Book Now" width="30vw" />
      </div>
    </section>
  );
};

export default Advantage;
