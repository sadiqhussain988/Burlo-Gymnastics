import React from "react";
import { FaMedal, FaUserFriends, FaTrophy } from "react-icons/fa";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

const TrustStrip = () => {
  const stats = [
    {
      icon: <FaTrophy />,
      title: "10+ Years",
      desc: "Coaching Excellence",
      img: img1,
    },
    {
      icon: <FaUserFriends />,
      title: "500+ Students",
      desc: "Trained in LA",
      img: img2,
    },
    {
      icon: <FaMedal />,
      title: "50+ Awards",
      desc: "State & National",
      img: img3,
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-20 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-purple-300/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-700"
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            {/* Background Image (visible by default) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:opacity-0 transition-opacity duration-700"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>

            {/* Gradient Background (appears on hover) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-95 transition-all duration-700"></div>

            {/* Subtle Glow Ring on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-2xl transition-all duration-700"></div>

            {/* Content */}
            <div className="relative z-10 text-center p-10 flex flex-col items-center justify-center h-full transition-colors duration-700">
              <div className="text-4xl text-white drop-shadow-md mb-4 transition-transform duration-500 group-hover:scale-125">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors duration-500">
                {item.title}
              </h4>
              <p className="text-gray-100 text-sm group-hover:text-gray-200 transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
