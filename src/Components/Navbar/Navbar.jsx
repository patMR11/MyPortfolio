import React from 'react'
import './Navbar.css'
import logo from '../../../public/images/pat_logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
function Navbar() {
    const[smallMenu, setSmallMenu] = useState(false)
        /*if(window.innerWidth>=768 && smallMenu){
                setSmallMenu(false)
                console.log('correct')
        }*/
  return (
    <>
        <nav>
            <img src={logo} alt="initials logo" className='h-14 w-14 mx-4 rounded-full'/>
            <ul className='nav-list'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li className='resume'>Resume</li>
            </ul>
            <div className='small-menu' onClick={()=>{
                setSmallMenu(prev=>!prev)
                }}>
                    {console.log(smallMenu)}
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className={`smallMenu-list ${smallMenu? "open": "close"}`}>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <hr />
                    <li>Contact</li>
                    <hr />
                    <li className='resume'>Resume</li>
                </ul>
            </div>
        </nav>
        
    </>
   
    

  )
}

export default Navbar