import React from 'react'
import Footer from './Footer/Footer'
import Profile from './Profile/Profile'
import './Home.css'
import Aboutme from './AboutMe/Aboutme'
import Ressume from './Resume/Ressume'
import Contact from '../ContactMe/Contact'
import Header from '../Header/Header'
import { AOS } from 'aos'
import ScrollTop from '../Scroll btn/ScrollTop'

export default function Home() {
  return (
    <div className='portfolio-container'>
      
      <div id='home' className='home-container '>
        <Profile />
        <Footer />
      </div>
      
      <div id='about' className="about-me-container screen-container  fade-in">
        < Aboutme/>
      </div>
      <div id='ressume' className="resume-container screen-container fade-in">
        <Ressume />
      </div>
      <div id='contact' className='main-container fade-in'>
        <Contact/>
      </div>
     
    </div>
  )
}
   /*
      <div className="about-me-container screen-container fade-in">
        <Aboutme />
      </div>
      <div className="resume-container screen-container fade-in">
        <Ressume />
      </div>
*/