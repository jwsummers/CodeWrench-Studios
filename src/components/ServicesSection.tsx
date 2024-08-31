import React from 'react';

export default function ServicesPage() {
  return (
    <section id="services" className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold text-primary mb-10">My Services</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            >
              <h2 className="mt-4 text-3xl font-bold text-blue-500">
                {service.title}
              </h2>
              <p className="mt-4 text-lg text-gray-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Consultation & Goal Setting',
    description:
      "I work closely with clients to understand their business objectives, target audience, and specific needs. This helps to set clear goals and create a tailored web development strategy that aligns with your business vision.",
  },
  {
    title: 'Custom Web Design',
    description:
      "I create custom designs that reflect your brand's identity, ensuring a unique and engaging user experience. Every website I design is responsive, visually appealing, and optimized for performance across all devices.",
  },
  {
    title: 'Full-Stack Web Development',
    description:
      "From front-end development with React to robust back-end solutions, I build scalable and secure web applications tailored to your business needs. Whether it's an e-commerce site, a portfolio, or a complex web app, I've got you covered.",
  },
  {
    title: 'CMS Implementation & Training',
    description:
      'For businesses that prefer to manage their content independently, I offer CMS implementation and training. I can integrate a content management system that allows you to update your website easily and efficiently.',
  },
  {
    title: 'SEO & Performance Optimization',
    description:
      "I optimize your website for search engines to help you rank higher and reach a larger audience. My services include on-page SEO, keyword research, and ensuring your site loads quickly and performs well.",
  },
  {
    title: 'Ongoing Maintenance & Support',
    description:
      'I provide ongoing maintenance and support to ensure your website stays up-to-date, secure, and running smoothly. Whether you need updates, new features, or emergency support, I’m here to help.',
  },
  {
    title: 'Website Redesign & Migration',
    description:
      'If you have an existing website that needs a refresh, I offer redesign services that bring your site up to modern standards. I can also handle migrations to new platforms or hosts with minimal downtime.',
  },
];
