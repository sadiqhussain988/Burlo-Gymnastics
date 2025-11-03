import React from "react";
import {
  FaShower,
  FaParking,
  FaWifi,
  FaMusic,
  FaTshirt,
  FaTint,
} from "react-icons/fa";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: <FaShower />,
      title: "Locker Rooms",
      description:
        "Spacious changing areas with secure lockers and luxurious shower facilities.",
    },
    {
      icon: <FaTint />,
      title: "Water Station",
      description:
        "RO purified water with disposable glasses and bottle refill points across the gym.",
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      description:
        "Dedicated parking with 24/7 surveillance — convenience from the moment you arrive.",
    },
    {
      icon: <FaWifi />,
      title: "Free WiFi",
      description:
        "High-speed connectivity across the facility for your entertainment and productivity.",
    },
    {
      icon: <FaMusic />,
      title: "Music System",
      description:
        "Premium surround-sound setup with motivational playlists to keep you moving.",
    },
    {
      icon: <FaTshirt />,
      title: "Towels & Supplies",
      description:
        "Complimentary towels, sanitizers, and essential cleaning supplies always available.",
    },
  ];

  return (
    <section className="py-24 bg-[#DFE8FF] relative overflow-hidden">
      {/* subtle gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1447E6]/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1447E6] mb-4">
            Premium Amenities
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Experience comfort, convenience, and class — all designed to elevate
            your fitness journey.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-5xl text-[#1447E6] bg-[#E8EEFF] p-6 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {amenity.icon}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
