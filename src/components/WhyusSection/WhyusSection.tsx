import React from "react";
import { TiChevronRight } from "react-icons/ti";
import Button from "../core/Button/Button";
import "./WhyusSection.scss";

const WhyusSection = () => {
  const reasons = [1, 2, 3, 4, 5, 6, 6, 5, 3, 2, 2, 2, 1, 2, 3, 3];
  return (
    <section className="whyus__container sectionPadding">
      <p className="title">Why choose "My Instructor"?</p>
      <p className="description">
        Unlike a typical driving school, My Instructor is an Australian first
        platform that allows learner drivers & parents to find, compare and book
        verified driving instructors online. The platform brings transparency,
        choice and efficiency to the selection of a driving instructor and the
        ongoing management of driving lessons.
      </p>
      <div className="whyus__reasons">
        {reasons.map((reason, key) => (
          <div className="whyus__reason" key={key}>
            <div className="icon">
              <TiChevronRight />
            </div>
            <p className="title">
              Largest choice of driving instructors in Australia
            </p>
          </div>
        ))}
      </div>
      <div className="bookbutton">
        <Button title="Book Now" width="30vw"></Button>
      </div>
    </section>
  );
};

export default WhyusSection;
