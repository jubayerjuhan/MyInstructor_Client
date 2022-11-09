import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import AdminAddItems from "../../components/AdminAddItems/AdminAddItems";
import AdminPageWrapper from "../../components/AdminPageWrapper/AdminPageWrapper";

const AdminCars = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <AdminPageWrapper className={"dashbaord__content-wrapper"}>
      <AdminAddItems type={"car"} open={showModal} handleOpen={setShowModal} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p className="title">Cars</p>
        <Button onClick={() => setShowModal(true)}>Add Car</Button>
      </Box>
      {/* <DataGrid
    rows={rows}
    columns={userColumns}
    pageSize={10}
    disableSelectionOnClick
    sx={{ height: "80vh" }}
  /> */}
    </AdminPageWrapper>
  );
};

export default AdminCars;
