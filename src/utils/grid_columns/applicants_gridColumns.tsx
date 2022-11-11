import { GridColDef } from "@mui/x-data-grid";

export const applicantColumns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "firstName",
    headerName: "First Name",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last Name",
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
    flex: 1,
  },
  {
    field: "postCode",
    headerName: "Post Code",
    flex: 1,
  },
];
