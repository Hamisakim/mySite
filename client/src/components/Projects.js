import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import monoMelodyImg from '../assets/MonoMelody.gif'
import doodlerImg from '../assets/doodler.png'
import HungrySharkImg from '../assets/hungryshark.gif'
import DevIcon from 'devicon-react-svg'


const Projects = () => {
  

  
  return (
    <div id='projects' className='projects-container'>
      <h1>Projects</h1>
      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={150} >
        <div>
          <div className='monomelody project-details-container'>
            <h1>MonoMelody.<a href='https://github.com/Hamisakim/MonoMelody'><DevIcon className='devicon-project' icon='github_badge' /></a></h1>

            <p>Create and share melodies with our built in sythesiser   </p>
            <a href='https://monomelody.herokuapp.com/'>
              <img src={monoMelodyImg} />
            </a>

          </div>
        </div>
      </ScrollAnimation >
 
      <ScrollAnimation animateIn='animate__fadeInRight'
        animateOut='animate__fadeOutRight'
        offset={200} >
        <div>
          <div className='doodler project-details-container'>
            <h1>Doodler<a href='https://github.com/Hamisakim/doodle'><DevIcon className='devicon-project' icon='github_badge' /></a></h1>
            <p>A social site to share your best doodles! </p>
            <a href='https://doodler.netlify.app/'>
              <img src={doodlerImg} />
            </a>
          </div>
        </div>
      </ScrollAnimation >
  
      <ScrollAnimation animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutLeft'
        offset={0} >
        <div>
          <div className='hungry-shark project-details-container'>
            <h1>Hungry Shark<a href='https://github.com/Hamisakim/HungryShark'><DevIcon className='devicon-project' icon='github_badge' /></a></h1>
            <p>Pac-man with a twist</p>
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
