import React, { useState,useEffect } from 'react'
import DevIcon from 'devicon-react-svg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Projects from './Projects'
import MouseParticles from 'react-mouse-particles'
import Typist from 'react-typist'
import Contact from './Contact'
import heroDesktopImg from '../assets/bg.png'
import express from '../assets/express.svg'



const Home = () => {

  //#region //* brand statement 
  const brandStatement = 'Throughout life, my passions have been my motivators. While a mechanical engineering student, my knowledge grew in one. During my time as part of the e-Commerce team at Warner Music Group, I worked in one. And being immersed in an intense three months of coding – I found a new one. As my previous role exposed me to web development, the pandemic allowed me to re-evaluate my career and think about my future, which led me to a career change.\vBeing a fresh full-stack developer allows me to be a stronger creative thinker, utilise my technical skills and more importantly, keeps me learning (and humble).'
  //#endregion

  // eslint-disable-next-line no-unused-vars
  const [typingEnded, setTypingEnded] = useState(false)
  //if the code has ended then give them the class and animate out 
  //animate__fadeOut
  
  const handleTypingEnded = () => {
    if (scrollPosition < 130 ){
      setTimeout(() => {
        window.scroll({
          top: 800,
          behavior: 'smooth'
        })
      }, 1000) 

      setTimeout(() => {
        setTypingEnded(true)
      }, 1500)
    }
  }

    
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



  
  return (
    <>
      <MouseParticles g={0} life={0.2} color={['#3dca37','#01050a'] }cull="devicon-container,no-mouse-effect"/>
      
      <div className='homepage'>
        
        <div className={!typingEnded ? 'hero' : 'hide' }>
          {/* <div className='hero'> */}
          <img className='desktop-img'
            src={heroDesktopImg}/>
                    
          <Typist 
            onTypingDone={()=>handleTypingEnded()}
            startDelay={1000}
            avgTypingDelay={80}
            cursor={{
              show: true,
              blink: true,
              element: '|'
            }}>
            <span>{'const me = {'}</span>
            <br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;firstName: &#39;Sami&#39;,</span>
            <br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;lastName: &#39;Hakim&#39;,</span>
            <br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;species: &#39;Wookie</span>
            <Typist.Backspace count={6} delay={200} />
            <span>Human&#39;,</span>
            <br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;job: &#39;Full-stack Developer&#39;</span>
            <br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{'hobbies: [\'Music\',\'Travel\',\'Reading\']'}</span>
            <br/>

            <span>{' }'}</span>
          </Typist>
        </div>



        <div id='about' className='about-section'>
          <h1>A little about me...</h1>
          <div className='brand-statement' >
            <p>
              {brandStatement}
            </p>
          </div>


        </div>

       
        
       
        <Projects />

        <ScrollAnimation 
          offset={300}
          animateIn='flipInX'>
          <div id='tech' className='devicon-container' >
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
          </div>
        </ScrollAnimation>



        <Contact/>
      
      </div> 
    </>
  )
}

export default Home
