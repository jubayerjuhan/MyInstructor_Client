import React from "react";
import image from "../../assets/learner.png";
import "./TestPackageBanner.scss";

const TestPackageBanner = () => {
  return (
    <div className="test__package-banner-wrapper">
      <p className="title">Test Package</p>
      <div className="test__package-banner">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="information">
          <ul className="menu__qualities">
            <li className="quality">Pick-up 1hr prior to test start time</li>
            <li className="quality">45 min pre-test warm up</li>
            <li className="quality">
              Use of instructors vehicle to sit the test
            </li>
            <li className="quality">
              Drop-off after the test result is received
            </li>
          </ul>
          <p className="title">Price: $199</p>
        </div>
      </div>
    </div>
  );
};

export default TestPackageBanner;
