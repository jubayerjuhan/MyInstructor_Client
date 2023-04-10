import React, { useEffect, useState } from "react";
import AdminPageWrapper from "../../../components/AdminPageWrapper/AdminPageWrapper";
import {
  GetInstructorPaymentListType,
  UnpaidInstructorType,
  getInstructorPaymentList,
} from "../../../api_calls/Admin/admin_payments";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import {
  handleSelectInstructorForPayment,
  redirectToInstructorProfile,
} from "./functions/functions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "../../../components/core/Button/IconButton/IconButton";

const FortnightPayments = () => {
  const [selectedInstructors, setSelectedInstructors] =
    useState<GridSelectionModel>();
  const [unpaidInstructorList, setUnpaidInstructorList] =
    useState<UnpaidInstructorType[]>();

  console.log(selectedInstructors, "selected ids");
  useEffect(() => {
    fetchAndStoreInstructorList();
  }, []);

  const fetchAndStoreInstructorList = async () => {
    const result: GetInstructorPaymentListType =
      await getInstructorPaymentList();
    if (result.success) setUnpaidInstructorList(result.instructors);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "amount", headerName: "Amount", width: 150 },
    {
      field: "profile",
      headerName: "Instructor Profile",
      width: 250,
      renderCell(params) {
        return (
          <IconButton
            title={"Profile"}
            Icon={AccountCircleIcon}
            onClick={() => redirectToInstructorProfile(params.row?.id)}
          />
        );
      },
    },
  ];

  const rows: any = [];

  unpaidInstructorList?.forEach((instructor, key) => {
    rows.push({
      id: instructor._id,
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      email: instructor.email,
      amount: instructor.amount,
    });
  });

  return (
    <AdminPageWrapper>
      <DataGrid
        sx={{ minHeight: "80vh" }}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        checkboxSelection
        onSelectionModelChange={(selections: GridSelectionModel) =>
          handleSelectInstructorForPayment(selections, setSelectedInstructors)
        }
      />
    </AdminPageWrapper>
  );
};

export default FortnightPayments;
