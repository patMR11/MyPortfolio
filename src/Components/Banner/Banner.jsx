import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='min-h-screen bg-black p-8 mt-16 z-1'>
        <div className='border-2 border-black space-y-6 max-w-5xl p-8'>
          <div className='space-y-2'>
              <p className='text-lg font-medium text-white'>Hello, My name is...</p>
              <h1 className='text-6xl font-bold text-[#1E90FF]'>Patrick Mucyo</h1>
          </div>
          <h2 className='text-4xl font-bold text-white'>Software Developer</h2>
          <div className='text-white flex gap-2 items-center text-lg'>
              <i className="fa-solid fa-graduation-cap"></i>
              <p>Bachelor of Information Technology</p>
          </div>
          <p className='text-lg font-medium text-white'>A software developer focused on crafting elegant solutions to complex problems.
          Driven by  curiosity and a passion for continuous learning, 
          I'm always seeking new opportunities to grow, refine my skills, and deliver meaningful results </p>
          <button className='banner-button'>
            View My Work &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </button>
      </div>
    </div>
   
  )
}

export default Banner