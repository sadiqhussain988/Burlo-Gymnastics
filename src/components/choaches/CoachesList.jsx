import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/7.jpg";
import img2 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";

const coaches = [
    {
        name: "Coach Natalia",
        title: "Head Coach",
        img: img1,
        desc: "Former national rhythmic gymnast with 10+ years of international coaching experience. She brings excellence and energy to every session.",
    },
    {
        name: "Coach Elena",
        title: "Junior Team Coach",
        img: img2,
        desc: "Elena’s passion for growth inspires her students to push limits while having fun — she blends flexibility with confidence.",
    },
    {
        name: "Coach Mia",
        title: "Beginner Classes",
        img: img9,
        desc: "Mia specializes in introducing young gymnasts to the beauty of rhythmic gymnastics through fun, movement, and rhythm.",
    },
];

const CoachesList = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    }, []);

    return (
        <section className="relative py-24 bg-linear-to-b from-white via-[#fdfcff] to-[#f5f4ff] overflow-hidden">

            {/*  Soft background glows (same theme as Testimonials) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-[450px] h-[450px] bg-pink-100/40 rounded-full blur-3xl -top-10 -left-10"></div>
                <div className="absolute w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl bottom-0 right-0"></div>
            </div>



            {/*  Section Title */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h2
                    data-aos="fade-down"
                    className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight"
                >
                    Meet Our Coaches
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
                >
                    Our certified rhythmic gymnastics coaches are passionate about
                    inspiring confidence, discipline, and joy in every athlete they train.
                </p>


                {/*  Coaches Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {coaches.map((coach, i) => (
                        <div
                            key={i}
                            data-aos="zoom-in-up"
                            data-aos-delay={i * 150}
                            className="group relative bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out"
                        >


                            {/*  Coach Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={coach.img}
                                    alt={coach.name}
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                            </div>



                            {/* Coach Info */}
                            <div className="p-8 text-center relative z-10 bg-white/80 backdrop-blur-md">
                                <h4 className="text-2xl font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors duration-500">
                                    {coach.name}
                                </h4>
                                <p className="text-blue-600 font-medium mb-3">{coach.title}</p>
                                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                                    {coach.desc}
                                </p>


                                {/*  Ratings */}
                                <div className="flex justify-center text-amber-400 gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <FaStar
                                            key={j}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ))}
                                </div>


                                {/* Glow overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-tr from-pink-100/40 to-blue-100/40 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-700 ease-out"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoachesList;
