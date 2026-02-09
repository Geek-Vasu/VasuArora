# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## ⚡ Fastest Way to See Your Portfolio

### Option 1: Local Preview (Recommended for development)

```bash
# Navigate to project
cd portfolio-site

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Open browser → `http://localhost:3000`

**That's it!** Your portfolio is now running. 🎉

---

### Option 2: Deploy to Vercel (Recommended for production)

**No code required - just 3 clicks:**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → "New Project"
3. Import your repo → Click "Deploy"

Your portfolio goes live in ~60 seconds at `https://your-name.vercel.app`

---

## 📝 First Customizations (Do These First)

### 1. Update Your Name & Info
Open: `src/app/page.js`

**Line ~70:** Change the hero text
```javascript
<h1>Full-Stack Developer<br />AI / ML Engineer</h1>
```

**Line ~170:** Change email, phone, GitHub, LinkedIn
```javascript
href="mailto:YOUR_EMAIL@gmail.com"
href="tel:+YOUR_PHONE"
href="https://github.com/YOUR_USERNAME"
href="https://www.linkedin.com/in/YOUR_PROFILE/"
```

### 2. Update Projects
**Line ~28:** Modify the `projects` array with your own projects

```javascript
const projects = [
  {
    title: "Your Project",
    period: "Month Year",
    tech: ["React", "Node.js"],
    problem: "What problem?",
    solution: "How you solved it?",
    highlights: ["Feature 1", "Feature 2"],
    impact: "What happened?",
    github: "your-repo-link"
  }
]
```

### 3. Update Skills
**Line ~78:** Modify the `skills` object
```javascript
const skills = {
  "Frontend": ["React", "Next.js", "Your Skills"],
  "Backend": ["Node.js", "Python", "Your Skills"],
}
```

---

## 🎨 Quick Visual Changes

### Change Colors
Find and replace:
- `blue-500` → `purple-500` (primary color)
- `purple-500` → `pink-500` (secondary color)

### Toggle Default Theme
**Line ~20:**
```javascript
const [darkMode, setDarkMode] = useState(true); // Change to false for light mode
```

---

## 📦 What's Included

```
portfolio-site/
├── src/app/
│   ├── page.js           ← Your portfolio (edit this)
│   ├── layout.js         ← SEO metadata
│   └── globals.css       ← Styles
├── README.md             ← Setup instructions
├── DEPLOYMENT_GUIDE.md   ← Deploy to any platform
├── CUSTOMIZATION_GUIDE.md ← Detailed customization
└── package.json          ← Dependencies
```

---

## 🔧 Common Commands

```bash
npm run dev      # Start development (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
```

---

## ✅ Next Steps

1. ✅ Get it running locally
2. ✅ Update your personal info
3. ✅ Customize projects & skills
4. ✅ Deploy to Vercel
5. 📖 Read CUSTOMIZATION_GUIDE.md for advanced features
6. 🚀 Read DEPLOYMENT_GUIDE.md for deployment options

---

## 🆘 Need Help?

**Portfolio not loading?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Want to customize more?**
→ See CUSTOMIZATION_GUIDE.md for detailed instructions

**Ready to deploy?**
→ See DEPLOYMENT_GUIDE.md for all deployment options

---

## 💡 Pro Tips

- Use `npm run dev` while developing (auto-refresh on changes)
- Test on mobile: open `http://YOUR_IP:3000` from phone
- Deploy often: Push to GitHub → Auto-deploys on Vercel
- Add images to `/public` folder

---

**Built by Claude with ❤️**

Questions? aroravasu2005@gmail.com