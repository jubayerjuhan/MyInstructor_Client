import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./LearnerDashboard.scss";
import {
  AiOutlineOrderedList,
  AiOutlineDashboard,
  AiOutlineDollar,
} from "react-icons/ai";
import NotFoundPage from "../404Page/NotFoundPage";
import { IconType } from "react-icons/lib";
import Homepage from "../Homepage/Homepage";
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
      label: "Purchases",
      link: "purchases",
      icon: AiOutlineDollar,
      component: NotFoundPage,
    },
    {
      label: "Upcoming Bookings",
      link: "purchases",
      icon: AiOutlineOrderedList,
      component: Homepage,
    },
  ];
  return <Dashboard links={navLinks} />;
};

export default LearnerDashboard;
