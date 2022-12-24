import React from "react";
import Button from "../../components/core/Button/Button";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ApplicationSuccess.scss";

const ApplicationSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="application__success-page sectionPadding">
        <p className="title">Your Application Submitted Successfully</p>
        <p className="description">
          Thank You For Applying as a Driving Instructor At My Instructor. We
          Recieved Your Application. We Will Reach You Soon
        </p>

        <Button
          width={"40%"}
          title={"Go To Home"}
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <Footer />
    </>
  );
};

export default ApplicationSuccess;
