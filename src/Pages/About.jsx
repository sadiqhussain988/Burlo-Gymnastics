import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/About/HeroSection";
import StorySection from "../components/About/StorySection";
import ValuesSection from "../components/About/ValuesSection";
import CoachesSection from "../components/About/CoachesSection";
import Facility from "../components/Home/Facility";
import AchievementsSection from "../components/About/AchievementsSection";
import CallToAction from "../components/About/CallToAction";



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  


  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HeroSection />
      
        <StorySection  />
        <ValuesSection />
        <CoachesSection />
        <Facility/>
        <AchievementsSection />
        <CallToAction />
      
    </div>
  );
}
