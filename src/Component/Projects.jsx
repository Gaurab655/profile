import React from 'react'
import todo from '../assets/todo.gif'
import bank from '../assets/banking.jpeg'

const Projects = () => {
  return (
    <div >
         <h1 className="text-3xl font-bold text-[#FF8303] text-center mt-[88px] mb-6">PROJECTS</h1>
        <div className='flex justify-start a mt-[88px] gap-[56px]'>
        <img 
  src={todo} 
  alt="To-Do App" 
  className="w-[250px] h-[250px] object-cover rounded-lg shadow-md"
/>
             <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>To-Do Application</h1>
                <a 
                className='text-blue-400'
                href="https://github.com/Gaurab655/todo">https://github.com/Gaurab655/todo</a>
             
            <a className='w-[600px] mt-6'  href="">
            Developed a to-do list application using Java and Spring Boot, enabling users to create, update, and delete tasks.
            Implemented RESTful APIs for task management and integrated PostgreSQL for persistent data storage.
            Emphasized clean code practices and efficient data handling.
            </a>
            </div>
        </div>
<div className='flex gap-8' >
 <div className='flex flex-col mt-11 ml-[400px]'>
                <h1 className='text-2xl font-semibold'>Smart Banking</h1>
                <a 
                className='text-blue-400 '
                href="https://github.com/Gaurab655/VApp">https://github.com/Gaurab655/VApp</a>
             
            <a className='w-[600px] mt-6 flex'  href="">
            Developed a bank management system using Java and Spring Boot with features like account
 management, transactions, and balance tracking.
 Designed RESTful APIs and integrated PostgreSQL for secure data handling.
 Focused on scalable architecture and robust exception handling.
            </a>
            </div>
            <img 
  src={bank} 
  alt="To-Do App" 
  className="w-[250px] h-[250px] object-cover rounded-lg shadow-md"
/>
        </div>
</div>
        
  )
}

export default Projects
