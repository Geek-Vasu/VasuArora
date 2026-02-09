# Portfolio Customization Guide

Step-by-step guide to customize your portfolio website.

## 📝 Content Updates

### 1. Personal Information

Open `src/app/page.js` and find the hero section:

```javascript
// Update name and title
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Full-Stack Developer
  <br />
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    AI / ML Engineer  {/* Change this to your specialty */}
  </span>
</h1>

// Update tagline
<p className="text-xl md:text-2xl mb-8">
  Your custom tagline here...
</p>
```

### 2. Contact Information

Update all contact links:

```javascript
// Email
<a href="mailto:YOUR_EMAIL@gmail.com">
<p>YOUR_EMAIL@gmail.com</p>

// Phone
<a href="tel:+YOUR_PHONE">
<p>+YOUR_PHONE</p>

// Social Links
const socialLinks = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
}
```

### 3. About Section

Customize your introduction (around line 180):

```javascript
<p className="text-lg mb-6 leading-relaxed">
  Write your own story here. Talk about your background,
  what drives you, and what makes you unique as a developer.
</p>
```

### 4. Projects Section

Add/modify projects in the `projects` array:

```javascript
const projects = [
  {
    title: "Your Project Name",
    period: "Month Year – Month Year",
    tech: ["React", "Node.js", "MongoDB"], // Your tech stack
    problem: "What problem did this project solve?",
    solution: "How did you solve it?",
    highlights: [
      "Key feature 1",
      "Key feature 2",
      "Impressive metric or achievement"
    ],
    impact: "What was the outcome?",
    github: "https://github.com/YOUR_USERNAME/project-repo"
  },
  // Add more projects...
]
```

**Pro Tips for Projects:**
- Lead with the most impressive project
- Use specific metrics (users, performance improvements, scale)
- Keep problem-solution-impact framework
- Link to live demo if available

### 5. Skills Section

Update the `skills` object:

```javascript
const skills = {
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
  "Frontend": ["React", "Next.js", "Vue"], // Your frontend skills
  "Backend": ["Node.js", "Python", "Go"], // Your backend skills
  "Add More": ["Categories", "As Needed"],
}
```

**Recommended Categories:**
- Languages
- Frontend / UI
- Backend / APIs
- Databases
- DevOps / Cloud
- Tools & Platforms
- Specialized (AI/ML, Blockchain, etc.)

### 6. Education Section

Update education details (around line 400):

```javascript
<h3 className="text-2xl font-bold mb-2">Your Degree</h3>
<p className="text-blue-500 mb-2">Your University Name</p>
<p>Start Year – End Year • GPA: X.XX</p>
```

### 7. Certifications

Modify the `certifications` array:

```javascript
const certifications = [
  "Certification Name – Provider",
  "Course Name – Platform",
  "Achievement or competition result",
  "Add as many as relevant"
]
```

## 🎨 Design Customization

### 1. Color Scheme

**Change Accent Colors:**
```javascript
// Primary gradient (hero title)
className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"

// Button gradient
className="bg-gradient-to-r from-blue-500 to-purple-500"

// Replace with your colors:
// from-red-500 to-orange-500  (warm)
// from-green-500 to-teal-500  (nature)
// from-indigo-500 to-purple-500  (cool)
```

**Consistent Color Variables:**
```javascript
// Define once at the top of your component
const colors = {
  primary: 'blue-500',
  secondary: 'purple-500',
  accent: 'pink-500'
}

// Use throughout:
className={`text-${colors.primary}`}
```

### 2. Dark/Light Mode

The toggle is already implemented. To change default:

```javascript
const [darkMode, setDarkMode] = useState(true); // Change to false for light default
```

**Customize colors:**
```javascript
// Dark mode: bg-gray-900 text-gray-100
// Light mode: bg-gray-50 text-gray-900

// Change to your preference:
${darkMode ? 'bg-slate-900' : 'bg-white'}
```

### 3. Typography

**Change Fonts:**

In `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

**Adjust Sizes:**
```javascript
// Hero title (default: 5xl on mobile, 7xl on desktop)
className="text-4xl md:text-6xl font-bold" // Smaller
className="text-6xl md:text-8xl font-bold" // Larger
```

### 4. Spacing & Layout

**Section Padding:**
```javascript
className="py-24" // Default (6rem)
className="py-16" // Tighter
className="py-32" // More spacious
```

**Container Width:**
```javascript
className="max-w-4xl" // Narrow
className="max-w-6xl" // Default
className="max-w-7xl" // Wide
```

### 5. Animations

**Add Custom Animations:**

In `tailwind.config.js`:
```javascript
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in',
      'slide-up': 'slideUp 0.5s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
}
```

Use in components:
```javascript
className="animate-fade-in"
className="animate-slide-up"
```

## 🖼️ Adding Images & Media

### 1. Profile Photo

**Add to Hero Section:**

1. Add image to `/public/profile.jpg`
2. Update hero section:

```javascript
import Image from 'next/image'

