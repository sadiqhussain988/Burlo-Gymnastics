import React from "react";
import FacilityHero from "../components/Facilities/FacilityHero";
import FacilityHighlights from "../components/Facilities/FacilityHighlights";
import GymOverview from "../components/Facilities/GymOverview";
import EquipmentSection from "../components/Facilities/EquipmentSection";
import AmenitiesSection from "../components/Facilities/AmenitiesSection";

const Facilitiee = () => {
  return (
    <div>
     <FacilityHero/>
     <FacilityHighlights/>
     <GymOverview/>
     <EquipmentSection/>
     <AmenitiesSection/>
    </div>
  );
};

export default Facilitiee;
