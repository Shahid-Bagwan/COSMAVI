import React from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import TeamComponent from './components/team_component'
import Footer from './components/footer'
import Product from './components/product_introduction'
function App() {

  return (
    <>
    
     <section className="container p-0 ">
      <Hero/>
      </section>
      <section className="container px-0 ">
      <Product/>
      </section>
      <section className="container px-0 ">
      <About/>
      </section>
      <section className="container px-0 ">
      <TeamComponent/>
      </section>
      <section className="container px-0 ">
      <Footer/>
      </section>
      
    </>
  )
}

export default App
