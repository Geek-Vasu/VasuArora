'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Brain, Server, Moon, Sun, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Multi-Modal RAG System",
      period: "Jan 2026 – Feb 2026",
      tech: ["Python", "LangChain", "Vector DBs", "LLMs", "Streamlit"],
      problem: "LLMs hallucinate when responses are not grounded in verified context, especially across multiple modalities like text and images.",
      solution: "Built a multi-modal Retrieval-Augmented Generation system that strictly separates retrieval from generation, processing text, images, and documents with semantic search.",
      highlights: [
        "Text + image embedding pipelines",
        "Semantic search across modalities",
        "Hallucination reduction using retrieval-first design",
        "Interactive Streamlit UI for real-time responses"
      ],
      impact: "Improved response accuracy, interpretability, and trustworthiness of AI outputs",
      github: "https://github.com/Geek-Vasu"
    },
    {
      title: "Chatty – Real-Time Chat & Video Platform",
      period: "May 2025 – Jun 2025",
      tech: ["MERN", "Zustand", "Socket.IO", "WebRTC", "TanStack Query"],
      problem: "Traditional chat apps struggle with scalability, latency, and feature richness.",
      solution: "Built a real-time chat application supporting 1-on-1 and group messaging, typing indicators, friend requests, HD video calling, screen sharing, and recording.",
      highlights: [
        "<200ms average message latency",
        "Zustand for efficient state management",
        "Optimized data fetching with TanStack Query",
        "Scaled to 100+ active users",
        "32 customizable UI themes"
      ],
      impact: "Delivered production-grade real-time communication with enterprise-level performance",
      github: "https://github.com/Geek-Vasu"
    },
    {
      title: "Fabnest – E-Commerce Platform",
      period: "Dec 2024 – Jan 2025",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      problem: "Need for a clean, scalable e-commerce platform with admin control.",
      solution: "Developed a full-stack e-commerce system with product listings, filters, cart management, and admin dashboard.",
      highlights: [
        "Modular REST APIs",
        "Optimized React components",
        "Reduced CSS bundle size by 20%",
        "Supports 50+ products and concurrent users"
      ],
      impact: "Created a production-ready e-commerce solution with clean architecture",
      github: "https://github.com/Geek-Vasu"
    }
  ];

  const skills = {
    "Languages": ["JavaScript", "Python", "C++", "HTML", "CSS"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Vite"],
    "Backend": ["Node.js", "Express.js", "FastAPI"],
    "AI / ML": ["PyTorch", "Scikit-Learn", "NumPy", "Pandas"],
    "LLMs & Agents": ["LangChain", "LangGraph", "Google ADK", "OpenAI SDK"],
    "Databases": ["MongoDB", "PostgreSQL"],
    "Tools": ["Git", "GitHub", "Postman", "Firebase", "Socket.IO"]
  };

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "MERN Stack Development – Angela Yu (Udemy)",
    "ReactJS – Maximilian Schwarzmüller (Udemy)",
    "250+ DSA problems solved on LeetCode"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Vasu Arora
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              Available for Full-Time Opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full-Stack Developer
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI / ML Engineer
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            Building production-grade systems at the intersection of full-stack development and intelligent AI workflows. 
            Specialized in RAG systems, real-time applications, and scalable architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
              View Projects
            </a>
            <a href="#contact" className={`px-8 py-3 rounded-lg font-medium border-2 ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} transition-all`}>
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Geek-Vasu" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/vasu-arora-508385237/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:aroravasu2005@gmail.com" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className={`rounded-2xl p-8 md:p-12 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a Computer Science undergraduate with hands-on experience building production-grade full-stack applications and AI-powered systems. 
              My work centers on creating intelligent, scalable solutions that combine clean architecture with cutting-edge AI capabilities.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I specialize in <span className="font-semibold text-blue-500">Retrieval-Augmented Generation (RAG)</span>, real-time applications, 
              and building systems that prioritize accuracy and performance. My approach focuses on reducing hallucinations in LLM systems through 
              retrieval-first architectures and designing AI pipelines that are both powerful and trustworthy.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              What drives me is solving hard engineering problems—whether it's optimizing system performance, building user-centric interfaces, 
              or architecting backend logic that scales. I believe in writing clean code, making data-driven decisions, and continuously learning 
              from each project.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Code, label: "Full-Stack" },
                { icon: Brain, label: "AI/ML" },
                { icon: Database, label: "RAG Systems" },
                { icon: Server, label: "Real-Time" }
              ].map(item => (
                <div key={item.label} className={`p-4 rounded-xl text-center ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <p className="font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Production-grade systems built with modern technologies
          </p>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all`}>
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.period}</p>
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-400 mb-2">Problem:</p>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Solution:</p>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{project.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Key Highlights:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
                    <p className="font-semibold text-green-400 mb-1">Impact:</p>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-xl font-bold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className={`py-24 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
          <div className={`rounded-2xl p-8 mb-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science</h3>
            <p className="text-blue-500 mb-2">KIET Group of Institutions, Ghaziabad</p>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2023 – 2027 • SGPA: 7.62</p>
          </div>
          <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4">Certifications & Achievements</h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm currently seeking full-time opportunities where I can contribute to challenging projects and grow as an engineer.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:aroravasu2005@gmail.com" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all flex items-center gap-4`}>
              <Mail className="w-8 h-8 text-blue-500" />
              <div className="text-left">
                <p className="font-semibold">Email</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>aroravasu2005@gmail.com</p>
              </div>
            </a>
            <a href="tel:+918360741112" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all flex items-center gap-4`}>
              <Phone className="w-8 h-8 text-blue-500" />
              <div className="text-left">
                <p className="font-semibold">Phone</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+91 8360741112</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Geek-Vasu" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/vasu-arora-508385237/" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all`}>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2026 Vasu Arora. Built with React, Tailwind CSS, and attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}