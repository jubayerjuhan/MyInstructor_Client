import React from "react";
import FourIconComponent from "../../components/FourIconComponent/FourIconComponent";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeCounterComponent from "../../components/HomeCounterComponent/HomeCounterComponent";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomeCounterComponent />
      <HowItWorks />
      <FourIconComponent />
    </div>
  );
};

export default Homepage;
