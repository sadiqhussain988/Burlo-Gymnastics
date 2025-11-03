import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/Logo_vertical.png";

// navbar
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    const handleEsc = (e) => e.key === "Escape" && setActiveDropdown(null);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { label: "Our Story", path: "/about/story" },
        { label: "Mission & Values", path: "/about/mission" },
      ],
    },
    {
      name: "Programs",
      path: "/programs",
      dropdown: [
        { label: "Kids Classes", path: "/programs/kids" },
        { label: "Competitive Teams", path: "/programs/teams" },
        { label: "Adult Gymnastics", path: "/programs/adult" },
      ],
    },
    { name: "Services", path: "/services" },
    { name: "Coaches", path: "/coaches" },
    { name: "Facility", path: "/facility" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-gradient-to-r from-[#E8F1F8]/80 via-[#CADEEF]/80 to-[#F3F0F8]/80 backdrop-blur-md border-b border-white/40 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Burlo Gymnastics Home"
          >
            <img
              src={logo}
              alt="Burlo Gymnastics Logo"
              className="h-14 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {!item.dropdown ? (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      scrolled
                        ? "text-gray-700 hover:text-blue-950 hover:bg-blue-50"
                        : "text-gray-700 hover:text-blue-950 hover:bg-blue-100/40"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-950 hover:bg-blue-50"
                          : "text-gray-700 hover:text-blue-950 hover:bg-blue-100/40"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === index}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 origin-top ${
                        activeDropdown === index
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-950 font-medium border-b border-gray-100 last:border-b-0 transition-all"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-blue-800  text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-gray-700 hover:bg-blue-100/40"
            }`}
          >
            {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 border-t border-gray-200/50 bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {!item.dropdown ? (
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all"
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="bg-blue-50 ml-4 border-l-2 border-blue-200 transition-all">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="mx-4 mt-4 block text-center bg-gradient-to-r from-[#FFD97A] to-[navy] hover:from-[#FFC857] hover:to-[#FFB347] text-gray-900 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
              onClick={() => setOpen(false)}
            >
              Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
