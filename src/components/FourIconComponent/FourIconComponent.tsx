import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Button from "../core/Button/Button";
import "./FourIconComponent.scss";

const FourIconComponent = () => {
  const dynamicqualities = [
    {
      title: "Instructor ratings      ",
      description:
        "Access peer reviews & find an instructor who has consistently provided a great learning experience.        ",
      icon: <AiOutlineStar />,
    },
    {
      title: "Accredited",
      description:
        "We obtain up to date copies of relevant instructor accreditations & verify their working with children credentials.    ",
      icon: <HiOutlineArrowSmRight />,
    },
    {
      title: "Vehicle safety      ",
      description:
        "Gain access to instructor vehicle make, model, year & safety rating.        ",
      icon: <HiOutlineArrowSmRight />,
    },
    {
      title: "Always your choice      ",
      description:
        "Don't like your current instructor? Select a new instructor via our online portal, no questions asked.        ",
      icon: <HiOutlineArrowSmRight />,
    },
  ];
  return (
    <section className="dynamic__qualities-wrapper sectionPadding">
      <div className="dynamic__qualities">
        <p className="title">Book driving lessons with confidence</p>
        <p className="description">Choose a driving instructor you can trust</p>
        <div className="qualities__container">
          {dynamicqualities.map((quality, key) => (
            <div className="dynamic__quality" key={key}>
              <div className="icon">{quality.icon}</div>
              <p className="title">{quality.title}</p>
              <p className="description">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Button title="BOOK NOW" width="30vw" className="bookbutton" />
    </section>
  );
};

export default FourIconComponent;
