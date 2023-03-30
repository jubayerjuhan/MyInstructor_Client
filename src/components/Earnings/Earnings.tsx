import React, { useEffect, useState } from "react";
import "./earnings.scss";
import earningPageData from "./earnings.data.json";
import SummaryTable from "../SummaryTable/SummaryTable";
import {
  getInstructorEarnings,
  InstructorEarningsReturn,
} from "../../api_calls/earnings_api";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import SkeletonTable from "../SummaryTable/Loader/SummaryTable.loader";
import { Earning } from "./earningsTypes";

const Earnings = () => {
  const { user } = useSelector((state: State) => state.user);
  const [earnings, setEarnings] = useState<Earning[]>([]);
  console.log(earnings, "earnings");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { earnings }: InstructorEarningsReturn =
          await getInstructorEarnings(user._id);
        setEarnings(earnings ?? []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user._id]);

  return (
    <div className="earnings__page">
      <div className="earnings__title">{earningPageData.title}</div>
      <p className="earnings__description">{earningPageData.description}</p>
      <div className="earnings__summary-table">
        {loading ? (
          <SkeletonTable row={5} column={7} />
        ) : (
          <SummaryTable fields={earningPageData.tableFields} datas={earnings} />
        )}
      </div>
    </div>
  );
};

export default Earnings;
