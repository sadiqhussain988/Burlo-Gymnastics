import React from "react";
import { FaChild } from "react-icons/fa";

const KidsClass = () => {
  return (
    <div>
      {/* KIDS CLASSES SECTION */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 md:px-12">
          {/* Image Side */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <img
              src="https://images.unsplash.com/photo-1601582580812-2f9b63d7a6a4?auto=format&fit=crop&w=700&q=80"
              alt="Kids Classes"
              className="rounded-3xl shadow-2xl transform hover:scale-[1.03] transition duration-500"
            />
          </div>

          {/* Text Side */}
          <div
            className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="flex items-center gap-3 mb-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaChild className="text-5xl text-purple-600 drop-shadow-md" />
              <h2 className="text-4xl font-extrabold text-purple-800 tracking-tight">
                Kids Classes
              </h2>
            </div>

            <p
              className="text-gray-700 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Fun, engaging, and educational — our Kids Classes introduce young
              athletes (ages 3–12) to the world of rhythmic gymnastics, focusing
              on coordination, balance, and flexibility in a nurturing and
              inspiring environment.
            </p>

            <button
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsClass;
