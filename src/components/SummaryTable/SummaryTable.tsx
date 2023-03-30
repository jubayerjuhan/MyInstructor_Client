import React from "react";
import { Button } from "@mui/material";
import "./summaryTable.scss";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { SummaryTableColumnsType } from "./summaryTableTypes";

const SummaryTable = ({ fields, data }: SummaryTableColumnsType) => {
  return (
    <table>
      <thead>
        <tr>
          {fields.map((field, key) => (
            <th key={key}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>2023-03-30</td>
          <td>Driving Test Prep</td>
          <td>Parallel Parking</td>
          <td>1 hour</td>
          <td>
            <Button
              variant="outlined"
              startIcon={<FaFileInvoiceDollar />}
              color={"warning"}
            >
              Invoice
            </Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>2023-04-01</td>
          <td>Beginner Lesson</td>
          <td>Basic Controls</td>
          <td>2 hours</td>
          <td>2 hours</td>
        </tr>
        <tr>
          <td>3</td>
          <td>David Johnson</td>
          <td>2023-04-02</td>
          <td>Refresher Lesson</td>
          <td>Merging onto Highway</td>
          <td>1.5 hours</td>
          <td>1.5 hours</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SummaryTable;
