import { useState } from "react";
import React from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-900 padding-0">
          <img src='/resturant.png' alt="Crust Pizza" className="h-19" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Our Menu", "Catering", "Press", "Careers", "Rewards", "Franchise"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Order Online Button */}
        <a
          href="#order"
          className="hidden md:inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
        >
          Order Online
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col space-y-4 px-6">
            {["Our Menu", "Catering", "Press", "Careers", "Rewards", "Franchise"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-orange-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#order"
              className="bg-orange-500 text-white px-6 py-2 rounded-full text-center hover:bg-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
