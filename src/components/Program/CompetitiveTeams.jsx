import React from "react";
import { FaMedal } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CompetitiveTeams = () => {
  return (
    <section
      className="relative py-12 sm:py-28 bg-gradient-to-br from-[#FDF1F7] via-white to-[#F3E8FF] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/50 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Left Text Section */}
        <motion.div
          className="order-2 md:order-1 bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="flex items-center gap-3 mb-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaMedal className="text-5xl text-pink-600 drop-shadow-md" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B429C] tracking-tight">
              Competitive Teams
            </h2>
          </div>

          <p
            className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Designed for gymnasts ready to take their passion to the next level,
            our{" "}
            <span className="font-semibold text-pink-700">
              Competitive Teams
            </span>{" "}
            offer elite coaching and advanced training. Athletes compete at
            <strong> state, regional, and national levels</strong> — mastering
            strength, artistry, and discipline along the way.
          </p>

          <p
            className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our dedicated team of professional coaches fosters an environment of
            excellence, teamwork, and personal growth — preparing gymnasts to
            shine both on and off the floor.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/freetrial" className="relative group">
              <button
                className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-[#6B429C] text-white font-semibold text-sm sm:text-base px-8 sm:px-10 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span className="relative z-10">Explore Teams</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] -left-[150%] group-hover:animate-[shine_2s_ease-in-out]"></div>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="order-1 md:order-2 relative"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6B429C]/20 to-transparent rounded-3xl opacity-60"></div>
          <img
            src="hero3.jpg"
            alt="Competitive Teams"
            className="w-full rounded-3xl shadow-2xl border-4 border-[#F5D9E7] transform hover:scale-[1.03] transition duration-500 ease-out"
          />
          <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-2 text-sm rounded-md shadow font-medium text-pink-700">
            Elite Program
          </div>
        </motion.div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { left: -150%; }
          50% { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>
    </section>
  );
};

export default CompetitiveTeams;
