import { useState } from 'react'
import './App.css'
import './index.css'
import './assets/background.jpg'
import Star from './components/star.jsx'
import Navbar from './components/navbar.jsx'
import About from './components/about.jsx'
function App() {
  
  return (
    <div className="relative min-w-screen min-h-screen wallpaper flex justify-center items-center">
      {Array.from({ length: 1000 }).map((_, i) => {
        const top = Math.random() * 100 ;
        const left = Math.random() * 100;
        const size = Math.random() * 0.2;
        const delay = Math.random() * 50;
        return <Star key={i}  top={top} left={left} size={size} delay={delay}/>})}
      <div className="relative grid min-w-screen min-h-screen grid-cols-5 grid-rows-[0.3fr_3fr_1fr_1fr_1fr] items-center auto-cols-auto gap-y-10 mt-10">
        <div class="col-span-1"></div>< Navbar/><div class="col-span-1"></div>
        <div className="border w-full h-full about col-span-1 row-start-2 col-start-2 rounded-sm flex flex-col items-center justify-sp bg-neutral-800"><About /></div>
        <div className="absolute top-20 w-40 h-40 right-0 myWork col-span-1 ml-20 col-start-3 rounded-full bg-neutral-800"></div>
        <div className="border w-full h-full mySkills col-span-4 bg-neutral-800"></div>
        <div className="border w-full h-full interests col-span-4 margin bg-neutral-800"></div>
      </div>
      
    </div>
  )
}

export default App
