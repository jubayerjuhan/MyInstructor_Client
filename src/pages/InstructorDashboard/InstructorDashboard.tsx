import React, { useEffect } from "react";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import InstructorDashboardMain from "../../components/InstructorDashboardMain/InstructorDashboardMain";
import LearnerDashboardMain from "../../components/LearnerDashboardMain/LearnerDashboardMain";
import { State } from "../../typings/reduxTypings";
import Profile from "../ProfilePage/Profile";

const InstructorDashboard = () => {
  const { user } = useSelector((state: State) => state.user);
  const navigation = useNavigate();

  useEffect(() => {
    if (user.userType !== "instructor") return navigation("/not-found");
  }, []);
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
