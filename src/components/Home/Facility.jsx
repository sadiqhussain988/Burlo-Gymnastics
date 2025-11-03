import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import img from "../../assets/hero.jpg"
const Facility = () => {
  return (
    <section id="facility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        <div data-aos="fade-right">
          <img
            src={img}
            alt="Burlo Gymnastics Facility"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tour Our Facility</h2>
          <p className="text-gray-500 mb-6">
            Our modern gymnastics center in Granada Hills features Olympic-standard rhythmic equipment, mirrors,
            climate control, and ample space for group training.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            <FaPlayCircle />
            Watch Video Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facility;
