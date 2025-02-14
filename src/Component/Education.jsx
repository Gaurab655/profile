import React from 'react'
import one from '../assets/Arrow1.png'
import two from '../assets/Arrow2.png'

function Education() {
  return (
    <div className='flex flex-col justify-center mt-[88px]'>
      <h1 className="text-3xl font-bold text-[#FF8303] text-center mb-6" >My Education</h1>
      <div className='flex gap-[100px] justify-center mt-8'>
      <img src={two} alt="" />
        <img src={one} alt="" />
      </div>
      <div className='flex justify-center mt-11 gap-[350px]'>
      <button className="bg-[#FF8303] h-[62px] w-[120px] gap-4 py-2 px-2 rounded-md transition font-semibold text-lg">BSC.CSIT</button>
      <button className="bg-[#FF8303] h-[62px] w-[120px] gap-4 py-2 px-2 rounded-md transition font-semibold text-lg">SCIENCE</button>
      </div>
      <div className='flex gap-[24px] justify-center mt-10'>
        <a href="" className='w-[400px]'>I have compleated my BSC.CSIT from Texas International college.</a>
        <a href="" className='w-[400px]'>I have compleated science from Nepal mega college.</a>
      </div>

      

    </div>
  )
}

export default Education
