import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import coach1 from "../../assets/4.jpg";
import coach2 from "../../assets/5.jpg";
import coach3 from "../../assets/6.jpg";

export default function CoachesSection() {
  const coaches = [
    {
      img: coach1,
      name: "Coach Anna Burlo",
      title: "Founder & Head Coach",
      blurb:
        "Former national rhythmic gymnast with 15+ years of experience training young athletes to perform with grace and power.",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      img: coach2,
      name: "Coach Mia Lopez",
      title: "Assistant Coach",
      blurb:
        "Creative choreographer specializing in beginner and intermediate rhythmic gymnastics, helping students express artistry with discipline.",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      img: coach3,
      name: "Coach Sophia Chen",
      title: "Technical Coach",
      blurb:
        "Focuses on perfecting routines, enhancing flexibility, and preparing athletes for regional and national competitions.",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  ];

  return (
    <section
      className="relative py-12 bg-gradient-to-b from-[#E8F1F8] to-[#F3F0F8] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Decorative glows */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#B7A5CE] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#CADEEF] rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          className="text-4xl font-bold text-[#0054AA]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Coaches
        </motion.h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 mb-12">
          Passionate, certified, and dedicated — our coaches bring years of
          rhythmic gymnastics expertise and heart to every class.
        </p>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coaches.map((c, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-[2px] shadow-xl hover:shadow-2xl hover:shadow-[#6B429C]/20 transition-all duration-500"
              data-aos="zoom-in-up"
              data-aos-delay={i * 150}
              whileHover={{ scale: 1.05 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] -left-[120%] group-hover:animate-[shine_2s_ease-in-out]"></div>
              </div>

              {/* Card Inner */}
              <div className="relative bg-white/80 rounded-3xl p-6 transition-all duration-300 group-hover:bg-white/90">
                <div className="relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-[#E8F1F8]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-full bg-[#6B429C]/80 flex items-center justify-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={c.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-pink-300 transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href={c.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-300 transition-colors"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a
                      href={c.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-300 transition-colors"
                    >
                      <FaLinkedinIn className="text-xl" />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-[#6B429C] mt-4">
                  {c.name}
                </h4>
                <div className="text-sm text-gray-500 mb-2">{c.title}</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {c.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { left: -150%; }
          50% { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>
    </section>
  );
}