// Inside hero section
<div className="mb-8">
  <Image 
    src="/profile.jpg" 
    alt="Your Name" 
    width={200} 
    height={200}
    className="rounded-full mx-auto border-4 border-blue-500"
  />
</div>
```

### 2. Project Screenshots

**Add Project Images:**

1. Add images to `/public/projects/`
2. Update project cards:

```javascript
{projects.map((project, idx) => (
  <div key={idx}>
    <Image 
      src={`/projects/${project.image}`}
      alt={project.title}
      width={800}
      height={400}
      className="rounded-lg mb-4"
    />
    {/* Rest of project content */}
  </div>
))}
```

### 3. Favicon

Replace `/public/favicon.ico` with your custom favicon.

**Generate favicons:**
- Use [realfavicongenerator.net](https://realfavicongenerator.net)
- Add all generated files to `/public`

### 4. Background Patterns

**Add Subtle Background:**

```javascript
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
  <div className="relative">
    {/* Your content */}
  </div>
</div>
```

## 🔧 Advanced Features

### 1. Add Resume Download

```javascript
<a 
  href="/resume.pdf" 
  download
  className="px-8 py-3 bg-blue-500 rounded-lg"
>
  Download Resume
</a>
```

Add `resume.pdf` to `/public` folder.

### 2. Add Contact Form

Install form library:
```bash
npm install react-hook-form
```

Add to contact section:
```javascript
import { useForm } from 'react-hook-form'

const { register, handleSubmit } = useForm()

const onSubmit = async (data) => {
  // Handle form submission (use FormSpree, EmailJS, etc.)
  console.log(data)
}

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name")} placeholder="Name" />
  <input {...register("email")} placeholder="Email" />
  <textarea {...register("message")} placeholder="Message" />
  <button type="submit">Send</button>
</form>
```

### 3. Add Blog Section

Create `src/app/blog/page.js`:
```javascript
export default function Blog() {
  const posts = [
    {
      title: "Blog Post Title",
      date: "Jan 2026",
      excerpt: "Brief description...",
      slug: "post-title"
    }
  ]
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### 4. Add Testimonials

```javascript
const testimonials = [
  {
    name: "Client Name",
    role: "Title at Company",
    text: "What they said about working with you...",
    image: "/testimonials/person.jpg"
  }
]

// Render in a new section
{testimonials.map((testimonial, idx) => (
  <div key={idx}>
    <p>"{testimonial.text}"</p>
    <p><strong>{testimonial.name}</strong> - {testimonial.role}</p>
  </div>
))}
```

### 5. Add Project Filtering

```javascript
const [filter, setFilter] = useState('all')

const filteredProjects = projects.filter(p => 
  filter === 'all' || p.tech.includes(filter)
)

// Add filter buttons
<div className="flex gap-2 mb-8">
  <button onClick={() => setFilter('all')}>All</button>
  <button onClick={() => setFilter('React')}>React</button>
  <button onClick={() => setFilter('Python')}>Python</button>
</div>
```

## 📱 Mobile Optimization

### Responsive Breakpoints

Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Example Usage:**
```javascript
className="text-2xl md:text-4xl lg:text-5xl" // Scales with screen size
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Responsive grid
className="hidden md:flex" // Hide on mobile, show on desktop
className="block md:hidden" // Show on mobile, hide on desktop
```

### Mobile Menu

Add hamburger menu for mobile:
```javascript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// Add to navigation
<button 
  className="md:hidden"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  ☰
</button>

{mobileMenuOpen && (
  <div className="md:hidden">
    {/* Mobile menu items */}
  </div>
)}
```

## 🎯 SEO Optimization

### 1. Update Metadata

In `src/app/layout.js`:
```javascript
export const metadata = {
  title: 'Your Name - Your Title',
  description: 'Your compelling description that will appear in search results',
  keywords: 'your, relevant, keywords, here',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Your Title',
    description: 'Your description',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Your Title',
    description: 'Your description',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
}
```

### 2. Add Structured Data

Create `src/app/jsonld.js`:
```javascript
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full-Stack Developer",
  "url": "https://yourwebsite.com",
  "sameAs": [
    "https://github.com/YOUR_USERNAME",
    "https://linkedin.com/in/YOUR_PROFILE"
  ]
}
```

Add to layout:
```javascript
<script 
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
/>
```

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Add at least 3 quality projects
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check dark/light mode
- [ ] Optimize images
- [ ] Update meta tags
- [ ] Add favicon
- [ ] Test form submissions
- [ ] Run Lighthouse audit
- [ ] Proofread all content
- [ ] Add resume download
- [ ] Set up analytics
- [ ] Test on different browsers

## 🆘 Common Issues

**Issue: Icons not showing**
```bash
npm install lucide-react
```

**Issue: Styles not applying**
- Clear `.next` folder
- Restart dev server
- Check Tailwind config

**Issue: Build fails**
- Check for console errors
- Verify all imports
- Check Node.js version

---

Need help? Reach out at aroravasu2005@gmail.com