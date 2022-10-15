import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./BookingPage.scss";
import { CartInstructor } from "../AddToCart/AddToCart";
import Button from "../../components/core/Button/Button";
import { BsCalendar2Date } from "react-icons/bs";
import moment from "moment";
import BookingSelector from "../../components/BookingSelector/BookingSelctor";
const BookingPage = () => {
  const [bookDrivingLesson, setBookDrivingLesson] = useState(false);

  return (
    <div className="booking-page">
      <Navbar />
      <div className="booking-main sectionPadding">
        <div className="booking__wrapper">
          <div className="booking__header">
            <div className="icon">
              <BsCalendar2Date />
            </div>
            <p>Book Now</p>
          </div>
          {bookDrivingLesson ? (
            <BookingSelector />
          ) : (
            <div className="booking__buttons">
              <Button
                revertColor
                width={"100%"}
                title={"Book Driving Lesson"}
                onClick={() => setBookDrivingLesson(true)}
              />
              <Button
                width={"100%"}
                title={"Continue Without Driving Lesson"}
              />
            </div>
          )}
        </div>
        <CartInstructor />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
