import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const backgroundImage = 'url("hero1.jpg")';

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero SECTION */}
      <section
        className="relative py-20 sm:py-32 md:py-20 lg:py-25 text-center bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), ${backgroundImage}`,
        }}
      >
        {/* Floating gradient Circles */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-[#6B429C]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0677BA]/40 rounded-full blur-3xl"></div>

        <motion.div
          className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-200 tracking-tight drop-shadow-xl leading-tight"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Discover{" "}
            <span className="bg-gradient-to-r from-[gray] to-[#E3DAEB] bg-clip-text text-transparent">
              Rhythmic Gymnastics Excellence
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light px-2 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            From <strong>young beginners</strong> to <strong>elite competitors</strong>,
            we help athletes grow in <strong>confidence</strong>, <strong>strength</strong>,
            and <strong>grace</strong> through world-class coaching.
          </motion.p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {/* Primary Button with Shine Effect */}
            <Link to="/freetrial" className="relative group w-full sm:w-auto">
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 text-white text-base sm:text-lg font-semibold px-8 sm:px-10 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10">Request a Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] -left-[150%] group-hover:animate-[shine_1.8s_ease-in-out]"></div>
              </button>
            </Link>

            {/* Secondary Button */}
            <Link to="/" className="w-full sm:w-auto">
              <button className="border-2 border-white text-white text-base sm:text-lg font-semibold px-8 sm:px-10 py-3 rounded-full hover:bg-white hover:text-[#6B429C] transition-all duration-300 w-full sm:w-auto">
                Program Home
              </button>
            </Link>
          </div>
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
    </div>
  );
};

export default Hero;
