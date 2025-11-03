import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-20 bg-white px-4">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
      <div data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or ready to start? We’d love to hear from you.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-3">
            <FaPhone className="text-blue-500" /> (555) 123-4567
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-purple-500" /> info@burlogymnastics.com
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400" /> Granada Hills, CA
          </li>
        </ul>
      </div>

      <div data-aos="fade-left">
        <iframe
          title="Burlo Gymnastics Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-80 rounded-lg border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
