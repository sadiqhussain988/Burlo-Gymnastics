import React from "react";
import { FaGift } from "react-icons/fa";
import bg1 from "../../assets/4.jpg";
import bg2 from "../../assets/5.jpg";
import bg3 from "../../assets/6.jpg";

const plans = [
  {
    title: "Trial Session",
    price: "Free",
    desc: "Your first session is completely free!",
    img: bg1,
  },
  {
    title: "Monthly Plan",
    price: "$149/mo",
    desc: "Unlimited access to weekly group classes.",
    img: bg2,
  },
  {
    title: "Private Coaching",
    price: "$60/hr",
    desc: "Personalized one-on-one sessions.",
    img: bg3,
  },
];

const PricingOffers = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50 text-center relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-200/30 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-300/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10">
        <h2
          data-aos="fade-up"
          className="text-3xl font-extrabold text-gray-800 mb-12"
        >
          Pricing & Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {plans.map((p, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 150}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.img})` }}
              ></div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-600/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>

              {/* Card Content */}
              <div className="relative z-10 p-10 flex flex-col items-center justify-center text-white h-full">
                <FaGift className="text-4xl text-pink-300 mb-4 group-hover:scale-125 transition-transform duration-500" />
                <h3 className="font-bold text-blue-900 text-2xl mb-2">{p.title}</h3>
                <p className="text-3xl font-extrabold text-yellow-300 mb-3">
                  {p.price}
                </p>
                <p className="text-sm text-gray-200 mb-6">{p.desc}</p>
                <a
                  href="#contact"
                  className="bg-white/90 text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-white transition-all duration-500"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOffers;
