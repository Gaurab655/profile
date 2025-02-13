import React from 'react'

const Navbar = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between '>
      <img src="LOGO.png" alt="" className='logo' />
      <ul className='flex md:flex-row flex-col gap-[34px] font-poppins text-[16px] font-bold '>
      <li><a href="#about" >ABOUT ME</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#experience">WORK</a></li>
        <li><a href="#contacts">CONTACTS</a></li>
      </ul>
    </div>
  )
}

export default Navbar
