import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const projects = [
  {
    title: 'B2B Website',
    description: 'Developed using HTML,CSS,JS.',
    link: 'https://b2b-two-beta.vercel.app/',
  },
  {
    title: 'learning Website',
    description: 'Developed using React and TailwindCSS.',
    link: '#',
  },
  {
    title: 'Brain Tumor Detection model',
    description: 'Developed using Python on Jyupter Notebook.',
    link: 'https://github.com/Palkinsirohi/braintumor-project',
  },
  {
    title: 'Portfolio website',
    description: 'Developed using React and TailwindCSS.',
    link: 'https://portfolio-one-lyart-54.vercel.app/',
  },
  {
    title: 'Classification Model',
    description: 'Developed using Python on Jyupter Notebook.',
    link: 'https://github.com/Palkinsirohi/Classification-model',
  },
  {
    title: 'Sign-up Page',
    description: 'Developed using HTML,CSS,JS.',
    link: 'https://sign-up-page-bay.vercel.app/',
  },
  
  {
    title: 'Face Recoginition Model',
    description: 'Developed using Python on Jyupter Notebook.',
    link: 'https://github.com/Palkinsirohi/Image-Recoginition',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold cursor-pointer">Palkin Sirohi</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#education" className="hover:text-indigo-400 transition">Education</a></li>
              <li><a href="#achievements" className="hover:text-indigo-400 transition">Achievements</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Achievements Section */}
      <Achievements />

      {/* Projects Section */}
      <section id="projects" className="px-8 py-12 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500 transition">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-400 hover:text-indigo-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Palkin Sirohi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
