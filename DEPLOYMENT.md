# Deployment Guide

This guide explains how to deploy the portfolio website to various platforms.

## Table of Contents

- [GitHub Pages](#github-pages)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [Traditional Hosting](#traditional-hosting)

## GitHub Pages

### Prerequisites
- Public GitHub repository
- GitHub Actions enabled

### Steps

1. **Create GitHub Actions workflow:**

   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install Dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Update vite.config.js:**

   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```

3. **Push to main branch** - GitHub Actions will automatically deploy

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select 'gh-pages' branch
   - Save

## Vercel

### Steps

1. **Sign up at [vercel.com](https://vercel.com)**

2. **Import repository:**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy:** Click "Deploy"

## Netlify

### Steps

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Connect repository:**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub
   - Choose your repository

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy:** Click "Deploy Site"

## Traditional Hosting

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** using FTP/SFTP or hosting provider's file manager

3. **Update server configuration** to route requests to `index.html`

See detailed configs in the full [DEPLOYMENT.md](https://github.com/ssanthosh7578-crypto/portfolio/blob/main/DEPLOYMENT.md) file.