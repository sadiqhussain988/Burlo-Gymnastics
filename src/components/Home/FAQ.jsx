import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqImg from "../../assets/1.jpg";

const faqs = [
  {
    q: "What ages do you train?",
    a: "We offer classes for girls aged 3 to 17, from beginner to competitive levels.",
  },
  {
    q: "Do I need experience to join?",
    a: "Not at all! Our beginner programs are designed for newcomers to rhythmic gymnastics.",
  },
  {
    q: "Is the first class free?",
    a: "Yes, your first trial session is absolutely free — no commitment required!",
  },
  {
    q: "What should my child wear?",
    a: "A leotard or fitted athletic wear is best. We'll provide specific attire guidance during registration.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: FAQ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mb-10">
            Got questions? We've got answers! Find everything you need to know
            about our classes, age groups, and schedules below.
          </p>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-blue-100 bg-white/70 shadow-sm hover:shadow-md transition-all ${
                  openIndex === i ? "ring-2 ring-blue-300" : ""
                }`}
              >
                <button
                  className="flex justify-between w-full text-left px-6 py-4 font-semibold text-gray-800 items-center"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {item.q}
                  <FaChevronDown
                    className={`text-blue-600 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                    openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={faqImg}
              alt="FAQ Illustration"
              className="rounded-3xl shadow-lg object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
            {/* Floating effect bubble */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-200/50 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;