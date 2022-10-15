import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./InstructorProfile.scss";
import InstructorProfileInfo from "../../components/InstructorProfileInfo/InstructorProfileInfo";
import Button from "../../components/core/Button/Button";
import InstructorReviews from "../../components/InstructorReviews/InstructorReviews";
import InstructorVehical from "../../components/InstructorVehical/InstructorVehical";
import { useParams } from "react-router-dom";
import { client } from "../../client";
import { Instructor } from "../../typings/instructorTypings";

const InstructorProfile = () => {
  const [instructor, setInstructor] = useState<Instructor>();
  const { id } = useParams();
  useEffect(() => {
    getInsttructor();
  }, []);

  const getInsttructor = async () => {
    try {
      const { data } = await client.get(`/instructor/${id}`);
      setInstructor(data.instructor);
    } catch (error) {
      window.location.replace("/not-found");
    }
  };

  if (!instructor) return <></>;
  return (
    <>
      <Navbar />
      <div className="instructor__profile">
        <div className="instructor__profile-header">
          <div className="profile__header-accentColor"></div>
          <div className="instructor__profile-image">
            <div className="profile__picture-wrapper">
              <img
                src={`${process.env.REACT_APP_IMAGEURL}/${instructor?.avater}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="instructor__profile-main sectionPadding">
          <div className="instructor__profile-left">
            <InstructorProfileInfo instructor={instructor} />
            {/* <InstructorProfilePolicies /> */}
            <div className="instructor__bio">
              <div className="title">Bio</div>
              <p className="description">
                Hi, my name is Glenn. My career has been diverse! I was a Tour
                Guide for 13yrs, operating camping safaris around Australia for
                international and local clients. This involved countless dirt
                roads and highways and driving a range of vehicles from 4WD to
                53 seat coaches. Following this, I moved onto the Australian
                Defence Force where I was a transport specialist. Driving and
                educating employees in cars, buses and trucks, including
                operating specialized equipment for loading and unloading of
                mili...
              </p>
            </div>
            <InstructorVehical instructor={instructor} />
          </div>
          <div className="instructor__profile-right">
            <div className="instructor__action-buttons">
              <Button width="100%" smallFont title="Book Now" />
              <Button
                width="100%"
                smallFont
                title="Check Availability"
                revertColor
              />
            </div>
            <InstructorReviews />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstructorProfile;
