import React from 'react'
import Cards from '../Cards/Cards'

function Projects() {
  return (
    <section id='projects' className='py-16'>
        <div className='space-y-3 mb-6'>
            <h1 className='font-bold text-4xl text-center'>Featured Projects</h1>
            <p className='text-center text-lg'>A selection of my work showcasing different technologies and approaches</p>
        </div>
        <div className='px-6'>
            <Cards/>
        </div>
    </section>
  )
}

export default Projects