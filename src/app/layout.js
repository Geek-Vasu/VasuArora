import './globals.css'

export const metadata = {
  title: 'Vasu Arora - Full-Stack Developer | AI/ML Engineer',
  description: 'Full-Stack Developer specializing in AI/ML, RAG systems, and scalable web applications. Building production-grade systems with React, Node.js, Python, and LangChain.',
  keywords: 'Full-Stack Developer, AI Engineer, RAG Systems, React, Node.js, Python, Machine Learning, Web Development',
  authors: [{ name: 'Vasu Arora' }],
  openGraph: {
    title: 'Vasu Arora - Full-Stack Developer | AI/ML Engineer',
    description: 'Building production-grade systems at the intersection of full-stack development and intelligent AI workflows.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}