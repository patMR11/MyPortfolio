import React from 'react'
import projects from '../../../public/project_list.json'
function Cards() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {projects.map(({name,image,description,languages})=>{
            return(
                <div className='border-2 border-[#1E90FF] rounded-xl overflow-hidden flex flex-col justify-between md:hover:scale-105 transition-all duration-300 cursor-pointer'>
                    <div>
                        <div className='h-64 overflow-hidden'>
                            <img src={image} alt="travel image" className='w-full h-full object-cover md:hover:scale-110 transition-all duration-300'/>
                        </div>
                        <div className='bg-white p-2'>
                            <div className='space-y-4'>
                                <h3 className='text-2xl font-bold'>{name}</h3>
                                <p>{description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {languages.map((language)=>{
                                        return(
                                            <p className='bg-[#1E90FF] rounded-lg px-2'>{language}</p>
                                        )
                                    })}
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 p-2'>
                            <button className='border-2 border-[#1E90FF] rounded-lg px-2 flex items-center'><i class="fa-brands fa-square-github text-2xl mr-2"> </i>Code</button>
                            <button className='bg-[#1E90FF] px-2 rounded-lg'>Live Demo</button>
                    </div>
                </div>
            )
        })}
        
    </div>
    
  )
}


export default Cards