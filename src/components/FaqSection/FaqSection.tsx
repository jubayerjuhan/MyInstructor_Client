import React from "react";
import Button from "../core/Button/Button";
import FaqComponent from "../FAQ/FaqComponent";
import "./FaqSection.scss";

const FaqSection = () => {
  const faqs = [1, 2, 3, 4, 5];
  return (
    <section className="faq__section sectionPadding">
      <p className="title">Top Frequently Asked Questions</p>
      <div className="faq__list">
        {faqs.map((faq, key) => {
          return <FaqComponent key={key} />;
        })}
      </div>
      <div className="bookbutton">
        <Button title="Book Now" width="30vw" />
      </div>
    </section>
  );
};

export default FaqSection;
