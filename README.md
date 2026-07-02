# Portfolio Website

> A modern, professional portfolio website built with React and Vite.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-19.1.1-blue)](https://reactjs.org/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

A sleek and responsive portfolio website showcasing professional work, skills, and experience. Designed with modern web standards and best practices to provide an excellent user experience across all devices.

## Features

✨ **Key Features:**

- 🎨 **Responsive Design** - Fully responsive and mobile-friendly interface
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🏗️ **Modern UI** - Clean, professional design with smooth animations
- 📱 **Mobile Optimized** - Perfect viewing experience on all screen sizes
- 🔍 **SEO Friendly** - Optimized for search engines
- ♿ **Accessible** - WCAG compliant for better accessibility
- 📧 **Contact Form** - Integrated contact section for inquiries
- 🎬 **Projects Showcase** - Display of projects with descriptions and links
- 📈 **Experience Timeline** - Professional experience visualization
- 🛠️ **Skills Display** - Showcase of technical skills and proficiencies

## Tech Stack

### Frontend
- **React** 19.1.1 - UI library
- **Vite** - Modern build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with modern features
- **Material-UI** - UI component library

### Development Tools
- **ESLint** - Code quality and style enforcement
- **Babel** - JavaScript transpiler
- **React Compiler** - Performance optimization

## Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ssanthosh7578-crypto/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Project Structure

```
portfolio/
├── public/                      # Static assets
│   ├── images/                  # Image files
│   ├── documents/               # Resume and documents
│   └── favicons/                # Favicon and icons
│
├── src/                         # Source code
│   ├── components/              # Reusable React components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── ...
│   │
│   ├── sections/                # Major page sections
│   │   ├── TopContent/
│   │   ├── SkillsContainer/
│   │   ├── ProjectContainer/
│   │   ├── ExperienceContainer/
│   │   └── ...
│   │
│   ├── styles/                  # Global styles
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── App.jsx                  # Main App component
│   └── main.jsx                 # Entry point
│
├── .github/                     # GitHub specific files
│   └── workflows/               # CI/CD workflows
│
├── docs/                        # Documentation
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   └── ...
│
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML entry point
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project dependencies
├── CONTRIBUTING.md              # Contribution guidelines
├── DEPLOYMENT.md                # Deployment guide
├── LICENSE                      # MIT License
└── README.md                    # This file
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Code Quality

This project uses ESLint to maintain code quality. Run the linter with:

```bash
npm run lint
```

## Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deployment Options

1. **GitHub Pages** - Deploy directly from GitHub
2. **Vercel** - Zero-config deployment
3. **Netlify** - Drag-and-drop deployment
4. **Traditional Hosting** - Upload `dist/` folder to any web server

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Santhosh**
- GitHub: [@ssanthosh7578-crypto](https://github.com/ssanthosh7578-crypto)
- Portfolio: [Your Portfolio URL](https://github.com/ssanthosh7578-crypto/portfolio)

---

**Made with ❤️ by Santhosh**