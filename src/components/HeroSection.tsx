"use client";

import ParticlesComponent from "../components/Particles";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { FiArrowUp } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center h-screen w-full bg-gradient-to-r from-black via-dark-blue to-black"
    >
      {/* Particles Effect */}
      <ParticlesComponent />

      {/* Logo in the top-left corner */}
      <div className="absolute top-4 left-4 z-50">
        <Image src={logo} alt="CodeWrench Studios Logo" width={80} height={80} className="cursor-pointer" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white rounded-full px-4 py-2 flex justify-center items-center shadow-lg max-w-fit">
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Outer card for the animated border */}
      <div className="hero-card-outer relative z-10 p-4 rounded-md mx-auto text-center">
        {/* Inner card for the content */}
        <div className="hero-card-inner p-8 rounded-md bg-opacity-50 w-full h-full">
          <h1 className="text-6xl font-bold text-primary hidden-before-fade fade-in mb-8">
            Welcome to <span className="text-blue-500">CodeWrench Studios</span>
          </h1>
          <p className="text-lg text-gray-100 hidden-before-fade fade-in-delayed mb-4">
            At <span className="text-blue-500">CodeWrench Studios</span>, I am passionate about delivering impactful digital solutions that drive results and exceed expectations.
          </p>
          <p className="text-md text-gray-300 hidden-before-fade fade-in-delayed mb-8">
            With a unique blend of hands-on precision and craftsmanship, I bring the same dedication and meticulous attention to detail to every web development project. Let me help you turn your vision into reality with cutting-edge technology and innovative design.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#services" className="btn-primary">Services</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Sticky arrow for scrolling back to the top */}
      {scrolled && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <a href="#hero">
            <FiArrowUp size={30} className="text-white bg-gray-900 p-2 rounded-full" />
          </a>
        </div>
      )}
    </section>
  );
}

