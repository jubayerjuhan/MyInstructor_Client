import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import Button from "../core/Button/Button";
import "./GetReady.scss";

const GetReady = () => {
  const options = [1, 2, 3, 4, 5, 6];
  return (
    <section className="getReady__section sectionPadding">
      <p className="title">Ready for driving lessons?</p>
      <p className="description">
        My Instructor connects learner drivers with the best driving schools
      </p>
      <div className="getReady__options">
        {options.map((opt, key) => (
          <div className="getReady__option">
            <div className="icon">
              <GiSteeringWheel />
            </div>
            <div className="information">
              <p className="title">Learner drivers</p>
              <p className="description">
                Gain experience, prepare for your driving test and complete log
                book hours.
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button title="Book Now" width="30vw"></Button>
    </section>
  );
};

export default GetReady;
