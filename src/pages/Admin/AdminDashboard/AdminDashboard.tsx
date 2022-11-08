import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookings,
  getAllInstructors,
  getAllUsers,
} from "../../../api_calls/admin_api";
import AdminPageWrapper from "../../../components/AdminPageWrapper/AdminPageWrapper";
import DashboardInfoCard from "../../../components/Dashboard_Infocard/Dashboard_Infocard";
import { State, User } from "../../../typings/reduxTypings";
import "./AdminDashboard.scss";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import DataGridActionButtons from "../../../components/DataGridActionButtons/DataGridActionButtons";

const AdminDashboard = () => {
  const dispatch = useDispatch<any>();
  const {
    loading: bookLoading,
    bookings,
    error: bookingsError,
  } = useSelector((state: State) => state.adminData.bookings);

  const {
    loading: instructorLoading,
    instructors,
    error: instructorsError,
  } = useSelector((state: State) => state.adminData.instructors);

  const {
    loading: usersLoading,
    users,
    error: usersError,
  } = useSelector((state: State) => state.adminData.users);

  useEffect(() => {
    getAdminDatas();
  }, []);

  const getAdminDatas = async () => {
    dispatch(getAllUsers());
    dispatch(getAllInstructors());
    dispatch(getAllBookings());
  };

  const rows: User[] = [];
  users?.forEach((user) => {
    user.id = user._id;
    rows.push(user);
  });

  return (
    <AdminPageWrapper>
      <div className="dashboard__quick-info">
        <DashboardInfoCard
          title={"Users"}
          count={users?.length}
          loading={usersLoading}
        />
        <DashboardInfoCard
          title={"Instructors"}
          count={instructors?.length}
          loading={instructorLoading}
        />
        <DashboardInfoCard
          title={"Bookings"}
          count={bookings?.length}
          loading={bookLoading}
        />
      </div>
      <div className="dashboard__table">
        {/* <DataGrid
          sx={{ height: 400, marginTop: 5 }}
          rows={rows}
          columns={userColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        /> */}
      </div>
    </AdminPageWrapper>
  );
};

export default AdminDashboard;
