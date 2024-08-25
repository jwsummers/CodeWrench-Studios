import React from 'react';
import ParticlesComponent from "../components/Particles";

export default function AboutPage() {
  return (
    <section id="about" className="relative container mx-auto p-8 section-scroll-margin">
      {/* Particles Effect */}
      <ParticlesComponent />

      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        About <span className="text-blue-500">CodeWrench Studios</span>
      </h1>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 bg-opacity-60 bg-black p-8 rounded-md">
        <p className="text-lg text-gray-100">
          Welcome to CodeWrench Studios, where the precision and craftsmanship of automotive mechanics meet the creativity
          and innovation of web development. Founded by a seasoned mechanic turned web developer, CodeWrench Studios is more
          than just a development company—it's a fusion of hands-on experience and cutting-edge technology.
        </p>

        <p className="text-lg text-gray-100">
          With over 20 years in the automotive industry, I realized that the same principles of problem-solving,
          attention to detail, and commitment to quality that are essential in mechanics apply just as much to web
          development. After a successful career in the automotive field, I decided to transition into technology, focusing
          on web development. Over the past 8 years, I've honed my skills in full-stack development, specializing in
          creating responsive, secure, and efficient web applications.
        </p>

        <p className="text-lg text-gray-100">
          At CodeWrench Studios, I believe in building more than just websites—I build digital experiences. My mission is
          to deliver impactful digital solutions that drive results, whether you're looking to establish your online presence,
          enhance your user experience, or optimize your website for performance and security. I'm dedicated to helping
          businesses of all sizes navigate the digital landscape with confidence.
        </p>

        <p className="text-lg text-gray-100">
          What sets me apart is my unique blend of technical expertise and real-world experience. I understand the
          importance of reliability, precision, and quality—values that are at the core of everything I do. When you work
          with CodeWrench Studios, you're not just getting a service provider; you're getting a partner who is invested in
          your success.
        </p>

        <p className="text-lg text-gray-100">
          Let's build something amazing together. Whether you're a small business owner, a startup, or an established company
          looking to revamp your online presence, CodeWrench Studios is here to bring your vision to life. Contact me today to
          learn more about how I can help you achieve your digital goals.
        </p>

        <div className="mt-8 text-center">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
