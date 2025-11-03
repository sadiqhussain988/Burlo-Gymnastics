import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Home/Hero";
import TrustStrip from "../components/Home/TrustStrip";
import Programs from "../components/Home/Programs";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ResultsCarousel from "../components/Home/ResultsCarousel";
import PricingOffers from "../components/Home/PricingOffers";
import Coaches from "../components/Home/Coaches";
import Facility from "../components/Home/Facility";
import FAQ from "../components/Home/FAQ";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Hero />
      <TrustStrip />
      <Programs />
      <WhyChooseUs />
      <ResultsCarousel />
      
      <PricingOffers />
      <Coaches />
      <Facility />
      <FAQ />
      
    </div>
  );
}

export default Home;
