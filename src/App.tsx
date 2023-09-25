import React from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import TeamComponent from './components/team_component'
import Footer from './components/footer'
import Product from './components/product_introduction'
import Steps_section from './components/steps_section'
function App() {

  return (
    <>
      <Hero/>
      <Product/>
      <Steps_section/>
      <About/>
      <TeamComponent/>
      <Footer/>
    </>
  )
}

export default App
