import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaUsers, FaDumbbell, FaAward } from "react-icons/fa";

export default function ValuesSection() {
  const values = [
    {
      icon: <FaHeart />,
      title: "Confidence",
      desc: "We build self-esteem and courage through every movement and performance.",
      gradient: "from-pink-400 via-pink-500 to-rose-500",
    },
    {
      icon: <FaDumbbell />,
      title: "Discipline",
      desc: "Precision, respect, and consistency — the foundation of excellence.",
      gradient: "from-indigo-400 via-indigo-500 to-blue-500",
    },
    {
      icon: <FaUsers />,
      title: "Creativity",
      desc: "We encourage artistic freedom and personal expression through motion.",
      gradient: "from-blue-400 via-sky-500 to-teal-400",
    },
    {
      icon: <FaAward />,
      title: "Community",
      desc: "Together, we create a supportive, inspiring family that uplifts each athlete.",
      gradient: "from-purple-400 via-violet-500 to-pink-500",
    },
  ];

  return (
    <section
      className="relative py-12 bg-gradient-to-b from-[#F3F0F8] via-[#E8F1F8] to-white overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {/* Decorative Glows */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#B7A5CE] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CADEEF] rounded-full blur-3xl opacity-25"></div>

      <div className="max-w-6xl mx-auto relative text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-[#0054AA] mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission & Core Values
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          The heart of Burlo Gymnastics beats through these four pillars — inspiring growth, elegance,
          and confidence in every young gymnast.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-3xl bg-white/10 backdrop-blur-xl p-[2px] shadow-xl hover:shadow-2xl hover:shadow-[#6B429C]/20 transition-all duration-500"
            >
              {/* Animated Shine */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] -left-[120%] group-hover:animate-[shine_1.8s_ease-in-out]"></div>
              </div>

              {/* Card Inner */}
              <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/90">
                <div
                  className={`mb-5 text-5xl text-white p-5 rounded-2xl bg-gradient-to-br ${v.gradient} shadow-md shadow-[#6B429C]/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  {v.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#6B429C] mb-3">
                  {v.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shine Animation Keyframes */}
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
