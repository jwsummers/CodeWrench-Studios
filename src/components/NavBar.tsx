"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../public/images/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="#hero">
            <Image src={logo} alt="CodeWrench Studios Logo" width={80} height={80} className="cursor-pointer" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#services" className="nav-link">
            Services
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-800 text-white w-full absolute left-0 top-16 shadow-lg z-40 transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4">
          <li>
            <Link href="#about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="nav-link" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
