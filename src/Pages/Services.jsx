import React from "react";
import { FaChild, FaMedal, FaCrown } from "react-icons/fa";

const Services = () => {
  const programs = [
    {
      icon: <FaChild />,
      title: "Little Stars (Ages 3–5)",
      desc: "Fun introduction focusing on coordination & rhythm.",
    },
    {
      icon: <FaMedal />,
      title: "Junior Champions (Ages 6–9)",
      desc: "Develop core skills with ribbons, hoops, and balls.",
    },
    {
      icon: <FaCrown />,
      title: "Elite Training (Ages 10–17)",
      desc: "Advanced competition-level rhythmic gymnastics.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
