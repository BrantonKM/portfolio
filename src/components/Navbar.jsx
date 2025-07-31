import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide">
          Branton.dev
        </h1>
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-cyan-400 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-cyan-400 pb-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-cyan-400 pb-1"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-cyan-400 pb-1"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-cyan-400 pb-1"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-cyan-400 pb-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
