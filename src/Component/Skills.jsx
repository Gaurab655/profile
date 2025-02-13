import React from 'react'
import java from '../assets/java.png'
import springboot from '../assets/springboot.png'
import postgresql from '../assets/postgresql.png'
import mysql from '../assets/mysql.png'
import git from '../assets/github.png'

function Skills() {
  return (
    <div className="mt-20 flex flex-col items-center">
  {/* Section Title */}
  <h1 className="text-4xl font-extrabold text-[#FF8303]">MY SKILLS</h1>

  {/* Skills Container */}
  <div className="mt-14 flex md:flex-row flex-col justify-between items-center gap-16">
    {[java, springboot, postgresql, mysql, git].map((skill, index) => (
      <img key={index} src={skill} alt="Skill Logo"
        className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
      />
    ))}
  </div>
</div>

  )
}

export default Skills
