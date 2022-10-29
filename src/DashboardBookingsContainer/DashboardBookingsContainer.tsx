import React from "react";
import avater from "../assets/reviewavater.jpg";
import { BookingTypeBack } from "../typings/bookingsType";
import "./DashboardBookingsContainer.scss";

export interface DashboadsBookingListProps {
  title: string;
  bookings: BookingTypeBack[];
}
const DashboardBookingsContainer = ({
  title,
  bookings,
}: DashboadsBookingListProps) => {
  return (
    <div className="dash__booking-container">
      <p className="title">{title}</p>
      <div className="bookings__list">
        {bookings.map((booking, key) => {
          return (
            <div className="dash__booking" key={key}>
              <div className="avater">
                <img src={avater} alt="" />
              </div>
              <div className="dash__booking-body">
                <p className="title">
                  Booking With {booking.instructor.firstName}
                </p>
                <div className="booking__desc">
                  <p className="time">Time: 3:00PM</p>
                  <p className="time">Status: {booking.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardBookingsContainer;
