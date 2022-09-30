import React from "react";
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
    </div>
  );
};

export default Homepage;
