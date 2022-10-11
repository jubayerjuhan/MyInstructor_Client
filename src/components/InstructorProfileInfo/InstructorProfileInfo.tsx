import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { MdFlashAuto } from "react-icons/md";
import { AiFillStar, AiOutlineIdcard, AiOutlineCar } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";

import "./InstructorProfileInfo.scss";
const InstructorProfileInfo = () => {
  const instructorQualities = [
    { label: " Driving Instructor's Licence ", icon: <AiOutlineIdcard /> },
    { label: "  Instructed for 2.3 years    ", icon: <AiOutlineCar /> },
    { label: "  Spoken language(s)     ", icon: <IoLanguage /> },
  ];
  return (
    <div className="instructor__profile-info">
      <p className="name">Jubayer Hossain Juhan</p>
      <div className="emoji__info">
        <div className="em-info">
          <BsGenderMale />
          <p className="title">Male</p>
        </div>
        <div className="em-info">
          <TbManualGearbox />
          <p className="title">Manual</p>
        </div>
        <div className="em-info">
          <AiFillStar />
          <p className="title">4.6 Ratings</p>
        </div>
      </div>
      <div className="instructor__qualities-wrapper">
        {instructorQualities.map((quality, key) => {
          return (
            <div className="instructor__quality-opt">
              <div className="icon">{quality.icon}</div>
              <div className="title">{quality.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorProfileInfo;
