import React from 'react'
import '../CSS/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="LOGO.png" alt="" className='logo'/>
      <ul className='list'>
      <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#experience">WORK</a></li>
        <li><a href="#contacts">CONTACTS</a></li>
      </ul>
    </div>
  )
}

export default Navbar
