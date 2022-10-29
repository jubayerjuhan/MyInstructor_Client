import React, { Dispatch, SetStateAction, useState } from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import user from "../../assets/reviewavater.jpg";
import "./Dashboard.scss";
import { IconType } from "react-icons/lib";
import { DashboardLinksTypes } from "../../pages/LearnerDashboard/LearnerDashboard";
import { AiOutlineDashboard } from "react-icons/ai";
import NotFoundPage from "../../pages/404Page/NotFoundPage";
import { FaHamburger } from "react-icons/fa";

export interface DashboardProps {
  links: Link[];
  sidebar?: boolean;
  components?: any;
  setActiveRoute?: any;
  setSidebar?: any;
}

type Link = {
  label: string;
  icon: IconType;
  link: string;
};

const Dashboard = ({ links }: DashboardProps) => {
  const [sidebar, setSidebar] = useState(false);
  const [activeRoute, setActiveRoute] = useState<DashboardLinksTypes>({
    label: "Dashboard",
    link: "dashboard",
    icon: AiOutlineDashboard,
    component: NotFoundPage,
  });

  console.log(activeRoute, "Ac route");

  return (
    <div className="dashboard__wrapper">
      <DashboardSidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        links={links}
        setActiveRoute={setActiveRoute}
      />
      <DashboardTopBar setSidebar={setSidebar} />
      <div className="dashboard__content">
        <activeRoute.component />
      </div>
    </div>
  );
};

export default Dashboard;

const DashboardTopBar = ({ setSidebar }: any) => {
  return (
    <div className="dashboard__bar">
      <div>
        <FaHamburger
          className="dash__sidebar-hamburger"
          onClick={() => setSidebar(true)}
        />
      </div>
      <div className="user__icon">
        <img src={user} alt="" />
        <p className="user__name">Jubayer </p>
      </div>
    </div>
  );
};
