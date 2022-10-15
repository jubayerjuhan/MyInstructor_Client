import React from "react";
import "./InstructorCard.scss";
import { BiCalendar } from "react-icons/bi";
import Button from "../core/Button/Button";
import { Instructor } from "../../typings/instructorTypings";

interface InstructorCardProps {
  instructor: Instructor;
}
const InstructorCard = ({ instructor }: InstructorCardProps) => {
  console.log(instructor);
  return (
    <div className="instructor__card">
      <div className="instructor__image">
        <img
          src={`${process.env.REACT_APP_IMAGEURL}/${instructor.avater}`}
          alt=""
        />
      </div>
      <div className="instructor__info">
        <p className="name">
          {instructor.firstName} {instructor.lastName}
        </p>
        <p className="language">
          {instructor.firstName} Speaks
          {instructor.languages.map((lang, key) => (
            <span key={key}>{lang}</span>
          ))}
        </p>
        <div className="availability">
          <BiCalendar />
          <p className="title">Check Availability</p>
        </div>
        <div className="buttons">
          <Button
            width="100%"
            smallFont
            title="View Profile"
            revertColor
            onClick={() =>
              window.location.replace(`/instructor-profile/${instructor._id}`)
            }
          />
          <Button width="100%" smallFont title="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
