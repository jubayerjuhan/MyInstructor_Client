import React, { useState } from "react";
import "./FinancialReporting.scss";
import DatePickerComponent from "../../components/PickDate/PickDate";
import moment from "moment";
import { Button } from "@mui/material";

interface Period {
  from?: Date;
  to?: Date;
}
const FinancialReporting = () => {
  const [period, setPeriod] = useState<Period>();

  const handleChange = (fieldName: string, value: any) => {
    setPeriod({ ...period, [fieldName]: moment(value).toString() });
  };

  console.log(period, "period");
  return (
    <div className="financial__reports">
      <h4 className="header">Financial Reports</h4>
      <p className="description">Select a start and end date to view financial reports between the chosen period.</p>
      <div className="date__selector">
        <DatePickerComponent title="From" onChange={(value) => handleChange("from", value)} />
        <DatePickerComponent title="To" onChange={(value) => handleChange("to", value)} />
        {period?.from && period.to && <Button variant="contained">Filter</Button>}
      </div>
    </div>
  );
};

export default FinancialReporting;
