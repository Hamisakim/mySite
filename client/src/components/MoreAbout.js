import React from 'react'
import picture from '../assets/Cropped Linkedin.png'
import coder from '../assets/busycoder-yellow.png'

const MoreAbout = () => {
  return (
    <div id='more-about'  className='more-about'>
      <h1>A little more about me!</h1>
      <p>

      Things: music, F1, anything with an engine, Lego, space travel, earth travel, Star Wars, blockchain, crypto-currency, crime thrillers, dancing, airsoft, action-comedies, single-malts, Oxford comma, puns, video games, and ...coding! duh!       <img className='coder' src={coder} />
      
    



      </p>
      <img className='linkedin-img' src={picture} />
    </div>
  )
}

export default MoreAbout
