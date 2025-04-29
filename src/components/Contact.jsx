import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-700 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center text-gray-300">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="mb-8 text-lg">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="mailto:Palkinsirohi2011@gmail.com"
            className="hover:text-indigo-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/palkinsirohi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/palkinsirohi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
