import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Button from "../core/Button/Button";
import { TextField } from "@mui/material";
import moment from "moment";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "350px",
  p: 3,
  borderRadius: 2,
};

export default function EventAddTimeSelector() {
  const [event, setEvent] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateChange = (fieldName, e) => {
    setEvent({ ...event, [fieldName]: moment(e) });
  };

  const saveEvent = () => {
    console.log(event);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              id="outlined-basic"
              label="Event Name"
              variant="outlined"
              onChange={(e) => setEvent({ ...event, eventName: e.target.value })}
            />
            <DemoItem label="Start Time">
              <MobileDateTimePicker onChange={(e) => handleDateChange("startTime", e)} />
            </DemoItem>
            <DemoItem label="End Time">
              <MobileDateTimePicker onChange={(e) => handleDateChange("to", e)} />
            </DemoItem>
          </LocalizationProvider>
          <Button width={"100%"} onClick={saveEvent} />
        </Box>
      </Modal>
    </div>
  );
}
