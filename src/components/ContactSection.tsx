"use client";

import { useState } from 'react';
import ParticlesComponent from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative container mx-auto p-8 section-scroll-margin pt-8">
      {/* Particles Effect */}
      <ParticlesComponent />

      <div className="relative z-10 max-w-4xl mx-auto bg-black bg-opacity-60 p-8 rounded-md">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-100 mb-6 text-center">
          I&apos;d love to hear from you! Whether you have a question about services, pricing, or anything else, my inbox is always open. I&apos;m here to help and look forward to working together on your next project.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-100">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:ring focus:ring-blue-500 focus:border-blue-500"
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
