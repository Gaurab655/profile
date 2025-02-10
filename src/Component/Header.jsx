import React from "react";
import '../CSS/Header.css'

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
    <img src="/src/assets/photo.png" alt="Profile photo of Gaurab Chand" />
  </figure>

<div className="social">
  <ul className="social">
    <li className="linkedin">
      <img src="/src/assets/linkedin.png" alt="LinkedIn icon" />
      <a href="#" className="linkedin-link">LinkedIn</a>
    </li>
    <li className="github">
      <img src="/src/assets/git.png" alt="GitHub icon" />
      <a href="#" className="github-link">GitHub</a>
    </li>
  </ul>
</div>

    
</header>

    )
}
export default Header