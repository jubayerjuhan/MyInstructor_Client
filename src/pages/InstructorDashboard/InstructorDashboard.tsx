import React from "react";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import Dashboard from "../../components/Dashboard/Dashboard";
import InstructorDashboardMain from "../../components/InstructorDashboardMain/InstructorDashboardMain";
import LearnerDashboardMain from "../../components/LearnerDashboardMain/LearnerDashboardMain";
import Profile from "../ProfilePage/Profile";

const InstructorDashboard = () => {
  const navLinks = [
    {
      label: "Dashboard",
      link: "dashbaord",
      icon: AiOutlineDashboard,
      component: InstructorDashboardMain,
    },
    {
      label: "Profile",
      link: "profile",
      icon: AiOutlineUser,
      component: Profile,
    },
  ];
  return <Dashboard links={navLinks} />;
};

export default InstructorDashboard;
