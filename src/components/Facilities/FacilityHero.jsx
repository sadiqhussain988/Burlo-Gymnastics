import React from "react";
import { Link } from "react-router-dom";

function FacilityHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-28 flex items-center justify-center"
      style={{ backgroundImage: 'url("gim (6).jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h5
          className="uppercase tracking-widest text-blue-400 font-semibold mb-3"
          data-aos="fade-up"
        >
          Welcome to PowerZone Fitness
        </h5>

        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg"
          data-aos="fade-down"
        >
          Explore Our State-of-the-Art Facility
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
          data-aos="fade-up"
        >
          Step into a world where innovation meets passion — 
          from next-gen training zones to recovery lounges, 
          every corner is crafted to elevate your fitness journey.
        </p>

        

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              Contact Us
            </button>
          </Link>

          <Link to="/free trial">
            <button className="border border-white/80 text-white hover:bg-white hover:text-blue-700 px-10 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm" style={{fontSize:"18px"}}>
            Free Trial
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FacilityHero;
