import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen text-gray-900 pt-22 px-6 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>

      {/* Soft gradient only at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent"></div>

      {/* Decorative glow circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -top-20 -left-16 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl" data-aos="fade-up">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-3 text-blue-950 drop-shadow-sm">
          LA’s Elite Rhythmic Gymnastics
        </h1>

        <p className="text-lg lg:text-xl mb-10 text-gray-800 leading-relaxed">
          Confidence, Flexibility, Grace, & Results — Coach-led classes for ages
          3–17. Flexible schedule. First session free.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition-all flex items-center gap-2"
          >
            Free Trial
            <FaArrowRight />
          </a>

          <a
            href="#programs"
            className="border border-blue-700 text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all"
          >
            Explore Programs
          </a>
        </div>

        {/* Trust Badge */}
        <div
          className="flex items-center justify-center gap-2 mt-10 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaStar className="text-blue-600" />
          <span>Trusted by 500+ LA families</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
