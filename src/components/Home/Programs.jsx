import React from "react";
import {
  FaChild,
  FaUsers,
  FaMedal,
  FaSun,
  FaChalkboardTeacher,
  FaStar,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaChild />,
    title: "Recreational Classes",
    desc: "Fun and engaging sessions for ages 3–17 to build strength, grace, and flexibility.",
  },
  {
    icon: <FaUsers />,
    title: "Competitive Teams",
    desc: "Advanced rhythmic gymnastics teams training for state and national level events.",
  },
  {
    icon: <FaSun />,
    title: "Summer Camps",
    desc: "Skill-building camps that mix gymnastics, creativity, and fun every summer.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Private Lessons",
    desc: "1-on-1 personalized coaching to refine routines and accelerate progress.",
  },
  {
    icon: <FaMedal />,
    title: "Performance Prep",
    desc: "Specialized sessions for choreography, competition, and confidence.",
  },
  {
    icon: <FaStar />,
    title: "Showcase Events",
    desc: "Stage performances designed to boost poise and showcase talent in front of audiences.",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Decorative gradient bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -top-24 -left-24"></div>
        <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl lg:text-4xl font-extrabold text-blue-900 mb-4"
        >
          Our Programs
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          From first-time beginners to elite competitors, our programs inspire
          growth, confidence, and grace.
        </p>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="relative p-8 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center transition-all duration-500">
                <div className="text-4xl text-blue-700 mb-4 transition-transform duration-500 group-hover:scale-125">
                  {p.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-900">
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

export default Programs;
