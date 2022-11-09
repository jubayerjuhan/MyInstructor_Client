import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserAdmin } from "../api_calls/Admin/admin_userapi";
import AdminPageWrapper from "../components/AdminPageWrapper/AdminPageWrapper";
import { BookingTypeBack } from "../typings/bookingsType";
import { Car } from "../typings/carTypings";
import { Instructor } from "../typings/instructorTypings";
import { User } from "../typings/reduxTypings";
import Avatar from "@mui/material/Avatar";

interface Props {
  type: string;
}
const ViewItemsPage = ({ type }: Props) => {
  const [item, setItem] = useState<any>();
  const { id } = useParams();

  const getItem = {
    user: getSingleUserAdmin(id),
  };

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const data = await getItem[type as keyof typeof getItem];
    setItem(data[type]);
  };

  return (
    <>
      <AdminPageWrapper>
        <div className="view__items-page">
          {item.avater && (
            <Avatar
              alt={item.firstName}
              src={item?.avater}
              sx={{ width: 100, height: 100 }}
            />
          )}
        </div>
      </AdminPageWrapper>
    </>
  );
};

export default ViewItemsPage;
