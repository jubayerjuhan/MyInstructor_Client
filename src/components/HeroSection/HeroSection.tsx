import React, { useState, useEffect } from "react";
import "./HeroSection.scss";
import Select from "react-select";
import subrubs from "../../json_data/australiaSubrubs.json";

const HeroSection = () => {
  const transmissions = [
    { name: "Auto", value: "Auto" },
    { name: "Manual", value: "Manual" },
  ];
  const [transmission, setTransmission] = useState({
    name: "",
    value: "",
  });

  const options = [{ value: "null", label: "Select Subrub" }];

  useEffect(() => {
    setTransmission(transmissions[0]);
  }, []);

  console.log(transmission, "trans");
  return (
    <div className="heroSection sectionPadding">
      <div className="heroSection__textContainer">
        <p className="heroSection__title">
          Where do you need a driving instructor?
        </p>
        <ul className="heroSection__bullets">
          <li>Choose from 800+ verified instructors</li>
          <li>100,000+ new learners per year</li>
          <li>24/7 online booking & rescheduling</li>
          <li>Change your instructor anytime</li>
        </ul>
      </div>
      <div className="heroSection__selector">
        <div className="heroSection__transmission">
          {transmissions.map((trans, key) => (
            <div
              className={`transmission__name ${
                transmission?.name === trans.name ? "selected" : ""
              }`}
              key={key}
              onClick={() => setTransmission(trans)}
            >
              <p>{trans.name}</p>
            </div>
          ))}
        </div>
        <div className="heroSection__subrub-selector">
          <input
            type="text"
            className="subrub__input"
            placeholder="Enter Your Subrub"
          />

          <Select options={subrubs} onChange={(val) => console.log(val)} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
