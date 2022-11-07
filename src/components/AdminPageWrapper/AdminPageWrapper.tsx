import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

interface AdminPageWrapperProps {
  children: React.ReactNode;
}
const AdminPageWrapper = ({ children }: AdminPageWrapperProps) => {
  return <AdminSidebar component={children} />;
};

export default AdminPageWrapper;
