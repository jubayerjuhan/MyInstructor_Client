import React from "react";
import Button from "../core/Button/Button";
import FaqComponent from "../FAQ/FaqComponent";
import "./FaqSection.scss";

const FaqSection = () => {
  return (
    <section className="faq__section sectionPadding">
      <p className="title">Top Frequently Asked Questions</p>
      <div className="faq__list">
        <FaqComponent />
        <FaqComponent />
        <FaqComponent />
        <FaqComponent />
        <FaqComponent />
        <FaqComponent />
      </div>
      <div className="bookbutton">
        <Button title="Book Now" width="30vw" />
      </div>
    </section>
  );
};

export default FaqSection;
