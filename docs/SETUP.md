# Setup Guide

## Initial Setup

### 1. Environment Setup

```bash
# Install Node.js
# Download from https://nodejs.org/ (LTS recommended)

# Verify installation
node --version
npm --version
```

### 2. Project Setup

```bash
# Clone repository
git clone https://github.com/ssanthosh7578-crypto/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Open in Browser

Navigate to `http://localhost:5173` in your browser.

## Project Configuration

### Vite Configuration

Edit `vite.config.js` for build settings.

### ESLint Configuration

Run linting with: `npm run lint`

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- --port 5174
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
node --version  # Should be >= 16.0.0
npm install -g npm@latest
npm run build
```

## Performance Tips

1. Use React DevTools for debugging
2. Monitor bundle size
3. Lazy load components
4. Optimize images

## Next Steps

- Review [DEPLOYMENT.md](../DEPLOYMENT.md) for deployment options
- Check [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines