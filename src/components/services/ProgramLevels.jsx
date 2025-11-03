import React from "react";
import { FaBaby, FaChild, FaUser, FaStar } from "react-icons/fa";
import level1 from "../../../public/imgs/IMG_8678.JPG";
import level2 from "../../../public/imgs/IMG_8619.JPG";
import level3 from "../../../public/imgs/IMG_8768.JPG";

const levels = [
   {
      icon: <FaBaby />,
      title: "Beginner Level (Ages 3-6)",
      desc: "Introduction to basic movements, balance, and coordination through fun activities",
      features: [
         "Basic stretching",
         "Simple routines",
         "Music & movement",
         "Group activities",
      ],
      img: level1,
      color: "from-pink-100 to-purple-100",
   },
   {
      icon: <FaChild />,
      title: "Intermediate Level (Ages 7-12)",
      desc: "Developing technical skills with apparatus and building foundation for competitive gymnastics",
      features: [
         "Apparatus training",
         "Flexibility development",
         "Routine choreography",
         "Skill progression",
      ],
      img: level2,
      color: "from-blue-100 to-indigo-100",
   },
   {
      icon: <FaUser />,
      title: "Advanced Level (Ages 13-17)",
      desc: "Elite training for competitive athletes focusing on complex routines and competition preparation",
      features: [
         "Advanced techniques",
         "Competition preparation",
         "Performance psychology",
         "National standards",
      ],
      img: level3,
      color: "from-purple-100 to-blue-100",
   },
];

const ProgramLevels = () => {
   return (
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
         {/* Background glows */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -top-10 -left-10"></div>
            <div className="absolute w-80 h-80 bg-purple-300/20 rounded-full blur-3xl bottom-0 right-0"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h2
               data-aos="fade-up"
               className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center"
            >
               Program Levels
            </h2>
            <p
               data-aos="fade-up"
               data-aos-delay="100"
               className="text-gray-500 mb-12 max-w-2xl mx-auto text-center"
            >
               Structured progression system ensuring optimal development at
               every stage
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
               {levels.map((level, i) => (
                  <div
                     key={i}
                     data-aos="zoom-in-up"
                     data-aos-delay={i * 150}
                     className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-blue-100 transition-all duration-500 group"
                  >
                     {/* Image */}
                     <div className="relative h-48 overflow-hidden">
                        <img
                           src={level.img}
                           alt={level.title}
                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                        <div
                           className={`absolute bottom-4 left-4 text-3xl text-white drop-shadow-lg`}
                        >
                           {level.icon}
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                           {level.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                           {level.desc}
                        </p>

                        <div className="space-y-2 mb-6">
                           {level.features.map((feature, j) => (
                              <div
                                 key={j}
                                 className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                 <FaStar className="text-amber-400 text-xs" />
                                 <span>{feature}</span>
                              </div>
                           ))}
                        </div>

                        <a
                           href="#contact"
                           className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                        >
                           Learn More
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProgramLevels;
