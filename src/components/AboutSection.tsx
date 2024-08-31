import React from 'react';
import Image from 'next/image';
import small_logo from '../public/images/small_logo.png';
import about_img from '../public/images/about-me-img.jpg';

export default function AboutPage() {
  return (
    <section id="about" className="relative w-full p-8 m-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">

      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl font-bold text-center text-primary">
          About <span className="text-blue-500">CodeWrench Studios</span>
        </h1>
        <Image
          src={small_logo}
          alt="CodeWrench Studios Logo"
          width={50}
          height={50}
          className="ml-2"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-24">
            <p className="text-lg">
              Welcome to CodeWrench Studios, where my journey from the automotive industry to web development has shaped a unique approach to crafting digital experiences. With over 20 years of problem-solving and attention to detail in mechanics, I bring the same precision to developing responsive, secure, and efficient web applications.
            </p>

            <p className="text-lg mt-4">
              At CodeWrench Studios, my mission is to deliver impactful digital solutions tailored to your needs. Whether you're looking to establish an online presence, enhance user experience, or optimize for performance, I'm dedicated to making your vision a reality. Let's collaborate to build something exceptional.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Get Started Today
            </a>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Coding on laptop"
              src={about_img}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
