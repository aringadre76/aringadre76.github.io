# React Portfolio Deployment Instructions

## Overview
This document provides step-by-step instructions to replace your current Hugo site with the new React portfolio while maintaining GitHub Pages deployment.

## Prerequisites
- Git installed and configured
- Node.js 18+ installed
- GitHub repository access

## Deployment Steps

### Step 1: Backup Current Hugo Site
```bash
cd /home/robot/arin-gadre/aringadre76.github.io
git checkout -b hugo-backup
git add .
git commit -m "Backup Hugo site before React migration"
git push origin hugo-backup
```

### Step 2: Clean Repository Root
```bash
git checkout main
rm -rf assets config.toml content layouts public resources static themes
```

### Step 3: Copy React Files to Root
```bash
cp -r react-portfolio/* .
cp react-portfolio/.github .github -r
cp react-portfolio/.gitignore .gitignore
rm -rf react-portfolio/
```

### Step 4: Update Package.json (if needed)
Ensure the homepage URL is correct:
```json
{
  "homepage": "https://aringadre76.github.io"
}
```

### Step 5: Commit and Push
```bash
git add .
git commit -m "Migrate from Hugo to React portfolio"
git push origin main
```

### Step 6: Configure GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy on the next push

## Testing Locally
```bash
npm install
npm start
```

Visit http://localhost:3000 to test the site locally.

## Build and Deploy Manually (Alternative)
If you prefer manual deployment using gh-pages:
```bash
npm run deploy
```

## Features Migrated
✅ Cyberpunk theme with neon colors
✅ All project information and links
✅ Experience section with achievements
✅ Contact information with social links
✅ Resume PDF access
✅ Responsive design
✅ Modern React architecture
✅ GitHub Actions deployment

## Troubleshooting

### Build Errors
- Ensure Node.js 18+ is installed
- Delete node_modules and run `npm install` again
- Check for any TypeScript errors

### Deployment Issues
- Verify GitHub Actions permissions are enabled
- Check the Actions tab for deployment logs
- Ensure the repository is public or has GitHub Pages enabled

### Styling Issues
- All styles are contained in App.css
- The cyberpunk theme is fully responsive
- Check browser developer tools for any CSS conflicts

## Next Steps
- Monitor the first deployment
- Test all links and functionality
- Consider adding more interactive features
- Set up analytics if needed

## Reverting to Hugo (Emergency)
If you need to revert:
```bash
git checkout hugo-backup
git checkout -b main-restore
git push origin main-restore
```
Then create a pull request to merge back to main.
