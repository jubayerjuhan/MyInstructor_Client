import React from "react";
import { AiFillStar } from "react-icons/ai";
import InstructorReviewComponent from "../InstructorReviewComponent/InstructorReviewComponent";
import "./InstructorReviews.scss";

const InstructorReviews = () => {
  return (
    <div className="instructor__reviews">
      <div className="title">
        <p className="text">Reviews</p>
        <div className="icon">
          <AiFillStar />
        </div>
        <p className="text">4.5</p>
      </div>
      <p className="description">37 ratings</p>
      <div className="instructor__all-reviews">
        <InstructorReviewComponent />
        <InstructorReviewComponent />
        <InstructorReviewComponent />
      </div>
    </div>
  );
};

export default InstructorReviews;
