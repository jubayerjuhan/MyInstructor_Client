import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeCounterComponent from "../../components/HomeCounterComponent/HomeCounterComponent";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomeCounterComponent />
    </div>
  );
};

export default Homepage;
