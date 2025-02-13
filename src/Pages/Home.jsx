import React from 'react'
import Navbar from "../Component/Navbar"
import Header from "../Component/Header"
import Bio from '../Component/Bio';
import Skills from '../Component/Skills';
import Message from '../Component/message';
import Experience from '../Component/Experience';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Experience/>
      <Bio/>
      <Skills/>
      <Message/>
    </div>
  );
};

export default Home;
