import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/Logo_vertical.png";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Schedule", path: "/schedule" },
    { name: "Coaches", path: "/coaches" },
    { name: "Facility", path: "/facility" },
    { name: "FAQ", path: "/faq" },
  ];

  const programs = [
    "Rhythmic Gymnastics",
    "Competitive Teams",
    "Recreational Classes",
    "Summer Camps",
    "Private Lessons",
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/burlogymnastics",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@burlogymnastics",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/burlogymnastics",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-gray-700 border-t border-purple-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Main grid layout */}
        <div className="pt-12 pb-8 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo and About */}
          <div>
            <img src={logo} alt="Burlo Gymnastics" className="h-16 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              LA’s premier rhythmic gymnastics academy nurturing young athletes
              aged 3–17 with world-class coaching and artistic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-gray-600 hover:text-blue-700 transition-colors cursor-pointer">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <p>Granada Hills, CA</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <p>info@burlogymnastics.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold text-gray-800 mb-2">
                Follow Us
              </h5>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-blue-700 hover:shadow-md transition-all"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-200 pt-4 pb-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>
            © 2025 Burlo Gymnastics. All rights reserved.{" "}
            <Link to="/privacy" className="hover:text-blue-700 ml-1">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-blue-700 ml-1">
              Terms of Service
            </Link>
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Now accepting new students for 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
