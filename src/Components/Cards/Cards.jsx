import React from 'react'
import projects from '../../../public/project_list.json'
function Cards() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {projects.map(({name,image,alt,description,languages,github,demo},index)=>{
            return(
                <div key={index} className='border-2 border-[#1E90FF] rounded-xl overflow-hidden flex flex-col justify-between md:hover:scale-105 transition-all duration-300 cursor-pointer'>
                    <div>
                        <div className='h-64 overflow-hidden'>
                            <img src={image} alt={alt} className='w-full h-full object-cover md:hover:scale-110 transition-all duration-300'/>
                        </div>
                        <div className='bg-white p-2'>
                            <div className='space-y-4'>
                                <h3 className='text-2xl font-bold'>{name}</h3>
                                <p>{description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {languages.map((language,index)=>{
                                        return(
                                            <span key={index}className='bg-blue-700 rounded-full text-sm text-white font-medium px-4 py-1'>{language}</span>
                                        )
                                    })}
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4 p-2'>
                            <a href={github??"No github link"} target="_blank" aria-label="check the code for this project" className="flex items-center gap-2 px-2 py-1 bg-white text-blue-700 border-2 border-blue-700 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition">
                                    <i className="fa-brands fa-square-github text-2xl mr-2"> </i>Code
                            </a>
                            <a href={demo??"No live demo"} aria-label= "view the live demo" target='_blank' className='px-2 py-2 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-900 transition'>Live Demo</a>
                    </div>
                </div>
            )
        })}
        
    </div>
    
  )
}


export default Cards