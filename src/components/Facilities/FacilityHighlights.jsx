import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    title: "Personal Training Studio",
    description:
      "Get personalized coaching and goal-focused training sessions — because your fitness deserves full attention.",
    image: "gim (2).jpg",
    details:
      "Our personal training studio is equipped with advanced strength and cardio machines, allowing you to focus on your goals with a certified trainer. Whether you're a beginner or a pro, our coaches tailor workouts to your pace and help track measurable progress.",
  },
  {
    title: "Group Class Arena",
    description:
      "Join our high-energy group sessions. From CrossFit to Yoga — push limits and have fun with your fit fam.",
    image: "gim (3).jpg",
    details:
      "Step into an arena of energy! Our group classes include Zumba, HIIT, Spin, Yoga, and Bootcamp sessions led by expert trainers. Perfect for motivation, community spirit, and boosting endurance while having fun.",
  },
  {
    title: "Recovery & Wellness Lounge",
    description:
      "Relax and recharge after your workout in our premium recovery zone featuring massage chairs and smoothies.",
    image: "gim (4).jpg",
    details:
      "Post-workout recovery is key to progress. Our wellness lounge features therapeutic massage chairs, recovery tools, and protein-rich smoothies designed to help muscles heal and relax after intense sessions.",
  },
];

function FacilityHighlights() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 px-6 md:px-16 bg-[#E3EEFE] relative">
      <h2
        className="text-4xl font-extrabold text-center mb-12 text-gray-900"
        data-aos="fade-up"
      >
        Our Highlights
      </h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
          >
            {/* Image */}
            <div className="overflow-hidden h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <button
                onClick={() => setSelected(item)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all"
              >
                Learn More
              </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        ))}
      </div>

      {/* Popup Modal with Animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Close Button */}
              <div className="">
                <button
                onClick={() => setSelected(null)}
                className="absolute  top-3 right-3 text-gray-500 hover:text-red-500 text-3xl font-bold"
              >
                ×
              </button>
              </div>

              {/* Image */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selected.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selected.details}
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FacilityHighlights;
