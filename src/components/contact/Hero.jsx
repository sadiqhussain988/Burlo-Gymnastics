import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg"; // your image

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative py-20 sm:py-32 md:py-40 lg:py-20 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${hero})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 relative z-10">
          {/* 🔹 Heading */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight drop-shadow-lg leading-tight pt-10 md:pt-0"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Let’s{" "}
            <span className="bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>{" "}
            & Build Something{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          {/* 🔹 Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let’s make your ideas a
            reality together!
          </p>

          {/* 🔹 CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {/* 🩷 Primary Button */}
           <Link
           to="/freetrail"
           >
            <button className="bg-linear-to-r from-blue-900 to-blue-500 text-white text-base sm:text-lg font-semibold px-5 sm:px-8 py-2 rounded-full shadow-lg hover:from-blue-900 hover:to-blue-600 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Request a Free Trial
            </button>
           
           </Link>

            {/* 🔵 Secondary Button */}
            <Link to="/programs">
              <button className="border-2 border-white text-white text-base sm:text-lg font-semibold px-5 sm:px-8 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 w-full sm:w-auto">
                Program Home
              </button>
            </Link>
          </div>

          {/* ⭐ Trust Badge */}
          <div
            className="flex items-center justify-center gap-2 mt-10 text-white/90"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-blue-700"
            >
              <path d="M12 .587l3.668 7.429 8.2 1.192-5.934 5.782 1.4 8.169L12 18.896l-7.334 3.863 1.4-8.169L.132 9.208l8.2-1.192z" />
            </svg>
            <span>Trusted by 500+ LA families</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
