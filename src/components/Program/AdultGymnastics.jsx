import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdultGymnastics = () => {
  return (
    <div>
      {/* ADULT GYMNASTICS SECTION */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        {/* Decorative Gradient Blobs */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-teal-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center px-4 sm:px-6 md:px-12 relative z-10">
          {/* Image Side */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="order-1 md:order-none"
          >
            <img
              src="hero4.jpg"
              alt="Adult Gymnastics"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-[1.03] transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>

          {/* Text Side */}
          <div
            className="bg-white/70 backdrop-blur-md p-3 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg text-center md:text-left"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 mb-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaUserFriends className="text-4xl sm:text-5xl text-blue-600 drop-shadow-md" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 tracking-tight">
                Adult Gymnastics
              </h2>
            </div>

            <p
              className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Rhythmic gymnastics isn’t just for kids! Our{" "}
              <span className="font-semibold text-blue-700">
                Adult Gymnastics
              </span>{" "}
              program helps you build flexibility, strength, and confidence in a
              fun, social, and encouraging atmosphere. Whether you’re a beginner
              or returning to the sport, our classes are tailored to suit all
              experience levels.
            </p>

            <div className="flex justify-center md:justify-start">
             <Link to="/freetrail">
             
              <button
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Get Started
              </button>
             </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultGymnastics;
