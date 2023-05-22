import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import "./BookingCalander.scss";
import { useCallback, useEffect, useState } from "react";
import { getInstructorBookings } from "../../api_calls/instructor_api";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import { bookingToEventFormatter } from "./eventFormatter";
import Button from "../../components/core/Button/Button";
import EventAddTimeSelector from "../../components/EventAddTimeSelector/EventAddTimeSelector";

export interface Event {
  title: string;
  start?: any;
  end?: any;
}
const Bookingcalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
    <div className="booking_calendar">
      <div className="calendar__wrapper">
        <Button
          title={"Add Closed Event"}
          width={"200px"}
          style={{ marginBottom: 10 }}
          onClick={() => setModalOpen(true)}
        />
        <EventAddTimeSelector open={modalOpen} setOpen={setModalOpen} />
        <h4 className="calendar__header" style={{ marginTop: 20 }}>
          Bookings calendar
        </h4>
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" className="calendar" />
      </div>
    </div>
  );
};

export default Bookingcalendar;
