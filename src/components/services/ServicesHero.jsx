import React from "react";
import { FaArrowRight } from "react-icons/fa";
import servicesHero from "../../../public/imgs/IMG_8768.JPG"; // Add your image

const ServicesHero = () => {
   return (
      <section className="relative h-96 text-gray-900 h-fit mt-20 py-22  px-6 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden">
         {/* Background Image */}
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
               backgroundImage: `url(${servicesHero})`,
            }}
         ></div>

         {/* Gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-purple-700/50 to-transparent"></div>

         {/* Decorative glow */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -top-20 -left-16 animate-pulse-slow"></div>
            <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow"></div>
         </div>

         {/* Content */}
         <div className="relative z-10 max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-sm">
               Our Gymnastics Services
            </h1>
            <p className="text-lg lg:text-xl mb-6 text-blue-100 leading-relaxed">
               Comprehensive rhythmic gymnastics programs tailored for every age
               and skill level
            </p>
            
         </div>
      </section>
   );
};

export default ServicesHero;
