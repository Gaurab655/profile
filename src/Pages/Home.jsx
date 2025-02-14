import React from 'react'
import Navbar from "../Component/Navbar"
import Header from "../Component/Header"
import Bio from '../Component/Bio';
import Skills from '../Component/Skills';
import Message from '../Component/message';
import Education from '../Component/Education';
import Projects from '../Component/Projects';
import Footer from '../Component/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Education/>
      <Message/>
      <Footer/>
    </div>
  );
};

export default Home;
