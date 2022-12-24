import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client";
import { Applicant } from "../../typings/instructorTypings";
import AdminPageWrapper from "../AdminPageWrapper/AdminPageWrapper";
import "./AdminInstructorApplication.scss";

const AdminInstructorApplication = () => {
  const [application, setApplication] = useState<Applicant>();
  const { id } = useParams();

  useEffect(() => {
    fetchApplicationData();
  }, []);

  const fetchApplicationData = async () => {
    const { data } = await client.get(`/instructor-application/${id}`);
    setApplication(data?.applicant);
  };

  if (!application) return <></>;

  return (
    <AdminPageWrapper>
      <div className="instructor__applicant-wrapper">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt={application?.firstName}
            src={application?.avater}
            sx={{ width: 250, height: 250 }}
          />
        </Box>

        <Typography>Application ID : {application._id} </Typography>
        <Typography>First Name : {application.firstName} </Typography>
        <Typography>Last Name : {application.lastName} </Typography>
        <Typography>
          Date Of Birth: {moment(application.dateOfBirth).format("LL")}{" "}
        </Typography>
        <Typography>Gender: {application.gender} </Typography>
        <Typography>Email : {application.email} </Typography>
        <Typography>Phone : {application.phone} </Typography>
        <Typography>Address: {application.address} </Typography>
        <Typography>
          ABN Number:{" "}
          {application.abnNumber
            ? application.abnNumber
            : "ABN No Not Provided"}{" "}
        </Typography>
        <Typography>
          Bank Account Number: {application.accountNumber}{" "}
        </Typography>
        <Typography>BSB Number: {application.bsbNumber} </Typography>
        <Typography>Car: {application.car} </Typography>
        <Typography>
          Children Check License Expire:{" "}
          {moment(application.childrenCheckLicenseExpire).format("LL")}{" "}
        </Typography>
        <Typography>
          Instructor License Expire:{" "}
          {moment(application.instructorLicenseExpire).format("LL")}{" "}
        </Typography>
        <Typography>
          Driving License Expire:{" "}
          {moment(application.drivingLicenseExpire).format("LL")}{" "}
        </Typography>
        <Typography>
          Transmission Type: {application.transmissionType}{" "}
        </Typography>
        <Typography>
          Languages:{" "}
          {application.languages.map((language: any, key) => (
            <>{language.name} </>
          ))}{" "}
        </Typography>
        <Typography>
          Service Suburbs :{" "}
          {application.serviceSuburbs.map((suburb) => (
            <>{suburb.suburb} </>
          ))}
        </Typography>
        <Typography>Message : {application.message}</Typography>
        <Typography>Signature :</Typography>
        <img
          src={application.signature}
          alt=""
          style={{ objectFit: "contain", width: "200px" }}
        />
      </div>
    </AdminPageWrapper>
  );
};

export default AdminInstructorApplication;
