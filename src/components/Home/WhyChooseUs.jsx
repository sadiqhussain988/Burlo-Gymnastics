import React from "react";
import { FaHeart, FaUserShield, FaClock, FaTrophy } from "react-icons/fa";

const points = [
  {
    icon: <FaHeart />,
    title: "Positive Environment",
    desc: "We focus on confidence, teamwork, and self-expression.",
  },
  {
    icon: <FaUserShield />,
    title: "Qualified Coaches",
    desc: "All coaches are certified and internationally trained.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Scheduling",
    desc: "Morning, evening, and weekend classes for all age groups.",
  },
  {
    icon: <FaTrophy />,
    title: "Proven Results",
    desc: "Our athletes consistently achieve high rankings regionally.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-white overflow-hidden"
    >
      {/* Decorative background bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -top-24 -left-24 animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 bg-purple-200/30 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl lg:text-4xl font-extrabold text-blue-900 text-center mb-4"
        >
          Why Choose Burlo Gymnastics?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          A nurturing environment that helps young athletes grow strong,
          graceful, and confident.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              data-aos="flip-up"
              data-aos-delay={i * 150}
              className="relative p-8 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon & Content */}
              <div className="relative z-10 flex flex-col items-center text-center transition-all duration-500 group-hover:scale-[1.03]">
                <div className="text-4xl text-purple-600 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-800">
                  {p.icon}
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-900">
                  {p.title}
                </h4>
                <p className="text-gray-500 text-sm group-hover:text-gray-700">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
