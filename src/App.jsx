import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
function App() {
  
  return(
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
    </>

  )
}

export default App
