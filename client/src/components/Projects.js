import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import monoMelodyImg from '../assets/MonoMelody.gif'
import doodler from '../assets/doodler.png'


const Projects = () => {
  
  
  return (
    <div className='projects-container'>
      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={250} >
        <div>
          <div className='monomelody project-details-container'>
            <h1>MonoMelody.</h1>
            <p>Create and share melodies with our built in synthesizer </p>
            <a href='https://monomelody.herokuapp.com/'>
              <img src={monoMelodyImg} />
            </a>
          </div>
        </div>
      </ScrollAnimation >
 
      <ScrollAnimation animateIn='animate__fadeInRight'
        animateOut='animate__fadeOutRight'
        offset={150} >
        <div>
          <div className='doodler project-details-container'>
            <h1>Doodler</h1>
            <p>A social site to share your best doodles! </p>
            <a href='https://doodler.netlify.app/'>
              <img src={doodler} />
            </a>
          </div>
        </div>
      </ScrollAnimation >
 
    </div>
 
 
 
 
 
 
  )
}

export default Projects
