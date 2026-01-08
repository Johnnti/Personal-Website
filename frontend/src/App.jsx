import { useMemo } from 'react'
import './App.css'
import './index.css'
import Star from './components/star.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

function App() {
  // Memoize stars so they don't regenerate on every render
  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 0.15 + 0.05,
      delay: Math.random() * 5,
      brightness: Math.random() > 0.9 ? 'bright' : 'normal'
    }));
  }, []);

  return (
    <div className="relative min-w-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      {/* Star Background - Fixed */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <Star 
            key={star.id} 
            top={star.top} 
            left={star.left} 
            size={star.size} 
            delay={star.delay}
            brightness={star.brightness}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
