import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/core/Button/Button";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./PaymentSuccess.scss";

const PaymentSuccess = () => {
  return (
    <>
      <Navbar />
      <div className=" sectionPadding payment__success">
        <div className="check__icon">
          <BsFillCheckCircleFill />
        </div>
        <div className="payment__success-information">
          <p className="title">Payment Successfull 💸</p>
          <p className="description">
            Your Payment To <span>MY INSTRUCTOR</span> as Successfull. Please
            Check Your Email To Download The Invoice, Thank You
          </p>
          <Button
            title={"Go To Home"}
            onClick={() => (window.location.href = "/")}
          ></Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
