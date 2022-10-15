import React from "react";
import "./NotFoundPage.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import notfoundImage from "../../assets/Notfound.png";

const NotFoundPage = () => {
  return (
    <div className="notfound__page">
      <Navbar />
      <div className="notfound__main sectionPadding">
        <img src={notfoundImage} alt="" />
        <p className="title">Page Not Found</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
