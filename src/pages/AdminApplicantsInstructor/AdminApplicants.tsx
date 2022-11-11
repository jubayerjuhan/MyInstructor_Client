import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "material-react-toastify";

import React, { useEffect, useState } from "react";
import { getAppliedInstructors } from "../../api_calls/Admin/admin_applicants";

import AdminPageWrapper from "../../components/AdminPageWrapper/AdminPageWrapper";
import { BookingTypeBack } from "../../typings/bookingsType";
import { applicantColumns } from "../../utils/grid_columns/applicants_gridColumns";

const AdminApplicants = () => {
  const [applicants, setApplicants] = useState<BookingTypeBack[]>([]);
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const data = await getAppliedInstructors();
    if (!data.success) return toast.error(data.message);

    setApplicants(data.applicants);
  };

  let rows: any = [];
  applicants.forEach((applicant, key) => {
    const row = {
      ...applicant,
      id: applicant._id,
    };
    rows.push(row);
  });

  return (
    <AdminPageWrapper className={"dashbaord__content-wrapper"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p className="title">Instructor Applicants</p>
      </Box>
      <DataGrid
        rows={rows}
        columns={applicantColumns}
        pageSize={10}
        disableSelectionOnClick
        sx={{ height: "80vh" }}
      />
    </AdminPageWrapper>
  );
};

export default AdminApplicants;
