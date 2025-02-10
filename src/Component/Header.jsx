import React from "react";
import '../CSS/Header.css'
import linkedin from '../assets/linkedin.png'
import photo from '../assets/photo.png'
import github from '../assets/git.png'

const Header = ()=> {
    return(
        <header className="header">
  <div className="content">
    <h1 className="name">GAURAB CHAND</h1>
    <h3 className="role">JAVA DEVELOPER</h3>
    <p className="description">
      I am a UI/UX fresher who values qualitative user research. This is 
      something where I feel like I can bring a lot to the team.
    </p>
  </div>

  <figure className="photo">
    <img src={photo} alt="Profile photo of Gaurab Chand" />
  </figure>

<div className="social">
  <ul className="social">
    <li className="linkedin">
      <img src={linkedin} alt="LinkedIn icon" />
      <a href="#" className="linkedin-link">LinkedIn</a>
    </li>
    <li className="github">
      <img src={github} alt="GitHub icon" />
      <a href="#" className="github-link">GitHub</a>
    </li>
  </ul>
</div>

    
</header>

    )
}
export default Header