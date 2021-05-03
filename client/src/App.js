import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { NyanScrollBar  } from 'react-nyan-stroller'

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      <NyanScrollBar className='z-index' draggable targetAxis="horizontal" />
    </>
  )

}

export default App
