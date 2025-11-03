import React from "react";
import { FaPhone, FaCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";

const CTASection = () => {
   return (
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48"></div>
            <div className="absolute w-80 h-80 bg-white rounded-full -bottom-40 -right-40"></div>
         </div>

         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2
               data-aos="fade-up"
               className="text-3xl md:text-4xl font-extrabold mb-6"
            >
               Ready to Start Your Gymnastics Journey?
            </h2>
            <p
               data-aos="fade-up"
               data-aos-delay="100"
               className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            >
               Join hundreds of satisfied families who have discovered the joy
               of rhythmic gymnastics
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
               <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="flex flex-col items-center"
               >
                  <FaPhone className="text-3xl text-amber-300 mb-3" />
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <p className="text-blue-100 text-sm">(555) 123-GYMN</p>
               </div>
               <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="flex flex-col items-center"
               >
                  <FaCalendarCheck className="text-3xl text-amber-300 mb-3" />
                  <h4 className="font-bold mb-2">Schedule Trial</h4>
                  <p className="text-blue-100 text-sm">Free First Session</p>
               </div>
               <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="flex flex-col items-center"
               >
                  <FaMapMarkerAlt className="text-3xl text-amber-300 mb-3" />
                  <h4 className="font-bold mb-2">Visit Studio</h4>
                  <p className="text-blue-100 text-sm">Granada Hills, LA</p>
               </div>
            </div>

            <div
               data-aos="fade-up"
               data-aos-delay="500"
               className="flex flex-wrap justify-center gap-4"
            >
               <a
                  href="#contact"
                  className="bg-white hover:bg-blue-50 text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
               >
                  Book Free Trial
               </a>
               <a
                  href="#programs"
                  className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all"
               >
                  View Programs
               </a>
            </div>
         </div>
      </section>
   );
};

export default CTASection;
