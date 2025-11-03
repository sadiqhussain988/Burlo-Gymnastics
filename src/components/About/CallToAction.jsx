import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className="relative text-white  overflow-hidden py-8 bg-blue-200  text-center"
      
      data-aos="zoom-in"
    >
      {/* Glow ring effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#CADEEF]/40 to-[#E3DAEB]/40 blur-2xl opacity-70 animate-pulse"></div>

      {/* Sparkle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:20px_20px] opacity-10"></div>

      <motion.div
        className="relative z-10 text-blue-800 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold tracking-wide">
          Ready to See Your Child Shine?
        </h3>
        <p className="mt-4 text-base sm:text-lg text-black leading-relaxed">
          Enroll your child in our rhythmic gymnastics program and watch them grow in
          confidence, flexibility, and grace. The first trial session is completely free!
        </p>

        <motion.a
          href="/book"
          className="relative inline-block mt-8 px-5 py-2 bg-white text-[#6B429C] font-semibold rounded-full shadow-lg overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10">Book a Free Trial</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] -left-[120%] group-hover:animate-[shine_2s_ease-in-out]"></div>
        </motion.a>
      </motion.div>

      {/* Shine animation keyframes */}
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
