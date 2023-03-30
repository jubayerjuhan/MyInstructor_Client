import React from "react";
import "./earnings.scss";
import earningPageData from "./earning.data.json";
import SummaryTable from "../SummaryTable/SummaryTable";

const Earnings = () => {
  console.log(earningPageData.description.split("\n"));
  return (
    <div className="earnings__page">
      <div className="earnings__title">{earningPageData.title}</div>
      <p className="earnings__description">{earningPageData.description}</p>
      <div className="earnings__summary-table">
        <SummaryTable />
      </div>
    </div>
  );
};

export default Earnings;
