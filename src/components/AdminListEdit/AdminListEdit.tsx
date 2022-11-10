import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  bookingsField,
  instructorInput,
  registerFields,
} from "../Register/registerInputs";
import "./AdminListEdit.scss";
import TextField from "@mui/material/TextField";
import moment from "moment";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { adminEditUser } from "../../api_calls/Admin/admin_userapi";
import { toast } from "material-react-toastify";
import { adminEditInstructor } from "../../api_calls/Admin/admin_instructors";
import { adminEditBooking } from "../../api_calls/Admin/admin_booking";

interface Props {
  visible: boolean;
  setEditVisible: any;
  type: String;
  item: any;
}
const AdminListEdit = ({ item, type, visible, setEditVisible }: Props) => {
  const [edits, setEdits] = useState({});
  const fields = {
    user: registerFields,
    instructor: instructorInput,
    booking: bookingsField,
  };

  const editFunc = {
    user: adminEditUser,
    instructor: adminEditInstructor,
    booking: adminEditBooking,
  };

  const handleChange = (e: any) => {
    setEdits({ ...edits, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { success, message } = await editFunc[type as keyof typeof editFunc](
      item._id,
      edits
    );
    if (!success) return toast.error(message);
    toast.success("Edited Successfully");
    setEditVisible(false);
  };

  console.info(edits, "edits");
  if (!item || !type) return <></>;

  return (
    <Modal
      open={visible}
      onClose={() => setEditVisible(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={"modal__fields-wrapper"}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Edit
        </Typography>

        <Box className={"model__fields"}>
          {fields[type as keyof typeof fields].map((field, key) => {
            if (field.name === "password") return <></>;
            if (field.type === "select")
              return (
                <>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {field.label}
                  </InputLabel>
                  <Select
                    name={field.name}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={item[field?.name]}
                    onChange={handleChange}
                  >
                    {field?.options &&
                      field.options.map((option, key) => (
                        <MenuItem value={option} key={key}>
                          {option}
                        </MenuItem>
                      ))}
                  </Select>
                </>
              );
            return (
              <TextField
                key={key}
                id="outlined-basic"
                onChange={handleChange}
                name={field?.name}
                defaultValue={
                  field?.type !== "date"
                    ? item[field?.name]
                    : moment(item[field?.name]).calendar()
                }
                label={field.label}
                variant="outlined"
                type={field.type}
                sx={{ width: "100%" }}
              />
            );
          })}
        </Box>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 3, width: "100%" }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default AdminListEdit;
