import React,{ useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import monoMelodyImg from '../assets/MonoMelody.gif'
import doodlerImg from '../assets/doodler.gif'
import HungrySharkImg from '../assets/hungryshark.gif'
import DevIcon from 'devicon-react-svg'
import express from '../assets/expressBlack.svg'

import shark  from './fish/shark.gif'

import 'animate.css/animate.css' 
// import Animate from 'animate.css-react'

const Projects = () => {

  // eslint-disable-next-line no-unused-vars
  const [sharkVisible, setSharkVisible] = useState()
  
  useEffect(()=>{
    const sharkVis = (visible) => {
      console.log('🐝 ~ 🔴', visible)
    }
    sharkVis()
  },[])
  const [animation, setAnimation] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [sharkOut, setSharkOut] = useState(false)
  

  
  // eslint-disable-next-line no-unused-vars
  const handleShark = (visible) => {
    const shark = document.querySelector('.shark')
    console.log('🐝 ~ shark', shark)
    console.log('🐝 ~ visible', visible)
    setAnimation(true)
    setSharkOut(true)


    if (visible.inViewport)
      setSharkVisible(true)
    setAnimation(true)
  }
  

  //On scroll do it 
  // on scroll animation end, remove the component 


  return (
    <div id='projects' className='projects'>
      <ScrollAnimation animateIn='animate__fadeIn'
        animateOut='animate__fadeOutLeft'
        offset={0} >
        <a href='#projects'><h1 className='project-header'> Projects</h1></a>
      </ScrollAnimation>

      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={200} >
        
        <div className='monomelody project-details-container'>
          <h1>MonoMelody.<a href='https://github.com/Hamisakim/MonoMelody'>
            <DevIcon className='devicon-project' icon='github_badge' />
          </a></h1>

          <p>Create and share melodies with our built in sythesiser! 
            <br/>
            1-week duo
          
            <div className='built-with'>       
              <DevIcon className='built-with-icon' icon='python' />  
              <DevIcon className='built-with-icon' icon='django' />  
              <DevIcon className='built-with-icon' icon='react' />  
              <DevIcon className='built-with-icon' icon='sass' />  
            </div>  
            <a href='https://monomelody.herokuapp.com/'>
              <img  src={monoMelodyImg} />
            </a>
          </p> 
        </div>
      </ScrollAnimation >
 
      <ScrollAnimation animateIn='animate__fadeInRight'
        animateOut='animate__fadeOutRight'
        offset={200} >
        <div>
          <div className='doodler project-details-container'>
            <h1>Doodler<a target="_blank" rel="noreferrer" href='https://github.com/Hamisakim/doodle' ><DevIcon className='devicon-project' icon='github_badge' /></a></h1>
            <p>A social site to create and share your best doodles!
              <br/>
             1-week group
              <br/>

              <div className='built-with'>
                <DevIcon className='built-with-icon' icon='mongodb' />
                <DevIcon className='built-with-icon' icon='react' />
                <DevIcon className='built-with-icon' icon='sass' />  
                <img className='built-with-icon express-icon-small' src={express} />

              </div>
            </p>
            <a target="_blank" rel="noreferrer"href='https://doodler.netlify.app/'>
              <img className='doodler-img' src={doodlerImg} />
            </a>
          </div>
        </div>
      </ScrollAnimation >


      <>
        <ScrollAnimation 
  
          duration={10}
          offset={150}
          animateIn='animate__slideInRight animate__slower'
          afterAnimatedIn={handleShark}
          // animateOut='animate__backOutLeft '
          animatePreScroll={false}
        > 
      
          <div className={!animation ? 'fish shark' : 'fish shark reverse-shark animate__animated  animate__slideOutRight animate__slower'}>
    




            {/* <div className='fish shark animate__animated animate__fadeInLeft '> */}
            <img src={shark} />

          </div>
        </ScrollAnimation>
      </>
   
      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={0} >
        <div>
          <div className='hungry-shark project-details-container'>
            <h1>Hungry Shark<a target="_blank" rel="noreferrer"href='https://github.com/Hamisakim/HungryShark'><DevIcon className='devicon-project' icon='github_badge' /></a></h1>
            <p>Pac-man with a twist <br/>1 week solo  <br/>
              <div className='built-with animate__fadeOutLeft'>
                <DevIcon className='built-with-icon' icon='javascript' />
                <DevIcon className='built-with-icon' icon='css3' />
                <DevIcon className='built-with-icon' icon='html5' />
              </div>
            </p>
            <a target="_blank" rel="noreferrer"href='https://hamisakim.github.io/sei-project-one/'>
              <img src={HungrySharkImg} />
            </a>
          </div>
        </div>
      </ScrollAnimation >
    
    
    
    
    
    
    </div>
 

 
 
 
 
  )
}

export default Projects
