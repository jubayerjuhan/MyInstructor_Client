import React from "react";
import "./InstructorCard.scss";
import { BiCalendar } from "react-icons/bi";
import Button from "../core/Button/Button";
import { Instructor } from "../../typings/instructorTypings";
import { useDispatch } from "react-redux";
import { SET_INSTRUCTOR } from "../../redux/reducer/reduxNamings";

interface InstructorCardProps {
  instructor: Instructor;
}
const InstructorCard = ({ instructor }: InstructorCardProps) => {
  const dispatch = useDispatch();

  // handle booking now
  const handleBookNow = () => {
    dispatch({ type: SET_INSTRUCTOR, payload: instructor });
    window.location.href = "/booking";
  };
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
              (window.location.href = `/instructor-profile/${instructor._id}`)
            }
          />
          <Button
            width="100%"
            smallFont
            title="Book Now"
            onClick={handleBookNow}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
