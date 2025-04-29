import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background particles or subtle motion can be added here later */}
      <div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I'm Palkin Sirohi
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 min-h-[3rem]">
          <Typewriter
            words={['Developer', 'Data Analyst', 'Innovator']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-110 active:scale-95"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
