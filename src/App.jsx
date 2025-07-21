import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Card from './components/Card'
import Train from './components/Train'
import Testmonial from './components/Testmonial'
import Inpact from './components/Inpact'
import Outbound from './components/Outbound'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div >
        <Header />
        <main className='max-w-[1440px] mx-auto overflow-x-hidden'>
          <Hero/>
          <Partners/>
          <Card/>
          <Train/>
          <Testmonial/>
          <Inpact/>
          <Outbound/>
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App

 const loder = document.querySelector('.loder');
window.addEventListener('load',()=>{
  loder.style.display = 'none'
})