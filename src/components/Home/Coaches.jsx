import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/7.jpg"
import img2 from "../../assets/8.jpg"
import img9 from "../../assets/9.jpg"
const coaches = [
  {
    name: "Coach Natalia",
    title: "Head Coach",
    img: img1,
    desc: "Former national rhythmic gymnast with 10+ years of international coaching experience.",
  },
  {
    name: "Coach Elena",
    title: "Junior Team Coach",
    img:img2,
    desc: "Passionate about helping young gymnasts develop flexibility and confidence.",
  },
  {
    name: "Coach Mia",
    title: "Beginner Classes",
    img: img9,
    desc: "Focuses on introducing rhythmic gymnastics through fun, movement, and music.",
  },
];

const Coaches = () => {
  return (
    <section
      id="coaches"
      className="relative py-20 bg-linear-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Soft decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/40 rounded-full blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-80 h-80 bg-pink-200/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4"
        >
          Coaches You'll Love
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          Our certified rhythmic gymnastics coaches inspire confidence, grace,
          and excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {coaches.map((coach, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 150}
              className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-blue-100 transition-all duration-700 group"
            >
              {/* Coach image with overlay hover effect */}
              <div className="relative overflow-hidden">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center relative z-10 bg-white/90 backdrop-blur-sm">
                <h4 className="text-2xl font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">
                  {coach.name}
                </h4>
                <p className="text-blue-600 font-medium mb-3">{coach.title}</p>
                <p className="text-gray-600 text-sm mb-4">{coach.desc}</p>

                {/* Stars */}
                <div className="flex justify-center text-amber-400 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <FaStar
                      key={j}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
