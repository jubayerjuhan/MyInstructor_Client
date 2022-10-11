import React from "react";
import Rating from "@mui/material/Rating";
import "./InstructorReviewComponent.scss";

const InstructorReviewComponent = () => {
  return (
    <div className="instructor__review">
      <p className="title">Sophie</p>
      <div className="rating">
        <Rating
          name="read-only"
          readOnly
          value={5}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
      </div>
      <p className="description">
        Thank you, Juhan, for all your help! Gave me massive confidence and
        motivational boost and helped me pass my licence test. Also, super
        friendly very easy going and get along with and awesome sense of humour!
      </p>
    </div>
  );
};

export default InstructorReviewComponent;
