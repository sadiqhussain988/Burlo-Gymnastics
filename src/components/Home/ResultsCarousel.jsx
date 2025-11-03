import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessica R.",
    text: "Burlo Gymnastics has transformed my daughter's confidence and posture. The coaches are incredible!",
  },
  {
    name: "Monica P.",
    text: "We love how professional and friendly everyone is. My child can’t wait for class every week!",
  },
  {
    name: "Laura T.",
    text: "The best rhythmic gymnastics program in LA! Highly recommend their summer camps too.",
  },
];

const ResultsCarousel = () => {
  return (
    <section id="results" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 text-center">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800 mb-8">
        What Parents Are Saying
      </h2>
      <div className="overflow-x-auto no-scrollbar flex gap-6 px-6 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-[300px] bg-white rounded-2xl p-6 shadow-md border border-blue-100 flex flex-col items-center">
            <FaQuoteLeft className="text-3xl text-blue-500 mb-3" />
            <p className="italic text-gray-600 mb-4">"{t.text}"</p>
            <span className="font-semibold text-blue-700">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsCarousel;
