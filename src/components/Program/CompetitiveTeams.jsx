import React from "react";
import { FaMedal } from "react-icons/fa";

const CompetitiveTeams = () => {
  return (
    <div>
      {/* COMPETITIVE TEAMS SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-purple-100 overflow-hidden">
        {/* Soft Gradient Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 md:px-12 relative z-10">
          {/* Text Section */}
          <div
            className="order-2 md:order-1 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div
              className="flex items-center gap-3 mb-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaMedal className="text-5xl text-pink-600 drop-shadow-md" />
              <h2 className="text-4xl font-extrabold text-pink-800 tracking-tight">
                Competitive Teams
              </h2>
            </div>

            <p
              className="text-gray-700 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Designed for gymnasts ready to take their passion to the next level.
              Our <span className="font-semibold text-pink-700">Competitive Teams</span> 
              train under professional coaches to compete in state, regional, and national
              championships — building <strong>strength, artistry, and discipline</strong>
              along the way.
            </p>

            <button
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Explore Teams
            </button>
          </div>

          {/* Image Section */}
          <div
            className="order-1 md:order-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1579783901577-32c94f75a7ec?auto=format&fit=crop&w=700&q=80"
              alt="Competitive Teams"
              className="rounded-3xl shadow-2xl transform hover:scale-[1.03] transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitiveTeams;
