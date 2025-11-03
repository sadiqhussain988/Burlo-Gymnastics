import React from "react";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp, GiBodyBalance, GiMeditation } from "react-icons/gi";

const EquipmentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Elite Equipment Arsenal
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Train with{" "}
            <span className="font-semibold text-blue-600">world-class equipment</span>{" "}
            from premium brands, designed for{" "}
            <span className="font-semibold text-purple-600">maximum performance</span>{" "}
            and{" "}
            <span className="font-semibold text-green-600">ultimate safety</span>.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* --- Strength Training --- */}
          <div
            className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg text-white text-4xl group-hover:rotate-[360deg] transition-transform duration-500">
              <GiWeightLiftingUp />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
              Strength Training
            </h3>
            <ul className="space-y-4 text-gray-700">
              {["Power Racks", "Olympic Barbells", "Dumbbells (5-100 lbs)", "Bench Press Stations", "Cable Crossovers"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Cardio Zone --- */}
          <div
            className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg text-white text-4xl group-hover:rotate-[360deg] transition-transform duration-500">
              <FaRunning />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
              Cardio Zone
            </h3>
            <ul className="space-y-4 text-gray-700">
              {["Treadmills", "Ellipticals", "Stationary Bikes", "Stair Masters", "Rowing Machines"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Functional Training --- */}
          <div
            className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg text-white text-4xl group-hover:rotate-[360deg] transition-transform duration-500">
              <GiBodyBalance />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
              Functional Training
            </h3>
            <ul className="space-y-4 text-gray-700">
              {["TRX Systems", "Battle Ropes", "Kettlebells", "Medicine Balls", "Plyometric Boxes"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Recovery & Wellness --- */}
          <div
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg text-white text-4xl group-hover:rotate-[360deg] transition-transform duration-500">
              <GiMeditation />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
              Recovery & Wellness
            </h3>
            <ul className="space-y-4 text-gray-700">
              {["Foam Rollers", "Stretching Area", "Yoga Mats", "Recovery Zone", "Sled Push Tracks"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
