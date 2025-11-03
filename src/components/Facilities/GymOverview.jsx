import React from "react";
import {
  Dumbbell,
  Lightbulb,
  Clock,
} from "lucide-react"; // 🟣 modern lightweight icons

function GymOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#ECDFFF] to-[#F6F1FF] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            data-aos="fade-down"
          >
            World-Class Fitness Facility
          </h2>
          <p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Experience a premium workout environment with cutting-edge
            infrastructure designed for comfort, motivation, and results.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className="relative group"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="gim (3).jpg"
              alt="Main Gym Area"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-semibold">Elite Training Space</h3>
              <p className="text-sm text-gray-200">
                Where focus meets performance.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-blue-600"
              data-aos="fade-left"
            >
              <div className="flex items-center mb-3 gap-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Dumbbell className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Premium Space
                </h3>
              </div>
              <p className="text-gray-600">
                10,000+ sq.ft. of dedicated workout area with professional
                flooring and open ceilings — built for serious training.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-purple-600"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="flex items-center mb-3 gap-3">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Perfect Ambiance
                </h3>
              </div>
              <p className="text-gray-600">
                Smart lighting, advanced ventilation, and a high-energy vibe
                that keeps your motivation at its peak.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-pink-600"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-3 gap-3">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Flexible Hours
                </h3>
              </div>
              <p className="text-gray-600">
                Open 5:00 AM to 11:00 PM — your schedule, your pace, your grind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GymOverview;
