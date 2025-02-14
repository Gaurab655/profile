import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/git.png'

const Footer = () => {
  return (
    <div className=''>
      <footer className="bg-[#044880]  text-red-50 py-6 mt-[88px]">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    
    {/* Left Section - Brand Name */}
    <h2 className="text-xl font-semibold">Gaurab's Portfolio</h2>

    {/* Center Section - Navigation Links */}
    <nav className="flex gap-6 mt-4 md:mt-0">
      <a href="#about" className="hover:text-[#FF8303] transition">About</a>
      <a href="#projects" className="hover:text-[#FF8303] transition">Projects</a>
      <a href="#contact" className="hover:text-[#FF8303] transition">Contact</a>
    </nav>

    {/* Right Section - Social Icons */}
    <div className="flex gap-4 mt-4 md:mt-0">
      <a href="https://github.com/Gaurab655" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
      </a>
      <a href="https://www.linkedin.com/in/gaurab-chand-184548240/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
      </a>
    </div>

  </div>

  {/* Bottom Section - Copyright */}
  <div className="text-center text-gray-500 text-sm mt-4">
    © {new Date().getFullYear()} Gaurab Chand. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer
