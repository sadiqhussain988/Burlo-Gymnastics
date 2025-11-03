import React from "react";
import { FaUsers, FaCalendarAlt, FaMusic, FaTrophy, FaHome, FaSchool } from "react-icons/fa";
import specialized1 from "../../../public/imgs/IMG_8619.JPG";
import specialized2 from "../../../public/imgs/IMG_0041.JPG";
import specialized3 from "../../../public/imgs/IMG_8768.JPG";

const specializedServices = [
  {
    icon: <FaUsers />,
    title: "Group Classes",
    desc: "Dynamic group sessions fostering teamwork and social skills",
    details: ["Small group sizes", "Age-appropriate activities", "Peer learning", "Social development"],
    img: specialized1
  },
  {
    icon: <FaCalendarAlt />,
    title: "Summer Camps",
    desc: "Intensive seasonal programs combining gymnastics with creative arts",
    details: ["Weekly sessions", "Performance showcases", "Outdoor activities", "Creative workshops"],
    img: specialized2
  },
  {
    icon: <FaMusic />,
    title: "Music & Choreography",
    desc: "Specialized training in rhythm, musicality, and routine composition",
    details: ["Music selection", "Choreography design", "Expression training", "Performance arts"],
    img: specialized3
  },
  {
    icon: <FaTrophy />,
    title: "Competition Training",
    desc: "Focused preparation for regional and national competitions",
    details: ["Routine refinement", "Judging criteria", "Mental preparation", "Competition simulation"],
    img: specialized1
  },
  {
    icon: <FaHome />,
    title: "Private Sessions",
    desc: "One-on-one coaching for personalized skill development",
    details: ["Customized training", "Flexible scheduling", "Focused attention", "Rapid progress"],
    img: specialized2
  },
  {
    icon: <FaSchool />,
    title: "School Programs",
    desc: "Partnership programs with local schools for extracurricular activities",
    details: ["School partnerships", "After-school programs", "Curriculum integration", "Transportation options"],
    img: specialized3
  }
];

const SpecializedServices = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -top-24 -left-24"></div>
        <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
          Specialized Services
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 mb-12 max-w-2xl mx-auto text-center">
          Beyond regular classes - specialized programs for every need and interest
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {specializedServices.map((service, i) => (
            <div
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 100}
              className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-blue-100 transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 text-2xl text-white bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                
                <div className="space-y-1 mb-4">
                  {service.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors">
                  View Schedule →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;