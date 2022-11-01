import React from "react";
import { AiOutlineOrderedList } from "react-icons/ai";
import { useDispatch } from "react-redux";
import ViewBookingPage from "../pages/ViewBookingPage/ViewBookingPage";
import { SET_ACTIVE_BOOKING } from "../redux/reducer/reduxNamings";
import { BookingTypeBack } from "../typings/bookingsType";
import "./DashboardBookingsContainer.scss";

export interface DashboadsBookingListProps {
  title: string;
  bookings: BookingTypeBack[];
  setActiveRoute?: any;
  instructor?: boolean;
}
const DashboardBookingsContainer = ({
  title,
  bookings,
  setActiveRoute,
  instructor,
}: DashboadsBookingListProps) => {
  const dispatch = useDispatch();

  //handle order click
  const handleOrderClick = (booking: BookingTypeBack) => {
    dispatch({ type: SET_ACTIVE_BOOKING, payload: booking });
    setActiveRoute({
      label: "Upcoming Bookings",
      link: "purchases",
      icon: AiOutlineOrderedList,
      component: ViewBookingPage,
    });
  };
  return (
    <div className="dash__booking-container">
      <p className="title">{title}</p>
      <div className="bookings__list">
        {bookings.map((booking, key) => {
          return (
            <div
              className="dash__booking"
              key={key}
              onClick={() => handleOrderClick(booking)}
            >
              <div className="avater">
                <img
                  src={
                    instructor ? booking.user.avater : booking.instructor.avater
                  }
                  alt=""
                />
              </div>
              <div className="dash__booking-body">
                <p className="title">
                  Booking With{" "}
                  {instructor
                    ? booking.instructor.firstName
                    : booking.user.firstName}
                </p>
                <div className="booking__desc">
                  <p className="time">Time: 3:00PM</p>
                  <p className="time">Status: {booking.status}</p>
                </div>
              </div>
            </div>
          );
        })}
        {bookings.length <= 0 && (
          <div className="booking__list-empty">
            <p className="title">No Bookings Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBookingsContainer;
