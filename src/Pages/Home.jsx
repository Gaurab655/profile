import React from 'react'
import Navbar from "../Component/Navbar"
import Header from "../Component/Header"
import Bio from '../Component/Bio';
import Skills from '../Component/Skills';
import Message from '../Component/message';
import Education from '../Component/Education';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Bio/>
      <Skills/>
      <Education/>
      <Message/>
    </div>
  );
};

export default Home;
