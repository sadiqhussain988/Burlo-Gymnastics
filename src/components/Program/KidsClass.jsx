import React from "react";
import { FaChild } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const KidsClass = () => {
  return (
    <section
      className="relative py-12 sm:py-28 bg-gradient-to-br from-[#F3F0F8] via-white to-[#E8F1F8] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Decorative Elements */}
      <div className="absolute -top-10 left-0 w-64 h-64 bg-[#B7A5CE]/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#CADEEF]/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-10 relative z-10">
        {/* Left: Image */}
        <motion.div
          data-aos="fade-right"
          className="order-1 md:order-none relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6B429C]/20 to-transparent rounded-3xl opacity-60"></div>
          <img
            src="hero2.jpg"
            alt="Kids Classes"
            className="w-full rounded-3xl shadow-2xl border-4 border-[#E3DAEB] transform hover:scale-[1.03] transition-all duration-500 ease-out"
          />
          <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-2 text-sm rounded-md shadow font-medium text-[#6B429C]">
            Ages 3–12
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="bg-white/70 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div
            className="flex items-center gap-3 mb-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaChild className="text-5xl text-[#6B429C] drop-shadow-md" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0054AA] tracking-tight">
              Kids Classes
            </h2>
          </div>

          <p
            className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Fun, engaging, and confidence-building — our <strong>Kids Classes</strong> 
            introduce children to the world of rhythmic gymnastics through games, 
            music, and movement. Perfect for ages 3–12, these sessions develop 
            coordination, flexibility, balance, and artistic expression in a nurturing 
            environment.
          </p>

          <p
            className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Guided by certified coaches, each class focuses on fun fundamentals, 
            creativity, and teamwork — helping kids shine both inside and outside the gym.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/freetrial" className="relative group">
              <button
                className="relative overflow-hidden bg-gradient-to-r from-[#6B429C] to-[#0677BA] text-white font-semibold text-sm sm:text-base px-8 sm:px-10 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] -left-[150%] group-hover:animate-[shine_2s_ease-in-out]"></div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Shine animation keyframes */}
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

export default KidsClass;
