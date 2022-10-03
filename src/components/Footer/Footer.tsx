import React from "react";
import Button from "../core/Button/Button";
import "./Footer.scss";

const Footer = () => {
  const cities = [
    "Sydeny",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelade",
    "Hobert",
    "Canaberra",
  ];

  const resources = [
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Become and Instructor", link: "/apply-instructor" },
  ];

  const driveLinks = [
    { name: "Driving Lessons", link: "/driving-lessons" },
    { name: "Test Packages", link: "/test-package" },
    { name: "Gift Vouchers", link: "/gift-vouchers" },
  ];
  return (
    <div className="footer__component sectionPadding">
      <div className="footer__intro">
        <p className="footer__title">Who is EzLicence?</p>
        <p className="description">
          EzLicence takes the hassle out of choosing a driving school by helping
          learner drivers find, compare and book verified driving instructors
          online. The EzLicence online platform brings transparency, choice and
          efficiency to booking and managing driving instructors and driving
          lessons in Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Gold
          Coast, Sunshine Coast, Newcastle, Central Coast, Geelong, Toowoomba,
          Wollongong, Cairns, Coffs Harbour, Bendigo, Canberra.
        </p>
      </div>
      <div className="footer__tests">
        <p className="footer__title">Learners Tests Online</p>
        <a href="/knowledge-test" className="footer__link">
          Free Knowledge Test
        </a>
        <div className="footer__instructor-city">
          <p className="footer__title">Driving Instructors by City</p>
          <div className="footer__instructor-cities">
            {cities.map((city, key) => (
              <a
                href={`/driving-lessons/${city.toLowerCase()}`}
                className="footer__link"
                key={key}
              >
                {city} Driving Instructors
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__resources">
        <p className="footer__title">Resources</p>
        <div className="footer__resource-wrapper">
          {resources.map((res, key) => (
            <a href={res.link} className="footer__link" key={key}>
              {res.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__drive-links">
        <p className="footer__title">Learn To Drive</p>

        <Button title="Book now" />
        <div className="footer__drive-links">
          {driveLinks.map((driveLink, key) => (
            <a href={driveLink.link} className="footer__link">
              {driveLink.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
