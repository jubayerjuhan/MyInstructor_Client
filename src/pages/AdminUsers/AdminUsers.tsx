import { Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRenderCellParams,
  GridRowId,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../api_calls/admin_api";

import AdminPageWrapper from "../../components/AdminPageWrapper/AdminPageWrapper";
import { State, User } from "../../typings/reduxTypings";
import "./dashboardListPage.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminListEdit from "../../components/AdminListEdit/AdminListEdit";

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GridRowId>();
  const userColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Joined On",
      type: "string",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        `${moment(params.row.createdAt)}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params: GridCellParams) => {
        return (
          <Box>
            <Button
              startIcon={<EditIcon />}
              sx={{ marginRight: 3 }}
              onClick={() => {
                setSelected(params.id);
                setOpen(true);
              }}
            />
            <Button
              startIcon={<DeleteIcon />}
              color="error"
              onClick={() => setOpen(false)}
            />
          </Box>
        );
      },
    },
  ];

  // actual code starts here
  const { users, loading } = useSelector(
    (state: State) => state.adminData.users
  );

  const rows: User[] = [];
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (users) {
    users.forEach((user) => {
      user.id = user._id;
      rows.push(user);
    });
  }

  console.log(userColumns);
  return (
    <>
      <AdminListEdit open={open} id={selected} type={"user"} />

      <AdminPageWrapper className={"dashbaord__content-wrapper"}>
        <Box>
          <p className="title">Users</p>
        </Box>
        <DataGrid
          rows={rows}
          columns={userColumns}
          pageSize={10}
          disableSelectionOnClick
          sx={{ height: "80vh" }}
        />
      </AdminPageWrapper>
    </>
  );
};

export default AdminUsers;
