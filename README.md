# React Vite Portfolio Project(https://portf-teal.vercel.app/)
## Project Overview
This is a personal portfolio website built using React and Vite. It showcases various sections including About, Skills, Education, Achievements, Projects, and Contact. The site is styled with Tailwind CSS and includes animations powered by Framer Motion. It features lazy loading of components for performance optimization.

## File Structure
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets
│   │   ├── profile.jpg
│   │   └── react.svg
│   └── components
│       ├── About.jsx
│       ├── Achievements.jsx
│       ├── Contact.jsx
│       ├── Education.jsx
│       ├── Hero.jsx
│       └── Skills.jsx
```

## Concepts and Technologies Used

- **React**: Functional components with hooks (`useState`), lazy loading (`React.lazy` and `Suspense`), and component-based architecture.
- **Vite**: Modern build tool for fast development and optimized production builds.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design.
- **Framer Motion**: Animation library used for smooth animations and transitions.
- **React Icons**: Icon library for React components.
- **react-simple-typewriter**: Used for typing effect animations.
- **ESLint**: Linting tool with React hooks and refresh plugins for code quality.
- **Responsive Design**: Mobile-friendly navigation with a hamburger menu and adaptive layouts.
- **Code Splitting**: Lazy loading of components to improve performance.

## Main Files Description

- `src/main.jsx`: Entry point of the React app, renders the `App` component inside React StrictMode.
- `src/App.jsx`: Main app component that sets up the layout, navigation, and lazy loads different sections.
- `src/components/`: Contains individual React components for different sections of the portfolio such as About, Skills, Education, Achievements, Hero, and Contact.
- `src/assets/`: Contains static assets like profile pictures and icons.
- `package.json`: Project metadata, dependencies, and scripts.
- `vite.config.js`: Configuration for the Vite build tool.

## Running the Project

To run the project locally:

```bash
npm install
npm run dev
```

This will start the development server and open the portfolio website in your browser.

## Deployment

The project can be deployed using Vercel with the provided deploy script:

```bash
npm run deploy
```

---

© 2024 Palkin Sirohi

