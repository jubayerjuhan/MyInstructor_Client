/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./HeroSection.scss";
import { client } from "../../client";
import Button from "../core/Button/Button";

interface Suburb {
  suburb: string;
  state: string;
  postcode: number;
}
const HeroSection = () => {
  const [suburbs, setSuburbs] = useState<Suburb[]>([]);
  const [keyWord, setkeyWord] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const transmissions = [
    { name: "Auto", value: "Auto" },
    { name: "Manual", value: "Manual" },
  ];
  const [transmission, setTransmission] = useState({
    name: "",
    value: "",
  });

  useEffect(() => {
    setTransmission(transmissions[0]);
  }, []);

  useEffect(() => {
    getSuburbs();
  }, [keyWord]);

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyWord(e.target.value);
    setInputValue(e.target.value);
  };

  const getSuburbs = async () => {
    if (keyWord.length === 0) setSuburbs([]);
    if (keyWord.length < 2) return;
    const { data } = await client.get(`/search-suburbs/${keyWord}`);
    setSuburbs(data.suburbs);
  };

  return (
    <section className="heroSection sectionPadding">
      <div className="heroSection__textContainer">
        <p className="heroSection__title">
          Where do you need a driving instructor?
        </p>
        <ul className="heroSection__bullets">
          <li>Choose from 800+ verified instructors</li>
          <li>100,000+ new learners per year</li>
          <li>24/7 online booking & rescheduling</li>
          <li>Change your instructor anytime</li>
        </ul>
      </div>
      <div className="heroSection__selector">
        <div className="heroSection__transmission">
          {transmissions.map((trans, key) => (
            <div
              className={`transmission__name ${
                transmission?.name === trans.name ? "selected" : ""
              }`}
              key={key}
              onClick={() => setTransmission(trans)}
            >
              <p>{trans.name}</p>
            </div>
          ))}
        </div>
        <div className="heroSection__subrub-selector">
          <input
            onChange={handleInputChange}
            value={inputValue}
            onFocus={() => setListOpen(true)}
            onBlur={() => {
              setTimeout(function () {
                setListOpen(false);
              }, 500);
            }}
            type="text"
            className="subrub__input"
            placeholder="Enter Your Subrub"
          />
          {listOpen && (
            <div
              className="subrubs__list"
              onFocus={() => setListOpen(true)}
              onClick={() => console.log("first")}
            >
              {suburbs.length === 0 && (
                <p className="suburb__list-name-title">
                  Enter Suburb Name or Postcode
                </p>
              )}
              {suburbs.map((suburb, key) => (
                <p
                  onClick={() =>
                    setInputValue(
                      `${suburb.suburb} ${suburb.state} ${suburb.postcode}`
                    )
                  }
                  className="suburb__list-name"
                  key={key}
                >{`${suburb.suburb} ${suburb.state} ${suburb.postcode}`}</p>
              ))}
            </div>
          )}
        </div>
        <div className="suburb__submit-btn">
          <Button
            className="submit__suburb"
            title="Submit"
            width="100%"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
