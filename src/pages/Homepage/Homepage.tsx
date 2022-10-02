import React from "react";
import Advantage from "../../components/Advantage/Advantage";
import FaqSection from "../../components/FaqSection/FaqSection";
import FourIconComponent from "../../components/FourIconComponent/FourIconComponent";
import GetReady from "../../components/GetReady/GetReady";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeCounterComponent from "../../components/HomeCounterComponent/HomeCounterComponent";
import HomeGiftcard from "../../components/Home_Giftcard/Home_Giftcard";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import WhyusSection from "../../components/WhyusSection/WhyusSection";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomeCounterComponent />
      <HowItWorks />
      <FourIconComponent />
      <HomeGiftcard />
      <FaqSection />
      <WhyusSection />
      <Advantage />
      <GetReady />
      <ReviewSlider />
    </div>
  );
};

export default Homepage;
