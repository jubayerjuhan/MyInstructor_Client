import React, { useEffect, useState } from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import Navbar from "../../components/Navbar/Navbar";
import PricingCalculator from "../../components/PricingCalculator/PricingCalculator";
// import CustomizedSteppers from "../../components/Stepper/Stepper";
import Switch from "@mui/material/Switch";
import languages from "../../json_data/languages.json";
import "./InstructorList.scss";
import { useParams } from "react-router-dom";
import { searchInstructor } from "../../api_calls/instructor_list";
import { client } from "../../client";
import { Suburb } from "../../typings/instructorTypings";

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);
  const [language, setLanguage] = useState<any>(null);
  const [suburbInfo, setSuburbInfo] = useState<Suburb>({
    _id: "",
    postcode: "",
    suburb: "",
    state: "",
  });

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const { postCode, transmission, suburb } = useParams();

  useEffect(() => {
    getInstructors();
    getSuburbInfo();
  }, []);

  const getInstructors = async () => {
    const instructors = await searchInstructor(postCode, transmission);
    setInstructors(instructors);
  };

  const getSuburbInfo = async () => {
    const { data } = await client.get(`/search-suburbs/${suburb}`);
    setSuburbInfo(data?.suburbs[0]);
  };

  console.log(suburbInfo);

  return (
    <div className="instructor__list">
      <Navbar />
      {/* <CustomizedSteppers /> */}
      <div className="instructors__main sectionPadding">
        <div className="all__instructors-wrapper">
          <p className="title">
            Found {instructors.length} Instructors In{" "}
            {suburbInfo?.suburb ? suburbInfo?.suburb : "In Your Area"}
          </p>
          <div className="all-instructors__list">
            {instructors.map((instructor, key) => {
              return <InstructorCard instructor={instructor} key={key} />;
            })}
          </div>
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
            <select
              className="form-select"
              aria-label="Language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((language, key) => (
                <option value={language.name}>{language.name}</option>
              ))}
            </select>
          </div>
        </div>
        <PricingCalculator cart={false} />
      </div>
    </div>
  );
};

export default InstructorList;
