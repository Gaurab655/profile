import React from 'react'

function message() {
  return (
    <div className="max-w-5xl mx-auto mt-[88px] p-6 rounded-lg">
  {/* Title */}
  <h1 className="text-3xl font-bold text-[#FF8303] text-center mb-6">Send Me Message</h1>

  {/* Form */}
  <form className=" mt-20 flex flex-col gap-8 w-full">
    {/* First & Last Name in One Row */}
    <div className="flex md:flex-row flex-col gap-4">
      <input 
        type="text" 
        placeholder="First name" 
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
      />

      <input 
        type="text" 
        placeholder="Last name" 
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
      />
    </div>

    {/* Email Field */}
    <input 
      type="email" 
      placeholder="Email" 
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
    />

    {/* Message Textarea */}
    <textarea 
      rows="4" 
      placeholder="Your message" 
      className="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
    ></textarea>

    {/* Submit Button */}
    <button 
      type="submit" 
      className="w-[220px] bg-[#FF8303] text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
    >
      Send Message
    </button>
  </form>
</div>


  )
}

export default message
