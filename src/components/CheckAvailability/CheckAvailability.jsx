import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import "./CheckAvailability.scss";
import moment from "moment";
import { getInstructorBookings } from "../../api_calls/instructor_api";
import { FaTimes } from "react-icons/fa";

const CheckAvailability = ({ instructor, setShowModal, visible }) => {
  const [dates, setDates] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [bookedHours, setBookedHours] = useState([]);
  const [bookingEndHours, setBookingEndHours] = useState([]);

  const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  useEffect(() => {
    getDate();
    getBookings();
  }, []);

  const getBookings = async () => {
    const unixBookingTime = [];
    const unixBookingEndTime = [];
    const bookings = await getInstructorBookings(instructor.id);
    setBookings(bookings);

    bookings.forEach((booking) => {
      if (booking?.time?.from) {
        unixBookingTime.push(Date.parse(booking?.time?.from));
        unixBookingEndTime.push(Date.parse(booking?.time?.to));
      }
    });
    setBookedHours(unixBookingTime);
    setBookingEndHours(unixBookingEndTime);
  };

  // get next 30 days
  const getDate = async () => {
    const generatedDates = [0];
    for (let index = 0; index < 30; index++) {
      const date = moment().startOf("day").add(index, "days");
      generatedDates.push(date);
    }
    setDates(generatedDates);
  };

  return (
    <Modal
      open={visible}
      onClose={() => {}}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="chv__modal">
        <FaTimes
          size={30}
          style={{ cursor: "pointer" }}
          className={"times__icon"}
          onClick={() => setShowModal(false)}
        />
        <div className="chv__modal-header">
          <p className="title">Booking Availability Of {instructor?.name}</p>
          <div className="indicator">
            <div className="indicator__child">
              <div className="available"></div>
              <p>Available</p>
            </div>
            <div className="indicator__child">
              <div className="booked"></div>
              <p>Booked Out</p>
            </div>
          </div>
        </div>
        <div className="chv__chart">
          {dates.map((date, key) => {
            if (key === 0) {
              return (
                <div className="chv__chart-column" key={key}>
                  <p className="title">Hours</p>
                  <div className="hours">
                    {hours.map((hour, key) => {
                      return (
                        <p className="hour hourrow" key={key}>
                          {moment()
                            .startOf("day")
                            .add(hour, "hour")
                            .format("LT")}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // showing the rows
            return (
              <div className="chv__chart-column" key={key}>
                <p className="title">{moment(date).format("MMM Do")}</p>
                <div className="hours">
                  {hours.map((hour, key) => {
                    const uhr = moment(date).add(hour, "hour");
                    if (
                      bookedHours.includes(Date.parse(uhr)) ||
                      bookingEndHours.includes(Date.parse(uhr))
                    ) {
                      return <p className="hour booked__hour" key={key}></p>;
                    }
                    return <p className="hour normal__hour" key={key}></p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default CheckAvailability;
