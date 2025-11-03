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
    <section className="relative py-36 md:py-44 text-center bg-[url('/hero.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>


      {/* Subtle glowing background accents (same theme as Achievements) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
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

        {/* Call to action buttons with subtle glow hover effect */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex justify-center gap-5 mt-6"
        >
          <button className="px-8 py-3 bg-linear-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out">
            Explore Coaches
          </button>
          <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-700 ease-out">
            Join Our Team
          </button>
        </div>
      </div>

      {/* Decorative floating glow on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-pink-200/20 via-transparent to-blue-200/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
    </section>
  );
};

export default Hero;
