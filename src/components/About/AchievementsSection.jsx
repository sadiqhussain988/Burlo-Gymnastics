import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaStar, FaTrophy } from "react-icons/fa";

export default function AchievementsSection() {
  const badges = [
    {
      icon: <FaTrophy />,
      label: "Regional Champions",
      desc: "Recognized for outstanding teamwork and precision at state-level competitions.",
    },
    {
      icon: <FaStar />,
      label: "National Top 10",
      desc: "Ranked among the country’s best rhythmic gymnastics teams.",
    },
    {
      icon: <FaMedal />,
      label: "Best Choreography",
      desc: "Awarded for creative and artistic excellence in performance routines.",
    },
  ];

  return (
    <section
      className="relative my-20 py-8 px-6 bg-gradient-to-b from-[#E8F1F8] to-[#F3F0F8] overflow-hidden"
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      {/* Glow effects */}
      <div className="absolute -top-10 left-10 w-64 h-64 bg-[#6B429C]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CADEEF]/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-[#0054AA]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Awards & Achievements
        </motion.h2>
        <p className="text-gray-600 mt-4 mb-12">
          Celebrating our proudest moments — every trophy, medal, and recognition is a reflection of our athletes’
          dedication and artistry.
        </p>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              className="relative group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#6B429C]/40"
              data-aos="zoom-in-up"
              data-aos-delay={i * 200}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              {/* Shine animation */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] -left-[120%] group-hover:animate-[shine_2s_ease-in-out]"></div>
              </div>

              {/* Icon */}
              <div className="text-4xl text-[#6B429C] mb-4">{b.icon}</div>

              <h4 className="text-xl font-semibold text-[#0054AA] mb-2">{b.label}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
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
}
