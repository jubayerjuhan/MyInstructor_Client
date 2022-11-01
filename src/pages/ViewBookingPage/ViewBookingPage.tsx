import moment from "moment";
import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LdashInstructor from "../../components/LdashInstructor/LdashInstructor";
import { State } from "../../typings/reduxTypings";
import "./ViewBookingPage.scss";

const ViewBookingPage = () => {
  const navigate = useNavigate();
  const { booking } = useSelector((state: State) => state.activeBooking);
  const { user } = useSelector((state: State) => state.user);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="view__booking-page dashboard__padding">
      <div
        className="backButton"
        onClick={() =>
          (window.location.href =
            user.userType === "instructor"
              ? "/instructor/dashboard"
              : "/learner/dashboard")
        }
      >
        <BsArrowLeft />
      </div>
      {user.userType === "learner" && (
        <LdashInstructor instructor={booking?.instructor} />
      )}
      <div className="view__booking-main">
        <InformationFields
          title={"Learner Information"}
          child1={`Name : ${booking.user.firstName} ${booking.user.lastName}`}
          child2={`License Status : ${booking.user.licenseStatus} `}
          child3={`Phone : ${booking.user.phone} `}
          child4={`Email : ${booking.user.email} `}
        />
        <InformationFields
          title={"Booking Time"}
          child1={`Starts From : ${moment(booking.time.from).format(
            "MMMM Do YYYY, h:mm:ss a"
          )}`}
          child2={`End To : ${moment(booking.time.to).format(
            "MMMM Do YYYY, h:mm:ss a"
          )}`}
        />
        <InformationFields
          title={"Booking Duration"}
          child1={`Duration: ${booking.duration} hrs`}
        />
        <InformationFields
          title={"Booking Status"}
          child1={
            <>
              Status :{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: booking.status === "Pending" ? "#faa41a" : "#429E01",
                }}
              >
                {booking.status}
              </span>
            </>
          }
        />
        <InformationFields
          title={"Pickup Details"}
          child1={`Address: ${booking.pickupDetails.address}`}
          child2={`Suburb: ${booking.pickupDetails.suburb}`}
          child3={`Post Code: ${booking.pickupDetails.postcode}`}
          child4={`State: ${booking.pickupDetails.state}`}
        />
      </div>
    </div>
  );
};

const InformationFields = ({
  title,
  child1,
  child2,
  child3,
  child4,
  child5,
}: any) => {
  return (
    <div className="dash-booking__informations">
      <p className="title">{title}</p>
      {child1 && <p className="info__field">{child1}</p>}
      {child2 && <p className="info__field">{child2}</p>}
      {child3 && <p className="info__field">{child3}</p>}
      {child4 && <p className="info__field">{child4}</p>}
      {child5 && <p className="info__field">{child5}</p>}
    </div>
  );
};

export default ViewBookingPage;
