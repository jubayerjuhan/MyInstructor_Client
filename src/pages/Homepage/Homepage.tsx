import React from "react";
import FourIconComponent from "../../components/FourIconComponent/FourIconComponent";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeCounterComponent from "../../components/HomeCounterComponent/HomeCounterComponent";
import HomeGiftcard from "../../components/Home_Giftcard/Home_Giftcard";
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
      <HomeGiftcard />
    </div>
  );
};

export default Homepage;
