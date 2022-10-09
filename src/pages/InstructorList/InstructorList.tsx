import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PricingCalculator from "../../components/PricingCalculator/PricingCalculator";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import "./InstructorList.scss";

const InstructorList = () => {
  return (
    <div className="instructor__list">
      <Navbar />
      <CustomizedSteppers />
      <div className="instructors__main sectionPadding">
        <div></div>
        <PricingCalculator />
      </div>
    </div>
  );
};

export default InstructorList;
