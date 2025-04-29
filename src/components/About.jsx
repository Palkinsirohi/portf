import React from 'react';
import { motion } from 'framer-motion';
// Replace 'profile.jpg' with your actual profile picture filename in the src/assets folder
import profilePic from '../assets/profile.jpg';

const timelineItems = [
  { year: '2023', event: 'Software Development Intern at Trigyn Technologies' },
  { year: '2023', event: 'C++ Developer Intern at Extern Club' },
  { year: '2024', event: 'Promoted skills in Full-Stack Development and Data Science' },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Profile Picture */}
        <motion.div
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-600 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src={profilePic}
            alt="Palkin Sirohi"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bio and Timeline */}
        <div className="flex-1 text-gray-300">
          <h2 className="text-4xl font-bold mb-4">Palkin Sirohi</h2>
          <p className="mb-2">Email: <a href="mailto:Palkinsirohi2011@gmail.com" className="text-indigo-400 hover:underline">Palkinsirohi2011@gmail.com</a></p>
          <p className="mb-8">Phone: 9870770820</p>
          <p className="mb-8 leading-relaxed">
            I am a passionate software developer skilled in Python, Java, C++, JavaScript, SQL, React.js, and more.
            Experienced in web development, data science, and software engineering with strong problem-solving and leadership skills.
          </p>

          {/* Timeline */}
          <div className="relative border-l-4 border-indigo-600 pl-6">
            {timelineItems.map(({ year, event }, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-4 top-1 w-8 h-8 bg-indigo-600 rounded-full border-4 border-gray-800"></div>
                <p className="font-semibold">{year}</p>
                <p className="text-gray-400">{event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
