import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./LearnerDashboard.scss";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import NotFoundPage from "../404Page/NotFoundPage";
import { IconType } from "react-icons/lib";
import LearnerDashboardMain from "../../components/LearnerDashboardMain/LearnerDashboardMain";

export interface DashboardLinksTypes {
  label: string;
  link: string;
  icon: IconType;
  component: any;
}
const LearnerDashboard = () => {
  const navLinks = [
    {
      label: "Dashboard",
      link: "dashbaord",
      icon: AiOutlineDashboard,
      component: LearnerDashboardMain,
    },
    {
      label: "Profile",
      link: "profile",
      icon: AiOutlineUser,
      component: NotFoundPage,
    },
  ];
  return <Dashboard links={navLinks} />;
};

export default LearnerDashboard;
