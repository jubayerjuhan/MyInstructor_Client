import moment from "moment";
import React, { useState } from "react";
import Button from "../core/Button/Button";
import "./BookingSelctor.scss";
import { toast } from "material-react-toastify";
import { useDispatch } from "react-redux";
import { setBookingInfo } from "../../redux/actions/bookingAction";
import { useNavigate } from "react-router-dom";

const BookingSelector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState();
  const [hours, setHours] = useState([]);
  const lessonDuration = [1, 2];
  const [duration, setDuration] = useState(null);
  const [time, setTime] = useState(null);
  const dates = [];

  const getDate = async () => {
    for (let index = 0; index < 30; index++) {
      const date = moment().add(index, "days");
      dates.push(date);
    }
  };
  getDate();

  // handle duration change
  const handleDurationChange = (e) => {
    setDuration(parseInt(e.target.value));
    setSelectedDate(null);
    setTime(null);
  };

  // handle date change
  const handleDateChange = (e) => {
    const inputDate = JSON.parse(e.target.value);
    setSelectedDate(inputDate);

    const addHour = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const hrs = [];
    if (inputDate) {
      addHour.forEach((hour) => {
        hrs.push(moment(inputDate).add(hour, "hour"));
      });
      setHours(hrs);
    }
  };

  // handle hour change
  const handleHourChange = (e) => {
    const hour = JSON.parse(e.target.value);
    hour.endTo = JSON.parse(
      JSON.stringify(moment(hour.startFrom).add(duration, "hour"))
    );

    setTime(hour);
  };

  // handlesubmit
  const handleSubmit = async () => {
    if (!duration) return toast.error("Please Select Duration");
    if (!selectedDate) return toast.error("Please Select Date");
    if (!time) return toast.error("Please Select Time");
    const booking = {
      duration,
      date: selectedDate,
      time,
    };
    const setBooking = dispatch(setBookingInfo(booking));
    if (setBooking) return navigate("/booking-info");
  };

  return (
    <div className="booking__selector">
      <div className="lesson__duration">
        <p className="title">Lesson Duration</p>
        <div className="form-check lessonDuration__inputs">
          {lessonDuration.map((duration, key) => {
            return (
              <div key={key}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={duration}
                  onChange={handleDurationChange}
                />
                <label className="form-check-label">{duration} Hours </label>
              </div>
            );
          })}
        </div>
        <div className="booking__date-time">
          {duration && (
            <div className="available__date">
              <p className="title">Available Dates</p>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleDateChange}
              >
                <option value={null}>Select Date</option>
                {dates.map((date, key) => {
                  return (
                    <option
                      value={JSON.stringify(moment(date).startOf("day"))}
                      key={key}
                    >
                      {moment(date).format("ll")}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {selectedDate && (
            <div className="available__date">
              <p className="title">Available Time</p>
              <select
                onChange={handleHourChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Hour</option>
                {hours.map((hour, key) => {
                  const fieldValue = {
                    startFrom: hour,
                    // endTo: moment(hour).add(duration, "hour"),
                  };
                  // console.log(fieldValue);
                  return (
                    <option value={JSON.stringify(fieldValue)} key={key}>
                      {moment(hour).format("hh:mm A")} to{" "}
                      {moment(hour).add(duration, "hour").format("hh:mm A")}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
        <div className="submitBtn">
          <Button
            title="Continue Booking"
            width={"100%"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingSelector;
