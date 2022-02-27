import React from 'react'
import ScrollAnimation from
  'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import express from '../assets/express.svg'
const Tech = ({ DevIcon }) => {
  return (
    <div id='tech' className='devicon-container tech' >
      <ScrollAnimation
        offset={300}
        animateIn='flipInX'>
        <a href='#tech'>
          <h1>The tech I use</h1>
        </a>
        <ol className='icon-list'>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <path fill="#0000" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="current" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
          </svg>
            TypeScript</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <g fill="current"><path d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"></path><path d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"></path><path d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"></path><path d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"></path></g>
          </svg>
            Google Cloud Platform</li>    <li className='devicon '><DevIcon icon='javascript' />JavaScript</li>
          <li className='devicon '><DevIcon icon='html5' />HTML5</li>
          <li className='devicon '><DevIcon icon='css3' />CSS3</li>
          <li className='devicon '><DevIcon icon='sass' />Sass</li>
          <li className='devicon '><DevIcon icon="mongodb" />MongoDb</li>
          <li className='devicon '><img src={express} />Express</li>
          <li className='devicon '><DevIcon icon='react' />React</li>
          <li className='devicon '><DevIcon icon='nodejs' />Node.js</li>
          <li className='devicon '><DevIcon icon='python' />Python</li>
          <li className='devicon '><DevIcon icon="postgresql" />PostgreSQL</li>
          <li className='devicon '><DevIcon icon="django" />Django</li>
          <li className='devicon '><DevIcon icon='git' />Git</li>
          <li className='devicon '><DevIcon icon='github_badge' />Github</li>
          <li className='devicon '><DevIcon icon='npm' />npm</li>
          <li className='devicon '><DevIcon icon="heroku" />Heroku</li>
     
          {/* <li className='devicon '><DevIcon  icon="yarn" /></li> */}
        </ol>
      </ScrollAnimation>
    </div>
  )
}
export default Tech
