#!/bin/bash

echo "🚀 Starting Hugo to React Migration..."
echo "========================================"

cd /home/robot/arin-gadre/aringadre76.github.io

echo "📦 Step 1: Backing up Hugo site..."
git checkout -b hugo-backup-$(date +%Y%m%d) 2>/dev/null || echo "Branch already exists, continuing..."
git add .
git commit -m "Backup Hugo site before React migration - $(date)" || echo "No changes to commit"
git push origin hugo-backup-$(date +%Y%m%d) || echo "Push failed or branch already exists"

echo "🧹 Step 2: Cleaning repository root..."
git checkout main
rm -rf assets config.toml content layouts public resources static themes README.md

echo "📁 Step 3: Copying React files to root..."
cp -r react-portfolio/* .
cp -r react-portfolio/.github .
cp react-portfolio/.gitignore . 2>/dev/null || echo ".gitignore not found, continuing..."

echo "🗑️ Step 4: Cleaning up..."
rm -rf react-portfolio/
rm migrate.sh

echo "📝 Step 5: Updating README..."
cat > README.md << 'EOF'
# Arin Gadre - Portfolio Website

A modern React-based portfolio website featuring a cyberpunk theme.

## 🚀 Features
- Modern React with TypeScript
- Cyberpunk-themed design with neon colors  
- Responsive design for all devices
- GitHub Pages deployment with Actions
- Interactive project showcase
- Professional experience timeline

## 🛠️ Development
```bash
npm install
npm start
```

## 📦 Deployment
Automatically deployed to GitHub Pages via GitHub Actions on push to main.

Manual deployment:
```bash
npm run deploy
```

## 🎨 Theme
Custom cyberpunk theme with:
- Neon pink (#ff2e88) and cyan (#00fff5) accents
- Dark background with gradient effects
- Glitch text animations
- Modern typography (Orbitron + Rajdhani fonts)

Built with ❤️ using React and deployed on GitHub Pages.
EOF

echo "💾 Step 6: Committing changes..."
git add .
git commit -m "Migrate from Hugo to React portfolio - Modern cyberpunk redesign

- Converted Hugo site to React with TypeScript
- Implemented cyberpunk theme with neon colors
- Added responsive design and animations
- Set up GitHub Actions for automatic deployment
- Migrated all content: projects, experience, contact info
- Maintained resume PDF and all external links"

echo "🚀 Step 7: Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Migration Complete!"
echo "========================================"
echo "🌐 Your site will be available at: https://aringadre76.github.io"
echo "⏱️  GitHub Actions deployment may take 2-3 minutes"
echo "🔍 Check deployment status at: https://github.com/aringadre76/aringadre76.github.io/actions"
echo ""
echo "🎯 Next steps:"
echo "  1. Visit your repository's Actions tab to monitor deployment"
echo "  2. Go to Settings > Pages and ensure source is set to 'GitHub Actions'"
echo "  3. Test your site once deployment completes"
echo ""
echo "📧 If you encounter issues, check the deployment logs or contact for support."
