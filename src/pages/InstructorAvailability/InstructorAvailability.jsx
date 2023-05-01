import React, { useEffect, useMemo, useState } from "react";
import availabilityData from "../InstructorAvailability/instructorAvailability.data.json";
import "./instructorAvailability.scss";

//
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import moment from "moment";
import { Button } from "@mui/material";
import { fetchInstructorAvailabilities } from "../../api_calls/instructor_availability";
import { useSelector } from "react-redux";

const InstructorAvailability = () => {
  const { user } = useSelector((state) => state.user);
  const [instructorAvailability, setInstructorAvailability] = useState([]);
  const [slots, setSlots] = useState({
    Monday: [{ startTime: "", endTime: "" }],
    Tuesday: [{ startTime: "", endTime: "" }],
    Wednesday: [{ startTime: "", endTime: "" }],
    Thursday: [{ startTime: "", endTime: "" }],
    Friday: [{ startTime: "", endTime: "" }],
    Saturday: [{ startTime: "", endTime: "" }],
    Sunday: [{ startTime: "", endTime: "" }],
  });

  useEffect(() => {
    fetchInstructorAvailabilities(user._id, setInstructorAvailability);
  }, [user._id]);

  const availabilityByDay = useMemo(() => {
    return instructorAvailability.reduce((acc, cur) => {
      const { day, slots } = cur;
      acc[day] = slots.map((slot) => ({ startTime: slot.startTime, endTime: slot.endTime }));
      return acc;
    }, {});
  }, [instructorAvailability]);

  useEffect(() => {
    setSlots(availabilityByDay);
  }, [availabilityByDay]);

  const addSlot = (day) => {
    setSlots((prevSlots) => {
      const newSlot = { startTime: "", endTime: "" };
      const newSlots = { ...prevSlots };
      newSlots[day.name].push(newSlot);
      return newSlots;
    });
  };

  // remove slot
  const removeSlot = (day, slotIndex) => {
    setSlots((prevSlots) => {
      const newSlots = { ...prevSlots }; // create a new object to avoid mutating the previous state
      newSlots[day.name].splice(slotIndex, 1);
      return newSlots;
    });
  };

  const setStartTime = (time, day, slotIndex) => {
    setSlots((prevSlots) => {
      const newSlots = prevSlots;
      newSlots[day.name][slotIndex].startTime = dayjs(time).format("LT");
      return newSlots;
    });
  };
  const setEndTime = (time, day, slotIndex) => {
    setSlots((prevSlots) => {
      const newSlots = prevSlots;
      newSlots[day.name][slotIndex].endTime = dayjs(time).format("LT");
      return newSlots;
    });
  };

  const submitSlots = () => {
    const slotsArray = [];

    for (const day in slots) {
      const slotsForDay = slots[day];

      slotsForDay.forEach((slot) => {
        const { startTime, endTime } = slot;
        console.log(startTime, "Start Time");
        const formattedStartTime = startTime ? startTime : "";
        const formattedEndTime = endTime ? endTime : "";

        slotsArray.push({
          day,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
        });
      });
    }
  };

  return (
    <div className="availability__page">
      <div className="header">
        <h2 className="title">{availabilityData.title}</h2>
        <p className="description">{availabilityData.description}</p>
      </div>
      <div className="availability__selector">
        {availabilityData.days?.map((day, dayIndex) => {
          return (
            <div className="day__container" key={dayIndex}>
              <p className="day__title">{day.name}</p>
              <div className="slots">
                <Button className="addSlotBtn" onClick={() => addSlot(day)} sx={{ width: 100 }}>
                  Add Slot
                </Button>

                {slots[day.name]?.map((slot, key) => {
                  if (key === 0) return <></>;
                  return (
                    <div className="single_slot" key={key}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="From">
                          <MobileTimePicker
                            onChange={(value) => setStartTime(value, day, key)}
                            views={["hours"]}
                            value={dayjs()
                              .set("hour", dayjs(slot.startTime, "h:mm A").hour())
                              .set("minute", dayjs(slot.startTime, "h:mm A").minute())}
                          />
                        </DemoItem>
                        <DemoItem label="To">
                          <MobileTimePicker
                            onChange={(value) => setEndTime(value, day, key)}
                            views={["hours"]}
                            value={dayjs()
                              .set("hour", dayjs(slot.endTime, "h:mm A").hour())
                              .set("minute", dayjs(slot.endTime, "h:mm A").minute())}
                          />
                        </DemoItem>
                      </LocalizationProvider>

                      <div onClick={() => removeSlot(day, key)}>Cross</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Button onClick={submitSlots} variant="contained">
          Submit Slots
        </Button>
      </div>
    </div>
  );
};

export default InstructorAvailability;
