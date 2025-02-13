import React from 'react'
import one from '../assets/Arrow1.png'
import two from '../assets/Arrow2.png'

function Education() {
  return (
    <div className='flex flex-col justify-center mt-[88px]'>
      <h1 className="text-3xl font-bold text-[#FF8303] text-center mb-6" >My Education</h1>
      <div className='flex gap-10 justify-center'>
      <img src={two} alt="" />
        <img src={one} alt="" />
      </div>
      <div className='flex justify-center mt-8 gap-[250px]'>
      <button className="bg-[#FF8303] h-[62px] w-[120px] gap-4 py-2 px-2 rounded-md transition font-semibold text-lg">BSC.CSIT</button>
      <button className="bg-[#FF8303] h-[62px] w-[120px] gap-4 py-2 px-2 rounded-md transition font-semibold text-lg">SCIENCE</button>
      </div>
      <div>
        <a href="">I am studying  Bsc.csit at Texas international College in 5th semister.</a>
        <a href="">I am studying  Bsc.csit at Texas international College in 5th semister.</a>
      </div>

      

    </div>
  )
}

export default Education
