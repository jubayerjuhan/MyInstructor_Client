import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import "./BookingCalander.scss";
import { useCallback, useEffect, useState } from "react";
import { getInstructorBookings } from "../../api_calls/instructor_api";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import { bookingToEventFormatter } from "./eventFormatter";

export interface Event {
  title: string;
  start?: any;
  end?: any;
}
const BookingCalander = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState<Event[]>();
  const { user } = useSelector((state: State) => state.user);

  const getBookings = useCallback(async () => {
    try {
      const res = await getInstructorBookings(user._id);
      const events = bookingToEventFormatter(res);
      setEvents(events);
    } catch (err) {
      console.log(err);
    }
  }, [user._id]);

  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <div className="booking_calander">
      <div className="calander__wrapper">
        <h4 className="calander__header">Bookings Calander</h4>
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" className="calander" />
      </div>
    </div>
  );
};

export default BookingCalander;
