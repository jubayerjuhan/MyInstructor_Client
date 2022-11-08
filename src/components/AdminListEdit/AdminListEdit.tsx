import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { registerFields } from "../Register/registerInputs";
import { GridRowId } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  type?: string;
  id?: GridRowId;
}
const AdminListEdit = ({ open, type, id }: Props) => {
  let fields: any[] = [];

  if (type === "user") {
    fields = registerFields;
  }

  if (!type) return <></>;
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: "15px" }}
        >
          {`${type?.toUpperCase()} Edit`}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {fields.map((field, key) => {
            return (
              <>
                <input
                  key={key}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="form-control input__element login"
                />
              </>
            );
          })}
        </Box>
      </Box>
    </Modal>
  );
};

export default AdminListEdit;
