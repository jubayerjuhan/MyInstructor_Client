import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../core/Button/Button";
import "./HowItWorks.scss";
import carImage from "../../assets/carinstructor.jpg";

const HowItWorks = () => {
  const bullets = [
    {
      title: "Find Your Driving Instructors",
      description:
        "Choose from a wide variety of instructors in your area. Check rating & reviews from real learners.  ",
    },
    {
      title: "Book Your Driving Lessons",
      description:
        "Book online with instant confirmation. Easily manage your lesson schedule via our online dashboard.        ",
    },
    {
      title: "Learn to Drive      ",
      description:
        "Your instructor picks you up from your chosen address and you're on your way 🚗        ",
    },
  ];
  return (
    <section className="how__works-wrapper sectionPadding">
      <div className="how__works">
        <div className="how__works-text">
          <p className="title">How "My Instructor" Works</p>
          <p className="description">
            There are many variations of passages of Lorem Ipsum amet avoilble
            but majority have suffered alteration in some form, by injected
            humur or randomise words which don't sure amet sit dolor quras solo
            dolor.
          </p>
          <div className="how__works-bullets">
            {bullets.map((elem, key) => (
              <div className="how__works-bullet" key={key}>
                <div className="how__works-bullet-icon">
                  <FaCheckCircle size={30} />
                </div>
                <div className="how__works-bullet-body">
                  <p className="title">{elem.title}</p>
                  <p className="description">{elem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="how__works-media">
          <img className="how__works-media-image" src={carImage} alt="" />
        </div>
      </div>
      <Button width="30vw" className="bookbutton" title="Book Now" />
    </section>
  );
};

export default HowItWorks;
