import React from 'react'
import Cards from '../Cards/Cards'

function Projects() {
  return (
    <section id='projects' className='py-16'>
        <div className='space-y-3 mb-6'>
            <h1 className='font-bold text-4xl text-center'>Featured Projects</h1>
            <p className='text-center text-lg'>A selection of my work showcasing different technologies and approaches</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-6'>
           <div className='border-2 border-[#1E90FF] rounded-xl overflow-hidden flex flex-col justify-between md:hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div>
                  <div className='h-64 overflow-hidden'>
                      <img src='images/japanese.png' alt='Japanese application' className='w-full h-full object-cover md:hover:scale-110 transition-all duration-300'/>
                  </div>
                  <div className='bg-white p-2'>
                      <div className='space-y-4'>
                          <h3 className='text-2xl font-bold'>Japanese Study Application</h3>
                          <p>Japanese Study Buddy is an Android app made for a client, designed to make learning Japanese easy and interactive. 
                            Fully compatible with all Android devices, it offers a smooth and engaging experience on both phones and tablets. 
                            Users can track their progress and follow personalized study plans to enhance their language skills effectively.</p>
                          <div className='flex flex-wrap gap-2'>
                              <span className='bg-blue-700 rounded-full text-sm text-white font-medium px-4 py-1'>Java</span>
                              <span className='bg-blue-700 rounded-full text-sm text-white font-medium px-4 py-1'>Android Studios</span>
                          </div> 
                      </div>
                  </div>
              </div>

              <div className='flex gap-4 p-2'>
                      <a href="https://github.com/patMR11/MiraiAppV3" target="_blank" aria-label="check the code for this project" className="flex items-center gap-2 px-2 py-1 bg-white text-blue-700 border-2 border-blue-700 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition">
                              <i className="fa-brands fa-square-github text-2xl mr-2"> </i>Code
                      </a>
              </div>
            </div>
            <div className='border-2 border-[#1E90FF] rounded-xl overflow-hidden flex flex-col justify-between md:hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div>
                  <div className='h-64 overflow-hidden'>
                      <img src='images/game.jpg' alt='racing car game' className='w-full h-full object-cover md:hover:scale-110 transition-all duration-300'/>
                  </div>
                  <div className='bg-white p-2'>
                      <div className='space-y-4'>
                          <h3 className='text-2xl font-bold'>Unity Racing Game</h3>
                          <p>A fast-paced 3D racing game built in Unity using C#.
              Features smooth vehicle controls, lap tracking, AI opponents, and dynamic camera movement.
              I created it for a university project, which gave me hands-on experience with Unity, C#, and gameplay design.</p>
                          <div className='flex flex-wrap gap-2'>
                              <span className='bg-blue-700 rounded-full text-sm text-white font-medium px-4 py-1'>Unity3D</span>
                              <span className='bg-blue-700 rounded-full text-sm text-white font-medium px-4 py-1'>C#</span>
                          </div> 
                      </div>
                  </div>
              </div>

              <div className='flex gap-4 p-2'>
                      <a href="https://github.com/patMR11/assignment-game" target="_blank" aria-label="check the code for this project" className="flex items-center gap-2 px-2 py-1 bg-white text-blue-700 border-2 border-blue-700 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition">
                              <i className="fa-brands fa-square-github text-2xl mr-2"> </i>Code
                      </a>
              </div>
            </div>
           
        </div>
         <div className='mb-6 pt-4'>
            <h1 className='font-bold text-2xl text-center'>Other Projects</h1>
         </div>
        <div className='px-6'>
            <Cards/>
        </div>
    </section>
  )
}

export default Projects