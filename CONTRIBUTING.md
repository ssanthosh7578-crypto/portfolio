# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Be respectful and constructive in all interactions. We're committed to providing a welcoming and inspiring community for all.

## How to Contribute

### Reporting Bugs

1. Check the [issue tracker](https://github.com/ssanthosh7578-crypto/portfolio/issues) to avoid duplicates
2. Provide a clear, descriptive title
3. Include steps to reproduce the bug
4. Provide expected vs. actual behavior
5. Include screenshots or error messages if applicable

### Suggesting Enhancements

1. Use a clear, descriptive title
2. Provide a detailed description of the enhancement
3. Explain the use case and potential benefits
4. List similar features in other projects (if any)

### Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit with clear messages: `git commit -m 'Add feature description'`
6. Push to your fork: `git push origin feature/your-feature`
7. Create a Pull Request with a clear description

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## Coding Standards

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write reusable components

## Commit Guidelines

```
<type>: <subject>

<body>

<footer>
```

**Type:**
- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes (no logic changes)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Dependency updates or tooling changes

**Example:**
```
feat: add contact form validation

Implement email and message validation for contact form.
Adds error messages for invalid inputs.

Closes #123
```

## Questions?

Feel free to open an issue or reach out to the maintainers.

Happy contributing! 🎉