import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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
      {/* HERO SECTION */}
      <section
        className="relative py-20 sm:py-32 md:py-40 lg:py-48 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), ${backgroundImage}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 relative z-10">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white tracking-tight drop-shadow-lg leading-tight pt-10 md:pt-0"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Discover Our Rhythmic Gymnastics Programs
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            From <strong>young beginners</strong> to <strong>competitive athletes</strong> and <strong>adults</strong> — our programs help everyone build <strong>strength</strong>, <strong>confidence</strong>, and <strong>grace</strong>.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {/* Primary Button */}
          <Link
            to="/freetrail"
          >
          
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Request a Free Trial
            </button>
          </Link>

            {/* Secondary Button */}
            <Link
            to="/"
            >

            <button className="border-2 border-white text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-pink-500 transition duration-300 w-full sm:w-auto">
              Program Home
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
