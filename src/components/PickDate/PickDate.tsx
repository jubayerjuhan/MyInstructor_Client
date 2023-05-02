import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  title: string;
  onChange: (value: any) => any;
}
const PickDate = ({ title, onChange }: Props) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={title} onChange={(val) => onChange(val)} />
      </LocalizationProvider>
    </div>
  );
};

export default PickDate;
