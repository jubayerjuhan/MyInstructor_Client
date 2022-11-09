import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AdminPageWrapper from "../../components/AdminPageWrapper/AdminPageWrapper";
import { DataGrid } from "@mui/x-data-grid";
import { Instructor } from "../../typings/instructorTypings";
import { getAllInstructorsAdmin } from "../../api_calls/Admin/admin_instructors";
import { toast } from "material-react-toastify";
import { instructorColumns } from "../../utils/grid_columns/instructors_gridColumns";
const AdminInstructor = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const data = await getAllInstructorsAdmin();
    if (!data.success) return toast.error(data.message);

    setInstructors(data.instructors);
  };

  let rows: any = [];

  instructors.forEach((instructor, key) => {
    const row = {
      ...instructor,
      id: instructor._id,
    };
    rows.push(row);
  });

  return (
    <AdminPageWrapper className={"dashbaord__content-wrapper"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p className="title">Instructors</p>
      </Box>
      <DataGrid
        rows={rows}
        columns={instructorColumns}
        pageSize={10}
        disableSelectionOnClick
        sx={{ height: "80vh" }}
      />
    </AdminPageWrapper>
  );
};

export default AdminInstructor;
