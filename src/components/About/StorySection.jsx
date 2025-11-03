import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/3.jpg";

export default function StorySection() {
  return (
    <section
      className="relative "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {/* Inline Shine Animation */}
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
        }
        .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          animation: shineMove 3s infinite;
        }
        @keyframes shineMove {
          0% { left: -100%; }
          60% { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>

      <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-3xl shadow-2xl p-6 sm:p-12 flex flex-col sm:flex-row items-center gap-10 relative overflow-hidden">
        {/* Soft Accent Background */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B7A5CE] rounded-full blur-3xl opacity-30"></div>

        {/* Left Image Section */}
        <motion.div
          className="sm:w-1/2 relative shine-wrapper"
          data-aos="fade-right"
          data-aos-delay="150"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E3DAEB] rounded-full blur-xl opacity-60"></div>
          <img
            src={image}
            alt="Coach working with students"
            className="rounded-2xl shadow-2xl w-full h-[340px] object-cover border-4 border-[#E8F1F8]"
          />
          <span className="shine"></span>

          {/* Floating Badge */}
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow text-sm text-gray-700">
            Inspiring young athletes since{" "}
            <span className="font-semibold text-[#6B429C]">2010</span>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="sm:w-1/2"
          data-aos="fade-left"
          data-aos-delay="300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0054AA]">
            Our Story
          </h2>
          <div className="h-1 w-16 bg-[#6B429C] rounded-full my-4"></div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in the heart of Los Angeles,{" "}
            <strong>Burlo Gymnastics</strong> began with a dream: to create a
            safe, inspiring environment where girls could discover their
            strength, elegance, and confidence through the art of rhythmic
            gymnastics. What started as a small community club has grown into
            one of LA’s leading programs, renowned for combining athletic
            excellence with creative expression.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We believe that every child has a unique rhythm — and our mission is
            to nurture it. Our coaching philosophy blends discipline with joy,
            emphasizing personal growth, teamwork, and artistry. From beginners
            discovering their flexibility to elite gymnasts refining
            championship routines, we guide every step with compassion and
            expertise.
          </p>

          <blockquote className="border-l-4 border-[#6B429C] pl-4 italic text-gray-600 my-6">
            “At Burlo Gymnastics, we don’t just teach routines — we shape
            confidence, grace, and lifelong self-belief.”
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            Our programs have empowered hundreds of young athletes to compete at
            regional and national levels, but our proudest achievements are the
            smiles, friendships, and growth that happen in every class.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
