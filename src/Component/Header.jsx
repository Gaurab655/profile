import React from "react";
import linkedin from '../assets/linkedin.png'
import photo from '../assets/photo.png'
import github from '../assets/git.png'

const Header = ()=> {
    return(
        <header className="flex md:flex-row flex-col justify-between items-center">
  <div className=" pt-8">
    <h1 className="text-[#FF8303] font-poppins text-[46px] font-bold">GAURAB CHAND</h1>
    <h3 className="text-[rgb(227,202,156)] font-sans text-[36px] font-semibold">JAVA DEVELOPER</h3>
    <div className="w-[475px]">
    <p>
      I am a UI/UX fresher who values qualitative user research. This is 
      something where I feel like I can bring a lot to the team.
    </p>
    <div className="flex gap-4 mt-4">
    <button className="bg-[#FF8303] gap-4 py-2 px-2 rounded-md transition">Download CV</button>
    <button className="bg-[#FF8303] gap-4 py-2 px-2 rounded-md transition">Hire me now</button>
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