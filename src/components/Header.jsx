import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact Us", path: "/contactus" }, 
  ];
  
  useEffect(() => {
    const currentPath = location.pathname;
    const found = navLinks.find(link => link.path === currentPath);
    if (found) {
      setActiveLink(found.name);
    }
  }, [location]);
  
  

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 transition">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black dark:text-white">Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActiveLink(link.name)}
              className={`px-3 py-2 rounded-md transition-colors duration-300 font-medium 
                ${activeLink === link.name
                  ? "bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`text-gray-700 dark:text-white transform transition-transform duration-500 ${mobileMenuOpen ? "rotate-180" : "rotate-0"
              }`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white dark:bg-gray-900 z-40 shadow-md md:hidden transform-gpu transition-all duration-200 ease-in-out origin-top ${mobileMenuOpen
          ? "scale-y-100 opacity-100"
          : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <nav className="flex flex-col items-center py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setActiveLink(link.name);
                setMobileMenuOpen(false);
              }}
              className={`w-[90%] mx-auto text-center py-3 px-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 
                rounded-md transition-colors duration-300 font-medium 
                ${activeLink === link.name
                  ? "bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
