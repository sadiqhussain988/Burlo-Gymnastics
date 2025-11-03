import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/1.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#CADEEF] to-[#E8F1F8] py-24 px-6 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/* Background Blurs */}
      <div className="absolute top-10 -left-10 w-32 h-32 bg-[#E3DAEB] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 right-0 w-48 h-48 bg-[#B7A5CE] rounded-full blur-3xl opacity-40"></div>

      {/* Inline Shine Animation CSS */}
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
            rgba(255, 255, 255, 0.4) 50%,
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

      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-10 z-10 relative">
        {/* Left Content */}
        <motion.div
          className="sm:w-1/2 text-center sm:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-block bg-[#E3DAEB] text-[#6B429C] text-sm font-semibold px-3 py-1 rounded-full mb-4"
            data-aos="zoom-in"
          >
            Welcome to Burlo Gymnastics
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0054AA] leading-tight">
            Building <span className="text-[#6B429C]">Confidence</span>,{" "}
            <span className="text-[#6B429C]">Flexibility</span> &{" "}
            <span className="text-[#6B429C]">Grace</span> — One Routine at a Time
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Where girls discover their strength, elegance, and lifelong
            confidence through the art of rhythmic gymnastics. Empowering ages
            3–17 with elite, coach-led classes.
          </p>

          {/* CTA Buttons with Shine Effect */}
          <motion.div
            className="mt-8 flex justify-center sm:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="shine-wrapper">
              <a
                href="/schedule"
                className="bg-[#6B429C] relative overflow-hidden text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#8869AF] transition-all duration-300 inline-block"
              >
                Free Trial
                <span className="shine"></span>
              </a>
            </div>
            <a
              href="/contact"
              className="border-2 border-[#6B429C] text-[#6B429C] px-6 py-3 rounded-xl font-medium hover:bg-[#6B429C]/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Shine Overlay */}
        <motion.div
          className="sm:w-1/2 relative shine-wrapper"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="zoom-in"
        >
          <img
            src={image}
            alt="Gymnast performing routine"
            className="rounded-3xl shadow-2xl w-full h-[360px] sm:h-[420px] object-cover border-4 border-white"
          />
          <span className="shine"></span>
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-[#0054AA] px-3 py-2 rounded-lg text-sm font-medium shadow">
            LA’s Elite Rhythmic Gymnastics
          </div>
        </motion.div>
      </div>
    </section>
  );
}
