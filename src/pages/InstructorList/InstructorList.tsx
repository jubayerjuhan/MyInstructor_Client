import React from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
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
        <div className="all-instructors__list">
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
        </div>
        <PricingCalculator />
      </div>
    </div>
  );
};

export default InstructorList;
