import React, { Suspense, lazy, useState } from 'react';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="flex flex-wrap justify-between items-center p-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold cursor-pointer">Palkin Sirohi</h1>
          {/* Hamburger button - visible on small screens */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 10-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 101.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
          {/* Navigation menu */}
          <nav
            className={`${
              menuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0">
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-400 transition block px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-indigo-400 transition block px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-indigo-400 transition block px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="hover:text-indigo-400 transition block px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-400 transition block px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-400 transition block px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>

      {/* Skills Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>

      {/* Education Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Education />
      </Suspense>

      {/* Achievements Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Achievements />
      </Suspense>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-8 py-12 max-w-5xl mx-auto">
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
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Palkin Sirohi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
