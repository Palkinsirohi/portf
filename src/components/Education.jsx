import React from 'react';

const educationData = [
  {
    degree: 'B. Tech (Computer Engineering)',
    university: 'Bharati Vidyapeeth University, Pune',
    years: 'July 2022 - July 2026',
    description: 'CGPA: 10/10',
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer shadow-lg hover:shadow-indigo-500 transition transform hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-indigo-400">{edu.degree}</h3>
              <p className="text-gray-300 italic">{edu.university} | {edu.years}</p>
              <p className="text-gray-400 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
