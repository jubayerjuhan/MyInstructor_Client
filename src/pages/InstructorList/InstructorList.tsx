import React from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import Navbar from "../../components/Navbar/Navbar";
import PricingCalculator from "../../components/PricingCalculator/PricingCalculator";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import Switch from "@mui/material/Switch";
import languages from "../../json_data/languages.json";
import "./InstructorList.scss";

const InstructorList = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const checked = {
    isChecked: false,
  };
  return (
    <div className="instructor__list">
      <Navbar />
      {/* <CustomizedSteppers /> */}
      <div className="instructors__main sectionPadding">
        <div className="all-instructors__list">
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
        </div>
        <div className="instructors__filters">
          <div className="time__filter">
            <p className="title">Time</p>
            <p className="filter__content active">Any Time</p>
            <p className="filter__content">AM</p>
            <p className="filter__content">PM</p>
          </div>
          <div className="available__filter">
            <p className="title">Show Available Only</p>
            <Switch {...label} checked={true} />
          </div>
          <div className="language__filter">
            <p className="title">Language</p>
            <select className="form-select" aria-label="Default select example">
              {languages.map((language, key) => (
                <option value={language.name}>{language.name}</option>
              ))}
            </select>
          </div>
        </div>
        <PricingCalculator />
      </div>
    </div>
  );
};

export default InstructorList;
