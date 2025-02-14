import React from 'react'

const Navbar = () => {
  return (
<div className="bg-[#044880] fixed top-0 left-0 w-full z-50 h-[73px] flex items-center justify-between px-6 shadow-lg">
  
  {/* Logo */}
  <img src="LOGO.png" alt="Logo" className="w-[120px] md:w-[140px] h-auto" />

  {/* Navigation Links */}
  <ul className="flex md:flex-row flex-col md:items-center gap-6 md:gap-10 font-poppins text-[16px] font-bold text-white">
    <li><a href="#about" className="hover:text-[#FF8303] transition duration-300">ABOUT ME</a></li>
    <li><a href="#skills" className="hover:text-[#FF8303] transition duration-300">SKILLS</a></li>
    <li><a href="#projects" className="hover:text-[#FF8303] transition duration-300">PROJECTS</a></li>
    <li><a href="#experience" className="hover:text-[#FF8303] transition duration-300">WORK</a></li>
    <li><a href="#contacts" className="hover:text-[#FF8303] transition duration-300">CONTACTS</a></li>
  </ul>

</div>



  )
}

export default Navbar
