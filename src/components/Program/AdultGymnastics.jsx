import React from "react";
import { FaUserFriends } from "react-icons/fa";

const AdultGymnastics = () => {
  return (
    <div>
      {/* ADULT GYMNASTICS SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        {/* Decorative Gradient Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 md:px-12 relative z-10">
          {/* Image Side */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <img
              src="https://images.unsplash.com/photo-1594737625785-cabcfe9b7b1f?auto=format&fit=crop&w=700&q=80"
              alt="Adult Gymnastics"
              className="rounded-3xl shadow-2xl transform hover:scale-[1.03] transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>

          {/* Text Side */}
          <div
            className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="flex items-center gap-3 mb-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaUserFriends className="text-5xl text-blue-600 drop-shadow-md" />
              <h2 className="text-4xl font-extrabold text-blue-800 tracking-tight">
                Adult Gymnastics
              </h2>
            </div>

            <p
              className="text-gray-700 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Rhythmic gymnastics isn’t just for kids! Our{" "}
              <span className="font-semibold text-blue-700">Adult Gymnastics</span> 
              program helps you build flexibility, strength, and confidence in a 
              fun, social, and encouraging atmosphere. Whether you’re a beginner 
              or returning to the sport, our classes are tailored to suit all 
              experience levels.
            </p>

            <button
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultGymnastics;
