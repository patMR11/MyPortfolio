import React from 'react'

function Contact() {
  return (
    <div className='py-6 text-white bg-black'>
        <div className='space-y-3'>
            <h1 className='font-bold text-4xl text-center'>Get in touch!</h1>
            <div className='max-w-2xl mx-auto space-y-6 p-4'>
                <p>Have a project in mind? Let's work together to create something amazing.
                 I'm always open to discussing new projects, creative ideas, 
                or opportunities to be part of your vision.</p>
                <div className='flex items-center justify-center gap-4'>
                    <a href="https://github.com/patMR11" target='_blank'><i class="fa-brands fa-github text-4xl text-white hover:text-[#1E90FF]"></i></a>
                    <a href="https://linkedin.com/in/patrick-rukera/" target='_blank'><i class="fa-brands fa-linkedin text-4xl text-white hover:text-[#1E90FF]"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact