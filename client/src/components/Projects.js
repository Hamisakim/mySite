import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import monoMelodyImg from '../assets/MonoMelody.gif'
import doodlerImg from '../assets/doodler.png'
import HungrySharkImg from '../assets/hungryshark.gif'
import DevIcon from 'devicon-react-svg'
import express from '../assets/express.svg'

import shark  from './fish/shark.gif'

const Projects = () => {
   
  return (
    <div id='projects' className='projects-container'>
      <ScrollAnimation animateIn='animate__fadeIn'
        animateOut='animate__fadeOutLeft'
        offset={100} ><h1 className='project-header'> Projects</h1>
      </ScrollAnimation>

      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={0} >
        
        <div className='monomelody project-details-container'>
          <h1>MonoMelody.<a href='https://github.com/Hamisakim/MonoMelody'>
            <DevIcon className='devicon-project' icon='github_badge' />
          </a></h1>

          <p>Create and share melodies with our built in sythesiser<br/>                
            <DevIcon className='built-with-icon' icon='python' />  
            <DevIcon className='built-with-icon' icon='django' />  
            <DevIcon className='built-with-icon' icon='react' />  
            <DevIcon className='built-with-icon' icon='sass' />  
          </p>
          <a href='https://monomelody.herokuapp.com/'>
            <img src={monoMelodyImg} />
          </a>

        </div>
      </ScrollAnimation >
 
      <ScrollAnimation animateIn='animate__fadeInRight'
        animateOut='animate__fadeOutRight'
        offset={200} >
        <div>
          <div className='doodler project-details-container'>
            <h1>Doodler<a href='https://github.com/Hamisakim/doodle'><DevIcon className='devicon-project' icon='github_badge' /></a></h1>
            <p>A social site to share your best doodles! <br/>
              <div className='built-with'>
                <DevIcon className='built-with-icon' icon='mongodb' />
                <DevIcon className='built-with-icon' icon='react' />
                <DevIcon className='built-with-icon' icon='sass' />  
                <img className='built-with-icon express-icon-small' src={express} />

              </div>
            </p>
            <a href='https://doodler.netlify.app/'>
              <img src={doodlerImg} />
            </a>
          </div>
        </div>
      </ScrollAnimation >
      <ScrollAnimation 
        duration={9}
        offset={150}
        
        animateIn='animate__fadeInRight animate__slower'
        animateOut='animate__backOutLeft animate__slower'
        animatePreScroll={false}
      >
       
        <div className='fish shark'>
          <img src={shark} />
        </div>
        





      </ScrollAnimation>
      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={0} >
        <div>
          <div className='hungry-shark project-details-container'>
            <h1>Hungry Shark<a href='https://github.com/Hamisakim/HungryShark'><DevIcon className='devicon-project' icon='github_badge' /></a></h1>
            <p>Pac-man with a twist <br/>this was a 1 week solo project built with:<br/>
              <div className='built-with'>
                <DevIcon className='built-with-icon' icon='javascript' />
                <DevIcon className='built-with-icon' icon='css3' />
                <DevIcon className='built-with-icon' icon='html5' />
              </div>
            </p>
            <a href='https://hamisakim.github.io/sei-project-one/'>
              <img src={HungrySharkImg} />
            </a>
          </div>
        </div>
      </ScrollAnimation >
    </div>
 

 
 
 
 
  )
}

export default Projects
