import { GridSelectionModel } from "@mui/x-data-grid";
import React from "react";

export const handleSelectInstructorForPayment = (
  selectedIds: GridSelectionModel,
  setSelectedInstructor: React.Dispatch<
    React.SetStateAction<GridSelectionModel | undefined>
  >
) => {
  setSelectedInstructor(selectedIds);
};

export const redirectToInstructorProfile = (id: string): void => {
  window.open(`instructor/${id}`, "_blank");
};
