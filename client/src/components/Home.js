// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import DevIcon from 'devicon-react-svg'
// eslint-disable-next-line no-unused-vars
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Projects from './Projects'

const Home = () => {

  //#region 
  const brandStatement = 'Throughout life, my passions have been my motivators. While a mechanical engineering student, my knowledge grew in one. During my time as part of the e-Commerce team at Warner Music Group, I worked in one. And being immersed in an intense three months of coding – I found a new one. As my previous role exposed me to web development, the pandemic allowed me to re-evaluate my career and think about my future, which led me to a career change.\vBeing a fresh full-stack developer allows me to be a stronger creative thinker, utilise my technical skills and more importantly, keeps me learning (and humble). Now it’s time to start a career as a developer and create fun interactive experiences.'
  //#endregion

  return (
    <>
      <div className='homepage'>

        <div className='hero'>
                 hero
        </div>



        <ScrollAnimation animateIn='fadeIn'
          animateOut='fadeOut'
          offset={10} >
          <section className='about-section'>
            <div className='brand-statement' >
              <p>
                {brandStatement}
              </p>
            </div>
          </section>
        </ScrollAnimation >

        <ScrollAnimation 
          offset={300}
          animateIn='flipInX'>
          <div className='devicon-container' >
            <ol>
              <li><DevIcon className='devicon' icon='git' />Git</li>
              <li><DevIcon className='devicon' icon='nodejs' />Node.js</li>
              <li><DevIcon className='devicon' icon='javascript' />JavaScript</li>
              <li><DevIcon className='devicon' icon='sass' />Sass</li>
              <li><DevIcon className='devicon' icon='react' />React Hooks</li>
              <li><DevIcon className='devicon' icon='python' />Python</li>
              <li><DevIcon className='devicon' icon='html5' />HTML5</li>
              <li><DevIcon className='devicon' icon='css3' />CSS3</li>
              <li><DevIcon className='devicon' icon='github' />Github</li>
              <li><DevIcon className='devicon' icon='npm' />npm</li>
              <li><DevIcon className='devicon' icon="mongodb" />MongoDb</li>
              <li><DevIcon className='devicon' icon="heroku" />Heroku</li>
              <li><DevIcon className='devicon' icon="postgresql" />PostgreSQL</li>
            </ol>
       
          </div>
        </ScrollAnimation>
     
      </div> 

      <h1>Projects</h1>
      <Projects/>

    </>
  )
}

export default Home
