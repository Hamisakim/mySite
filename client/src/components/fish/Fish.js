/* eslint-disable no-unused-vars */
import React from 'react'
import * as fish from '../fish/'
// import blobby  from '../fish/blobby.gif'
// import fish0 from '../fish/fish0.gif'
// import fishes  from '../fish/fishes.gif'
// import goldfish  from '../fish/goldfish.gif'
// import mantaRay from '../fish/manta-ray.gif'
// import jellyfish  from '../fish/jellyfish.gif'
// import shark  from '../fish/shark.gif'
// import squid0  from '../fish/squid0.gif'
// import squid1  from '../fish/squid1.gif'
// import sub  from '../fish/sub.gif'

const Fish = ({ choice }) => {

  const fishToRender = `fish.${choice}` 
  console.log('🐝 ~ fishToRender', fishToRender)
  fish.fishes

  console.log('🐝 ~ fish', fish)

  
  return (
    <div className='fish '>
      <img src={fish.fishes} />
    </div>
  )
}

export default Fish
