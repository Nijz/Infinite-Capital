import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Banner from './pages/Banner'
import Service from './pages/Service'
import InvestmentAd from './pages/InvestmentAd'
import InvestmentPlanes from './pages/InvestmentPlanes'
import WhyUs from './pages/WhyUs'
import Team from './pages/Team'
import JoinUs from './pages/JoinUs'
import Contact from './pages/Contact'
import Footer from './components/common/Footer'

function App() {
  return (
    <div>
      <div className=''>
        <Navbar/>
        <Hero/>
        <About/>
        <Banner/>
        <Service/>
        <InvestmentAd/>
        <InvestmentPlanes/>
        <WhyUs/>
        <Team/>
        <JoinUs/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App