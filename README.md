# Vasu Arora - Portfolio Website

A modern, professional portfolio website built with Next.js, React, and Tailwind CSS, showcasing full-stack development and AI/ML engineering expertise.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with dark/light mode toggle
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Polished transitions and scroll behaviors
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance**: Fast loading with Next.js optimization
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📦 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Local Development

1. **Clone or download the project**
```bash
cd portfolio-site
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

The page will auto-reload when you make changes.

## 📁 Project Structure

```
portfolio-site/
├── src/
│   └── app/
│       ├── page.js          # Main portfolio component
│       ├── layout.js        # Root layout with metadata
│       └── globals.css      # Global styles + Tailwind
├── public/                  # Static assets (add images here)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit `src/app/page.js` and modify the data objects:

```javascript
// Personal links
const socialLinks = {
  github: "https://github.com/Geek-Vasu",
  linkedin: "https://www.linkedin.com/in/vasu-arora-508385237/",
  email: "aroravasu2005@gmail.com",
  phone: "+91 8360741112"
}

// Projects data
const projects = [
  // Add or modify projects here
]

// Skills data
const skills = {
  // Add or modify skills here
}
```

### Change Colors
Tailwind color classes can be modified throughout the component. Key gradient:
```javascript
className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
```

### Add Images/Photos
1. Add images to `/public` folder
2. Reference them using `/image-name.png`
3. Update the hero or about section to include profile image

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Geek-Vasu/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Deploy to GitHub Pages

1. Add to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
}
```

2. Build and deploy:
```bash
npm run build
# Push the out/ directory to gh-pages branch
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Key Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About Section**: Professional summary with core competencies
3. **Projects Section**: Detailed project showcases with problem-solution-impact framework
4. **Skills Section**: Categorized technical skills
5. **Education & Certifications**: Academic background and achievements
6. **Contact Section**: Multiple contact methods with social links

## 🔧 Performance Optimizations

- Next.js automatic code splitting
- Lazy loading for sections
- Optimized images (add `next/image` for production)
- Minimal external dependencies
- CSS purging with Tailwind

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

**Vasu Arora**
- Email: aroravasu2005@gmail.com
- GitHub: [@Geek-Vasu](https://github.com/Geek-Vasu)
- LinkedIn: [vasu-arora-508385237](https://www.linkedin.com/in/vasu-arora-508385237/)

---

Built with ❤️ using Next.js, React, and Tailwind CSS