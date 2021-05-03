import React from 'react'
import ScrollAnimation from 
  'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import express from '../assets/express.svg'

const Tech = ({ DevIcon }) => {
  
  return (
    <div id='tech' className='devicon-container' >
      <ScrollAnimation 
        offset={300}
        animateIn='flipInX'>
        <h1>The tech I use</h1>
        <ol className='icon-list'>
          <li className='devicon '><DevIcon  icon='javascript' />JavaScript</li>
          <li className='devicon '><DevIcon  icon='html5' />HTML5</li>
          <li className='devicon '><DevIcon  icon='css3' />CSS3</li>
          <li className='devicon '><DevIcon  icon='sass' />Sass</li>
          <li className='devicon '><DevIcon  icon="mongodb" />MongoDb</li>
          <li className='devicon '><img src={express}/>Express</li>
          <li className='devicon '><DevIcon  icon='react' />React Hooks</li>
          <li className='devicon '><DevIcon  icon='nodejs' />Node.js</li>
          <li className='devicon '><DevIcon  icon='python' />Python</li>
          <li className='devicon '><DevIcon  icon="postgresql" />PostgreSQL</li>
          <li className='devicon '><DevIcon  icon="django" />Django</li>
          <li className='devicon '><DevIcon  icon='git' />Git</li>
          <li className='devicon '><DevIcon  icon='github_badge' />Github</li>
          <li className='devicon '><DevIcon  icon='npm' />npm</li>
          <li className='devicon '><DevIcon  icon="heroku" />Heroku</li>
          {/* <li className='devicon '><DevIcon  icon="yarn" /></li> */}
        </ol>
      </ScrollAnimation>
    </div>
  )
}

export default Tech
