import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative py-20 md:pb-20 md:pt-30  text-center bg-[url('/hero.jpg')] bg-cover bg-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Glowing background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-xl"
        >
          Meet Our Professional Coaches
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Our world-class coaches empower gymnasts to achieve excellence through
          passion, precision, and personalized training.
        </p>

        {/* Buttons with animation */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex justify-center gap-5 mt-6 flex-wrap"
        >
          {/* Primary Button with Shine */}
          <button className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-all duration-500 ease-out group">
            <span className="relative z-10">Explore Coaches</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[25deg] -left-[150%] group-hover:animate-[shine_2s_ease-in-out]"></div>
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-700 ease-out">
            Join Our Team
          </button>
        </div>
      </div>

      {/* Floating ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/10 via-transparent to-blue-200/10 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-out"></div>

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
};

export default Hero;
