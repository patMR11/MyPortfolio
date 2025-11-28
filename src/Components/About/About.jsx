import React from 'react'
import profile from '../../../public/images/pfp.png'
function About() {
  return (
    <div className='bg-black py-16 px-8 text-white gap-8 md:grid md:grid-cols-9'>
        <div className='space-y-4 md:col-span-6 px-8 mb-2'>
            <h1 className='font-bold text-4xl text-center md:text-left text-[#1E90FF]'>About Me</h1>
            <div>
                <p>I am a passionate software developer graduate with a Bachelor of information technology.
                    I have used JavaScript, React, HTML, CSS and Tailwind CSS to create fast, optimized applications that deliver exceptional user experiences. 
                    Additionally, I have a solid foundation in Python, along with some experience in SQL and Java. 
                    Currently, I am open to opportunities where I can continue to learn, contribute, and grow as a software developer. 
                    </p>
            </div>
            <div className='space-y-3'>
                <h3 className='font-semibold text-2xl text-center md:text-left text-[#1E90FF]'>Skills and Technologies</h3>
                <div>
                    <ul className='flex flex-wrap items-center gap-6 justify-center md:justify-start p-2'>
                        <li><i class="fa-brands fa-html5 text-[#1E90FF]"></i> HTML</li>
                        <li><i class="fa-brands fa-js text-[#1E90FF]"></i> JavaScript</li>
                        <li> <i class="fa-brands fa-react text-[#1E90FF]"></i> React</li>
                        <li><i className="fa-brands fa-css3 text-[#1E90FF]"></i> CSS</li>
                        <li className='flex items-center'>
                        <svg class="w-6 h-6 text-[#1E90FF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z"/>
                        </svg> Tailwind CSS</li>
                        <li><i class="fa-brands fa-python text-[#1E90FF]"></i> Python</li>
                        <li> <i class="fa-solid fa-database text-[#1E90FF]"></i> SQL</li>
                        <li><i class="fa-brands fa-square-git text-[#1E90FF]"></i> Git</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='h-72 md:h-96 flex justify-center md:col-span-3 lg:col-span-2'>
            <img src={profile} alt="profile picture" className='h-full rounded-[50%]'/>
        </div>
    </div>
  )
}

export default About