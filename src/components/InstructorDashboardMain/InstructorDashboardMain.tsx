import React, { useEffect, useState } from "react";
import "./InstructorDashboardMain.scss";
import "../LearnerDashboardMain/LearnerDashboardMain.scss";
import CounterCards from "../CounterCards/CounterCards";
import { BsCurrencyDollar } from "react-icons/bs";
import DashboardBookingsContainer from "../../DashboardBookingsContainer/DashboardBookingsContainer";
import { getInstructorBookings } from "../../api_calls/instructor_api";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import { BookingTypeBack } from "../../typings/bookingsType";

const InstructorDashboardMain = ({ setActiveRoute }: any) => {
  const [bookings, setBookings] = useState<BookingTypeBack[]>([]);
  const [upcomingBookings, setUpcomingBookings] = useState<BookingTypeBack[]>();
  const [pendingBookings, setPendingBookings] = useState<BookingTypeBack[]>();
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state: State) => state.user);
  useEffect(() => {
    getBookingsByInstructor();
  }, []);
  useEffect(() => {
    countUpcomingBookings();
  }, [bookings]);

  const getBookingsByInstructor = async () => {
    setLoading(true);
    const bookings = await getInstructorBookings(user._id);
    setBookings(bookings);
    setLoading(false);
  };

  // count upcoming bookings
  const countUpcomingBookings = () => {
    const uBookings: BookingTypeBack[] = [];
    const penBookings: BookingTypeBack[] = [];

    bookings?.forEach((booking) => {
      if (Date.parse(booking.time.from) > Date.now()) {
        uBookings.push(booking);
      }
      if (booking.status === "Pending") {
        penBookings.push(booking);
      }
    });
    setUpcomingBookings(uBookings);
    setPendingBookings(penBookings);
  };

  console.log(bookings, upcomingBookings);
  return (
    <div className="instructor__dashboard-main">
      <div className="dashboard__counters-instructor dashboard__padding">
        <p className="title">Dashboard Information</p>
        <div className="ldash__counters">
          <CounterCards
            title={"Pending Bookings"}
            count={pendingBookings ? pendingBookings.length : 0}
            icon={<BsCurrencyDollar />}
          />
          <CounterCards
            title={"Upcoming Bookings"}
            count={upcomingBookings ? upcomingBookings.length : 0}
            icon={<BsCurrencyDollar />}
          />
          <CounterCards
            title={"Withdraw Available"}
            count={`0 hr`}
            icon={<BsCurrencyDollar />}
          />
        </div>
        <div className="dash__bookings-list">
          <DashboardBookingsContainer
            loading={loading}
            instructor
            setActiveRoute={setActiveRoute}
            title={"Upcoming Bookings"}
            bookings={upcomingBookings ? upcomingBookings : []}
          />
          <DashboardBookingsContainer
            loading={loading}
            instructor
            setActiveRoute={setActiveRoute}
            title={"Bookings History Bookings"}
            bookings={bookings ? bookings : []}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardMain;
