import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import "./About.scss" 


const About = () => {
  return (
    <>
    <Navbar/>
      <div className="about_container">
        This is About Page
      </div>
      <Footer/>
    </>
  )
}

export default About