import React from 'react'
import './Navbar.css'
import logo from '../../../public/images/pat_logo.webp'
import { useState, useRef } from 'react'
import { useEffect } from 'react'
function Navbar() {
    const scrollToSection = (id)=>{
        document.getElementById(id).scrollIntoView({
            behavior:"smooth"
        })
    }
    const[smallMenu, setSmallMenu] = useState(false)
    const menuRef = useRef(null)
    const iconRef = useRef(null)
       //close small scroll down nav menu when clicking outside
    useEffect(()=>{

        function handler(e){
        if(menuRef.current && !menuRef.current.contains(e.target) && iconRef.current && !iconRef.current.contains(e.target)){
            setSmallMenu(false)
        }
        }
        document.addEventListener('mousedown', handler)

        return()=>{
            document.removeEventListener('mousedown',handler)
        }
    },[])
    
    //close drop down when screen resizes to medium
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth>=768){
                setSmallMenu(false)
            }
        };
        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize", handleResize)
        };
    },[])
    
   
    //close drop down when screen resizes to medium
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth>=768){
                setSmallMenu(false)
            }
        };
        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize", handleResize)
        };
    },[])

  return (
    <>
        <nav>
            <img src={logo} alt="initials logo" className='h-14 w-14 mx-4 rounded-full'/>
            <ul className='nav-list'>
                <li onClick={()=>{scrollToSection('about')}}>About</li>
                <li onClick={()=>{scrollToSection('projects')}}>Projects</li>
                <li onClick={()=>{scrollToSection('contact')}}>Contact</li>
                <li><a href="../../../public/PatMR_resume.pdf" aria-label="Download my resume" target='_blank' rel='noopener noreferrer' className='resume'>Resume</a></li>
            </ul>
            <div className='small-menu' ref={iconRef} onClick={()=>{
                setSmallMenu(prev=>!prev)
                }}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className={`smallMenu-list ${smallMenu? "open": ""}`} ref={menuRef}>
                <ul>
                    <li onClick={()=>{scrollToSection('about')}}>About</li>
                    <li onClick={()=>{scrollToSection('projects')}}>Projects</li>
                    <li onClick={()=>{scrollToSection('contact')}}>Contact</li>
                    <li><a href="../../../public/PatMR_resume.pdf" aria-label="Download my resume" target='_blank' rel='noopener noreferrer' className='resume'>Resume</a></li>
                </ul>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar