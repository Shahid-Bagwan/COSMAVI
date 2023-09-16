import React from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'

function App() {

  return (
    <>
     <section className="container p-0 ">
      <Hero/>
      </section>
      <section className="container pt-2 pr-0 pl-0">
      <About/>
      </section>
    </>
  )
}

export default App
