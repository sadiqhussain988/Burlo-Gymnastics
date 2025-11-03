// src/pages/Programs.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChild, FaMedal, FaUserFriends } from "react-icons/fa"; // Kept these, but they aren't used in the snippet yet

const Programs = () => {
  useEffect(() => {
    // Initialize AOS with a slight adjustment for a smoother feel
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out' // Added a smoother easing function
    });
  }, []);

  // Use a professional image for the background, e.g., a gymnast performing
  const backgroundImage = 'url("https://images.unsplash.com/photo-1549488344-93be1e4e37b1?fit=crop&w=1600&q=80")'; 
  // **NOTE:** Replace the above placeholder URL with your actual, high-quality image URL or import path.

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      
      {/* PROFESSIONAL & ATTRACTIVE HERO SECTION WITH BACKGROUND IMAGE */}
      <section 
        className="relative py-32 md:py-48 text-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), ${backgroundImage}` }} // Added a dark overlay for better text readability
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10"> {/* Ensure content is above the image overlay */}
          <h1
            className="text-6xl md:text-7xl font-extrabold mb-4 text-white tracking-tight drop-shadow-lg" // Larger, bolder text, white color for contrast
            data-aos="fade-down"
            data-aos-duration="1200" // Slightly longer duration for the main title
          >
            Discover Our Rhythmic Gymnastics Programs
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light" // Lighter font weight for a modern look
            data-aos="fade-up"
            data-aos-delay="300" // Delayed animation for the subtitle
          >
            From **young beginners** to **competitive athletes** and **adults** — our programs help everyone build **strength, confidence, and grace.**
          </p>
          <div data-aos="zoom-in" data-aos-delay="600" className="flex justify-center space-x-4 md:space-x-8">
            {/* Primary Call to Action Button */}
            <button className="bg-pink-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105">
              Request a Free Trial
            </button>
            {/* Secondary Call to Action Button */}
            <button className="border-2 border-white text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-pink-500 transition duration-300">
              Program Details
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;