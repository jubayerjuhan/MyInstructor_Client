import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Review } from "../../typings/instructorTypings";
import InstructorReviewComponent from "../InstructorReviewComponent/InstructorReviewComponent";
import "./InstructorReviews.scss";

interface InstructorReviewsProps {
  reviews: Review[];
}
const InstructorReviews = ({ reviews }: InstructorReviewsProps) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="instructor__reviews">
      <div className="title">
        <p className="text">Reviews</p>
        <div className="icon">
          <AiFillStar />
        </div>
        <p className="text">
          {reviews.length > 0 ? "Rating" : "Not Yet Rated"}
        </p>
      </div>
      <p className="description">{reviews.length} Reviews</p>
      <div className="instructor__all-reviews">
        {reviews.map((review, key) => {
          if (!showAll && key > 4) return <></>;
          return <InstructorReviewComponent review={review} />;
        })}
      </div>
      <p className="show__all-btn" onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "Less" : "All"}
      </p>
    </div>
  );
};

export default InstructorReviews;
