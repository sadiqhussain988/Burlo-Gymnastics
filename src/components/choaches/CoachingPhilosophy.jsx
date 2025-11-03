import React, { useEffect } from "react";
import { FaHeart, FaUsers, FaMedal } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CoachingPhilosophy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const principles = [
    {
      icon: <FaHeart className="text-pink-500 text-5xl mb-4 drop-shadow-md" />,
      title: "Passion & Dedication",
      text: "Our coaches bring unmatched energy, guiding every gymnast with heart, patience, and purpose.",
      aos: "fade-up",
    },
    {
      icon: <FaUsers className="text-blue-500 text-5xl mb-4 drop-shadow-md" />,
      title: "Team Spirit",
      text: "We foster unity, respect, and collaboration — teaching that success is sweetest when shared.",
      aos: "fade-up",
    },
    {
      icon: <FaMedal className="text-yellow-500 text-5xl mb-4 drop-shadow-md" />,
      title: "Pursuit of Excellence",
      text: "With precision and perseverance, we shape athletes who push beyond limits to achieve greatness.",
      aos: "fade-up",
    },
  ];

  return (
    <section className="relative py-24 bg-linear-to-b from-white via-[#fdfcff] to-[#f5f4ff] overflow-hidden">


      {/* 🌸 Glowing Background (same as Achievements) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>


      {/* ✨ Section Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5 tracking-tight"
        >
          Our Coaching Philosophy
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-500 max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
        >
          We believe in nurturing every athlete’s potential through positivity,
          technical mastery, and strong team values — shaping champions for both
          sport and life.
        </p>



        {/* 💎 Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {principles.map((item, index) => (
            <div
              key={index}
              data-aos={item.aos}
              data-aos-delay={index * 150}
              className="group relative bg-white/70 backdrop-blur-lg border border-gray-100 rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out"
            >
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="transform transition-transform duration-700 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mt-3 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>



              {/* Soft hover glow */}
              <div className="absolute inset-0 bg-linear-to-tr from-pink-100/40 to-blue-100/40 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingPhilosophy;
