import React from "react";
import {
   FaShieldAlt,
   FaClock,
   FaUserCheck,
   FaAward,
   FaHeart,
   FaSmile,
} from "react-icons/fa";

const benefits = [
   {
      icon: <FaShieldAlt />,
      title: "Safety First",
      desc: "Certified safety protocols and injury prevention training",
   },
   {
      icon: <FaClock />,
      title: "Flexible Scheduling",
      desc: "Multiple time slots to fit your family's busy schedule",
   },
   {
      icon: <FaUserCheck />,
      title: "Qualified Coaches",
      desc: "Internationally trained and certified rhythmic gymnastics coaches",
   },
   {
      icon: <FaAward />,
      title: "Proven Results",
      desc: "Track record of success in regional and national competitions",
   },
   {
      icon: <FaHeart />,
      title: "Nurturing Environment",
      desc: "Positive atmosphere that builds confidence and self-esteem",
   },
   {
      icon: <FaSmile />,
      title: "Fun Learning",
      desc: "Engaging activities that make gymnastics enjoyable for all ages",
   },
];

const ServiceBenefits = () => {
   return (
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-96 h-96 bg-purple-200/20 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-blue-300/20 rounded-full blur-3xl bottom-10 right-10"></div>
         </div>

         <div className="relative z-10 max-w-6xl mx-auto px-6">
            <h2
               data-aos="fade-up"
               className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center"
            >
               Why Choose Our Services?
            </h2>
            <p
               data-aos="fade-up"
               data-aos-delay="100"
               className="text-gray-500 mb-12 max-w-2xl mx-auto text-center"
            >
               We're committed to providing the best rhythmic gymnastics
               experience in Los Angeles
            </p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
               {benefits.map((benefit, i) => (
                  <div
                     key={i}
                     data-aos="fade-up"
                     data-aos-delay={i * 100}
                     className="relative p-6 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 group text-center"
                  >
                     <div className="relative z-10">
                        <div className="text-3xl text-blue-600 mb-4 transition-transform duration-500 group-hover:scale-110 inline-flex">
                           {benefit.icon}
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                           {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700">
                           {benefit.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceBenefits;
