import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { client } from "../../client";
import Button from "../core/Button/Button";

export default function ClosedEventsList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchClosedEvents();
  }, []);

  const fetchClosedEvents = async () => {
    try {
      const { data } = await client.get("/instructor/closed-event/list");
      const processedRows = data.closedEvents.map((event, index) => ({
        ...event,
        id: index + 1, // Assign a unique id to each row
      }));
      setRows(processedRows);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "eventName", headerName: "Event Name", width: 150, editable: true },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => <Button title={"Delete Event"} />,
    },
  ];

  const handleButtonClick = (id) => {
    // Handle button click event
    console.log("Button clicked for row with ID:", id);
  };

  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Box>
  );
}
