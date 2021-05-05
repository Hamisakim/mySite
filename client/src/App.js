import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { NyanScrollBar  } from 'react-nyan-stroller'
import 'animate.css'
const App = () => {

  return (
    <>
      <Navbar/>
      <div className='nyan-container'>
        <NyanScrollBar className='z-index' draggable  targetAxis="horizontal" />
      </div>
      <Home/>
      <Footer/>
    </>
  )

}

export default App
