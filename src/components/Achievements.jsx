import React from 'react';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const achievements = [
  {
    title: 'Deputy Joint Secretary,ACES',
    description: 'Led a team of 30+members,organizing 5+ techical workshops.',
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    title: 'Certified Web Developer',
    description: 'Completed  certification from Coursera.',
    icon: <FaMedal className="text-blue-400" />,
  },
  {
    title: 'Certified Data Analyst',
    description: 'Completed  certification from linkedin learning.',
    icon: <FaMedal className="text-blue-400" />,
  },
  {
    title: 'Certified Software Engineer',
    description: 'Completed  certification from NPTEL.',
    icon: <FaMedal className="text-blue-400" />,
  },
  {
    title: 'Competitive Programmer ',
    description: 'Solved 300+ problems on leetCode and CodeChef .',
    icon: <FaAward className="text-green-400" />,
  },
  {
    title: 'sports Award',
    description: 'Received 4 Award at APS Devlali for throwball.',
    icon: <FaAward className="text-green-400" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center cursor-pointer shadow-lg hover:shadow-indigo-500 transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">{achievement.title}</h3>
              <p className="text-gray-400 text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
