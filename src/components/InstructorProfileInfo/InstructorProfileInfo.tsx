import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { MdFlashAuto } from "react-icons/md";
import { AiFillStar, AiOutlineIdcard, AiOutlineCar } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import moment from "moment";

import "./InstructorProfileInfo.scss";
import { Instructor } from "../../typings/instructorTypings";

export interface InstructorProfileProps {
  instructor: Instructor;
}
const InstructorProfileInfo = ({ instructor }: InstructorProfileProps) => {
  console.log(instructor);
  console.log();
  const instructorQualities = [
    { label: " Driving Instructor's Licence ", icon: <AiOutlineIdcard /> },
    { label: " Children Check Licence ", icon: <AiOutlineIdcard /> },
    // {
    //   label: `Started Instructing ${moment(instructor.createdAt).fromNow()}`,
    //   icon: <AiOutlineCar />,
    // },
    {
      label: "  Spoken language(s)     ",
      icon: <IoLanguage />,
      languages: instructor.languages,
    },
  ];
  return (
    <div className="instructor__profile-info">
      <p className="name">
        {instructor.firstName} {instructor.lastName}
      </p>
      <div className="emoji__info">
        <div className="em-info">
          {instructor.gender === "Female" ? (
            <BsGenderFemale />
          ) : (
            <BsGenderMale />
          )}

          <p className="title">{instructor.gender}</p>
        </div>
        <div className="em-info">
          {instructor.transmissionType === "Auto" ? (
            <MdFlashAuto />
          ) : (
            <TbManualGearbox />
          )}
          <p className="title">{instructor.transmissionType}</p>
        </div>
        <div className="em-info">
          <AiFillStar />
          <p className="title">4.6 Ratings</p>
        </div>
      </div>
      <div className="instructor__qualities-wrapper">
        {instructorQualities.map((quality, key) => {
          return (
            <div className="instructor__quality-opt" key={key}>
              <div className="icon">{quality.icon}</div>
              <div className="titleWrapper">
                <div className="title">{quality.label}</div>
                {quality?.languages?.map((language, key) => {
                  return (
                    <p className="language" key={key}>
                      {language}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorProfileInfo;
