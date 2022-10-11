import React from "react";
import VehicalImage from "../../assets/reviewavater.jpg";
import "./InstructorVehical.scss";

const InstructorVehical = () => {
  return (
    <div className="instructor__vehical">
      <p className="title">Vehical Information</p>
      <div className="vehical__info">
        <div className="image">
          <img src={VehicalImage} alt="" />
        </div>
        <div className="information">
          <p className="name">Hyundai Accent 2018 (Auto)</p>
          <p className="transmission">Auto Transmission</p>
          <p className="numberPlate">682YEL</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorVehical;
