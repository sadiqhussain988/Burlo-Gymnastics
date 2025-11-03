import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const testimonials = [
    {
      name: "Sophie (Age 12)",
      text: "Coach Natalia makes training fun and exciting! I’ve learned so much about balance, grace, and confidence.",
      aos: "fade-up",
    },
    {
      name: "Emily (Parent)",
      text: "My daughter loves every session! The coaches are patient, professional, and truly care about each child’s progress.",
      aos: "fade-up",
    },
    {
      name: "Hannah (Age 14)",
      text: "I’ve become stronger and more flexible! The classes are challenging but always enjoyable — I look forward to every session.",
      aos: "fade-up",
    },
    {
      name: "Mrs. Sarah (Parent)",
      text: "Seeing my child’s confidence grow through gymnastics has been amazing. The environment is positive and inspiring.",
      aos: "fade-up",
    },
  ];

  return (
    <section className="relative py-24 bg-linear-to-b from-white via-[#fdfcff] to-[#f5f4ff] overflow-hidden">
      {/* 🌸 Background Glow Effects (matching theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* ✨ Section Heading */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight"
        >
          What Our Students Say
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
        >
          Hear from our amazing students and parents about their experiences
          training with our dedicated coaching team.
        </p>

        {/* 💬 Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos={t.aos}
              data-aos-delay={i * 150}
              className="group relative bg-white/70 backdrop-blur-lg border border-gray-100 rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out"
            >
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                “{t.text}”
              </p>
              <h4 className="font-semibold text-gray-800 text-lg">
                {t.name}
              </h4>

              {/* Glow hover effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-pink-100/40 to-blue-100/40 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
