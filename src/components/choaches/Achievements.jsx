import React, { useEffect } from "react";
import { FaTrophy, FaUsers, FaMedal, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-400 text-5xl mb-4 drop-shadow-lg" />,
      title: "25+ National Titles",
      desc: "Our athletes have achieved gold and silver medals across national gymnastics championships since 2015.",
      aos: "fade-up",
    },
    {
      icon: <FaUsers className="text-blue-500 text-5xl mb-4 drop-shadow-lg" />,
      title: "800+ Students Trained",
      desc: "We’ve trained over 800 athletes under expert guidance — many now representing Pakistan internationally.",
      aos: "fade-up",
    },
    {
      icon: <FaMedal className="text-pink-500 text-5xl mb-4 drop-shadow-lg" />,
      title: "15 International Awards",
      desc: "Our excellence in athlete development has been recognized globally by international sports federations.",
      aos: "fade-up",
    },
    {
      icon: <FaHeart className="text-red-500 text-5xl mb-4 drop-shadow-lg" />,
      title: "Building a Legacy",
      desc: "Beyond medals, we instill discipline, passion, and teamwork to build the next generation of champions.",
      aos: "fade-up",
    },
  ];

  return (
    <section className="relative py-28 bg-linear-to-b from-white via-[#fdfcff] to-[#f5f4ff] overflow-hidden">


      {/*  Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>


      {/*  Section Header */}
      <div
        data-aos="fade-down"
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Achievements & Awards
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg"
        >
          Celebrating our journey of excellence, dedication, and the success of
          every athlete who has trained with us.
        </p>
      </div>


      {/* Achievements Grid */}
      <div
        className="relative z-10 grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6"
      >
        {achievements.map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            data-aos-delay={index * 150}
            className="group relative bg-white/70 backdrop-blur-lg border border-gray-100 rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3"
          >
            <div className="flex flex-col items-center text-center">
              <div className="transform transition-transform duration-700 group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-3">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
            

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-pink-100/40 to-blue-100/40 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-700 ease-out"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
