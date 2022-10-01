import React, { useState } from "react";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import "./FaqComponent.scss";

const FaqComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq__component">
      <div
        className={`faq__header ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="faq__title">
          <div className="icon">
            <GiSteeringWheel />
          </div>
          <p className="title">
            How many lessons will I need to learn to drive?
          </p>
        </div>
        <div className="chevron__icon">
          {open ? <BsArrowDown /> : <BsArrowRight />}
        </div>
      </div>
      <div className={`faq__body ${open ? "active " : ""}`}>
        <p className="description">
          Lorem ipsum dolor sit amet consec tetur adipisicing elit. Quisquam sit
          laborum est aliquam. Dicta fuga soluta eius exercitationem porro modi.
          Exercitationem eveniet aliquam repudiandae sequi.
        </p>
      </div>
    </div>
  );
};

export default FaqComponent;
