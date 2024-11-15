import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true); // Change the state when scroll position is greater than 10
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 transition-all duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      } z-50`}
    >
      {/* Logo */}
      <div className="font-bold text-2xl">Yashi IT Services</div>

      {/* Menu items */}
      <div className="hidden lg:flex space-x-6">
        <a href="#" className="hover:text-blue-300">
          HOME
        </a>
        <a href="#" className="hover:text-blue-300">
          COMPANY
        </a>
        <a href="#" className="hover:text-blue-300">
          SERVICES
        </a>
        <a href="#" className="hover:text-blue-300">
          CASE STUDIES
        </a>
        <a href="#" className="hover:text-blue-300">
          CONTACT
        </a>
      </div>

      {/* Search and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <button className="text-white">🔍</button>
        <button className="text-white lg:hidden">☰</button>
      </div>
    </nav>
  );
}

export default Navbar;
