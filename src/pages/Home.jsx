import React from 'react'
import '../app.css'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Blog from '../components/Blog'
import About from '../components/About'
import Project from '../components/Project'
import Portfolio from '../components/Portfolio'
import Testimonals from '../components/Testimonals'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
    
    <Banner />
    <Services />
    <About />
    <Project />
    <Portfolio />
    <Testimonals />
    <Contact />
    <Blog />
    
    </>
  )
}

export default Home