import React from "react";
import linkedin from '../assets/linkedin.png'
import photo from '../assets/photo.png'
import github from '../assets/git.png'
import swift from '../assets/swift.svg'
import tewnty from '../assets/twenty.png'


const Header = ()=> {
    return(
        <header className="flex md:flex-row flex-col justify-between items-center">
  <div className=" pt-8">
    <h1 className="text-[#FF8303] font-poppins text-[46px] font-bold">GAURAB CHAND</h1>
    <h3 className="text-[rgb(227,202,156)] font-sans text-[36px] font-semibold">JAVA DEVELOPER</h3>
    <div className="w-[500px]">
    <p>
    Expert in Java, Spring Boot, and REST API development, building scalable and secure applications. 
    Passionate about clean code and backend optimization.
    </p>
    <div className="flex gap-4 mt-4">
    
   <a
   href="/assets/gaurab_chand.pdf" 
   download="Gaurab_Chand_CV.pdf"
   className="bg-[#FF8303] py-2 px-4 rounded-md transition hover:bg-[#e67300] text-white font-semibold"
 >
   Download CV
 </a>
 
    <button className="bg-[#FF8303] gap-4 py-2 px-2 rounded-md transition">Hire me now</button>
    </div>
    <div className="overflow-hidden w-full mt-10 ">
    <div className="flex gap-10 animate-slide">
      <a href="https://www.swifttech.com.np" target="_blank" rel="noopener noreferrer">
        <img src={swift} alt="Swift" className="h-16 md:h-20 object-contain" />
      </a>
      
      <a href="https://21sttech.org" target="_blank" rel="noopener noreferrer">
        <img src={tewnty} alt="Twenty" className="h-16 md:h-20 object-contain" />
      </a>
    </div>
  </div>
    </div>
  </div>

  <figure className="pt-8">
    <img src={photo} alt="photo" />
  </figure>

<div className="pt-8">
  <ul className="flex flex-col gap-3">
    <li className="flex items-center gap-2">
      <img src={linkedin} alt="LinkedIn icon" />
      <a href="#" className="font-bold">LinkedIn</a>
    </li>
    <li className="flex items-center gap-2">
      <img src={github} alt="GitHub icon" />
      <a href="#" className="font-bold">GitHub</a>
    </li>
  </ul>
</div>    
</header>

    )
}
export default Header