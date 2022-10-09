import React from "react";
import InstructorImage from "../../assets/reviewavater.jpg";
import "./InstructorCard.scss";
import { BiCalendar } from "react-icons/bi";
import Button from "../core/Button/Button";

const InstructorCard = () => {
  return (
    <div className="instructor__card">
      <div className="instructor__image">
        <img src={InstructorImage} alt="" />
      </div>
      <div className="instructor__info">
        <p className="name">Jubayer Hossain Juhan</p>
        <p className="language">Jubayer Speaks English</p>
        <div className="availability">
          <BiCalendar />
          <p className="title">Check Availability</p>
        </div>
        <div className="buttons">
          <Button width="100%" smallFont title="View Profile" revertColor />
          <Button width="100%" smallFont title="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
