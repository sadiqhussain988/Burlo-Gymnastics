import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import ProgramLevels from "../components/services/ProgramLevels";
import SpecializedServices from "../components/services/SpecializedServices";
import ServiceBenefits from "../components/services/ServiceBenefits";
import CTASection from "../components/services/CTASections";

function Services() {
   return (
      <div className="min-h-screen">
         <ServicesHero />
         <ProgramLevels />
         <SpecializedServices />
         <ServiceBenefits />
         <CTASection />
      </div>
   );
}

export default Services;
