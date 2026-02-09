# Portfolio Deployment Guide

Complete guide to deploy your portfolio to different platforms.

## 🚀 Quick Deploy to Vercel (Easiest & Recommended)

### Method 1: GitHub Integration (Best)

1. **Push to GitHub**
```bash
cd portfolio-site
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects Next.js)
   - Your site goes live at `https://your-name.vercel.app`

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
cd portfolio-site
vercel
```

## 🌐 Deploy to Netlify

1. **Build Configuration**

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - New site from Git
   - Connect GitHub repo
   - Deploy settings are auto-detected
   - Click "Deploy site"

## 🐙 Deploy to GitHub Pages

1. **Update Configuration**

Edit `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',  // Use your repo name
  images: {
    unoptimized: true
  }
}
```

2. **Add Deploy Script to package.json**
```json
"scripts": {
  "deploy": "next build && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
}
```

3. **Deploy**
```bash
npm run build
npm run deploy
```

4. **Enable GitHub Pages**
   - Repo Settings → Pages
   - Source: gh-pages branch
   - Visit: `https://YOUR_USERNAME.github.io/portfolio`

## ☁️ Deploy to AWS Amplify

1. **Connect Repository**
   - Open AWS Amplify Console
   - Connect GitHub repository
   - Select branch (main)

2. **Build Settings** (auto-detected)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

3. **Deploy**
   - Review and deploy
   - Get URL: `https://main.xxxxx.amplifyapp.com`

## 🔷 Deploy to Azure Static Web Apps

1. **Install Azure CLI**
```bash
npm install -g @azure/static-web-apps-cli
```

2. **Deploy**
```bash
cd portfolio-site
npm run build
# Follow Azure portal instructions to create Static Web App
```

## 🔴 Deploy to Railway

1. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

2. **Deploy**
```bash
railway login
railway init
railway up
```

## 🐳 Deploy with Docker

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build and Run**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🎯 Custom Domain Setup

### For Vercel
1. Project Settings → Domains
2. Add domain
3. Update DNS:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Or CNAME to `cname.vercel-dns.com`

### For Netlify
1. Domain Settings → Add domain
2. Update DNS to Netlify nameservers

### For Cloudflare (Any Provider)
1. Add A record to your host IP
2. Enable proxy (orange cloud)
3. SSL/TLS → Full

## 🔧 Environment Variables

If you add any API keys or secrets:

1. **Vercel**: Project Settings → Environment Variables
2. **Netlify**: Site Settings → Build & deploy → Environment
3. **Local**: Create `.env.local`
```
NEXT_PUBLIC_API_KEY=your_key_here
```

## 📊 Analytics Setup

### Google Analytics
Add to `src/app/layout.js`:
```javascript
import Script from 'next/script'

// In <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react'

// In <body>
<Analytics />
```

## 🎨 Performance Optimization

### 1. Image Optimization
Replace images with Next.js Image component:
```javascript
import Image from 'next/image'
<Image src="/photo.jpg" width={300} height={300} alt="Profile" />
```

### 2. Enable Caching Headers
In `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **HTTPS**: Always use SSL (automatic on Vercel/Netlify)
3. **Security Headers**: Add to `next.config.js`
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    },
  ]
}
```

## 📱 Progressive Web App (PWA)

Add `next-pwa`:
```bash
npm install next-pwa
```

Update `next.config.js`:
```javascript
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // your config
})
```

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (18.17+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for syntax errors

### Images Not Loading
- Ensure images are in `/public` folder
- Use Next.js Image component for optimization

### Styling Issues
- Verify Tailwind config
- Check globals.css import
- Clear browser cache

### 404 Errors
- Verify file structure matches Next.js conventions
- Check `app` directory setup

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 🎓 Pro Tips

1. **Use Git Tags** for versioning
2. **Set up CI/CD** with GitHub Actions
3. **Monitor Performance** with Lighthouse
4. **Enable Analytics** from day one
5. **Add Sitemap** for SEO
6. **Test Responsiveness** on real devices
7. **Optimize Bundle Size** with `next/bundle-analyzer`

---

**Need Help?** Open an issue or reach out at aroravasu2005@gmail.com