import React from 'react';

export default function ServicesPage() {
  return (
    <section id="services" className="relative container mx-auto p-8 section-scroll-margin pb-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        My Services
      </h1>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-500">Web Development</h2>
          <p className="mt-4 text-lg text-gray-100">
            I offer comprehensive full-stack web development services, tailored to meet your specific needs. From responsive front-end designs to robust back-end systems, I create websites and applications that are not only visually striking but also highly functional and user-friendly. Whether you&apos;re looking for a sleek portfolio site, a dynamic web app, or an e-commerce platform, I&apos;ve got you covered.
          </p>
        </div>

        <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-500">UI/UX Design</h2>
          <p className="mt-4 text-lg text-gray-100">
            My design philosophy centers around creating intuitive, engaging user experiences. I focus on crafting interfaces that are both aesthetically pleasing and easy to navigate, ensuring that your users have a seamless and enjoyable experience. Let&apos;s work together to build a design that not only looks great but also enhances your brand and drives user engagement.
          </p>
        </div>

        <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-500">SEO Optimization</h2>
          <p className="mt-4 text-lg text-gray-100">
            In today&apos;s digital landscape, visibility is key. I offer SEO optimization services that help improve your website&apos;s ranking on search engines, driving more organic traffic to your site. Through a combination of on-page SEO, keyword research, and content optimization, I can help you reach a larger audience and achieve your online goals.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="#contact" className="btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
}
