import React from 'react';

const skillsData = {
  "Programming Languages": ["Python", "Java", "C++", "JavaScript", "SQL"],
  "Web Development": ["HTML", "CSS", "React.js"],
  "Database & Cloud": ["MySQL", "MongoDB"],
  "Software Development": ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)"],
  "Data Science & Analytics": ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib"],
  "Tools & Technologies": ["GitHub", "VS Code", "Jupyter Notebook"],
  "Soft Skills": ["Team Collaboration", "Leadership", "Problem-Solving", "Adaptability"]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 21.75a11.952 11.952 0 01-6.825-3.693 12.083 12.083 0 01.665-6.479L12 14z" />
          </svg>
          <span>Skills</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 cursor-pointer shadow-lg hover:shadow-indigo-500 transition transform hover:-translate-y-2 hover:scale-105">
              <h4 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{category}</span>
              </h4>
              <ul className="list-none space-y-2">
                {skills.map((skill, idx) => (
                  <li key={idx} className="bg-gray-600 px-3 py-1 rounded shadow-sm inline-block hover:shadow-lg hover:shadow-indigo-500 transition-shadow duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
