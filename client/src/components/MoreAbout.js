import React from 'react'
import coder from '../assets/busycoder-yellow.png'

const MoreAbout = () => {
  return (
    <div className='z-index'>

      <div id='more-about'  className='more-about'>
        <h1>A little more...</h1>
        <p>

      Things I like that make me me: music, the sea, mosh-pits, meditation, F1, anything with an engine, Lego, space travel, earth travel, Star Wars, blockchain, crypto-currency, crime thrillers, dancing, airsoft, action-comedies, single-malts, Oxford comma, puns, video games, and ...coding!      <img className='coder' src={coder} />
        </p>
      </div>
    </div>
  )
}

export default MoreAbout
