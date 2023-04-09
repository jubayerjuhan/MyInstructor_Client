import React, { useEffect, useState } from "react";
import AdminPageWrapper from "../../../components/AdminPageWrapper/AdminPageWrapper";
import {
  FetchInstructorEarningsTypings,
  fetchAllInstructorEarnings,
} from "../../../api_calls/Admin/admin_earnings";
import { EarningType } from "../../../typings/Earning/earning";

const InstructorEarnings = () => {
  const [earnings, setEarnings] = useState<EarningType[]>();
  useEffect(() => {
    getAndStoreInstructorEarnings();
  }, []);

  const getAndStoreInstructorEarnings = async () => {
    try {
      const result: FetchInstructorEarningsTypings =
        await fetchAllInstructorEarnings();
      if (result.success) setEarnings(result.earnings);
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  console.log(earnings, "earnings...");
  return (
    <AdminPageWrapper>
      <div></div>
    </AdminPageWrapper>
  );
};

export default InstructorEarnings;
