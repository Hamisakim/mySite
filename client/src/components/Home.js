import React from 'react'
import DevIcon from 'devicon-react-svg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Projects from './Projects'
import MouseParticles from 'react-mouse-particles'
import Typist from 'react-typist'
import Contact from './Contact'

const Home = () => {

  //#region //* brand statement 
  const brandStatement = 'Throughout life, my passions have been my motivators. While a mechanical engineering student, my knowledge grew in one. During my time as part of the e-Commerce team at Warner Music Group, I worked in one. And being immersed in an intense three months of coding – I found a new one. As my previous role exposed me to web development, the pandemic allowed me to re-evaluate my career and think about my future, which led me to a career change.\vBeing a fresh full-stack developer allows me to be a stronger creative thinker, utilise my technical skills and more importantly, keeps me learning (and humble). Now it’s time to start a career as a developer and create fun interactive experiences.'
  //#endregion

  return (
    <>
      <MouseParticles g={0} life={0.2} color={['#3dca37','#01050a'] }cull="devicon-container,no-mouse-effect"/>
      
      <div className='homepage'>
        
        <div className='hero'>
          <Typist 
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
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{'interests: [\'Music\',\'Gaming\',\'Reading\']'}</span>
            <br/>

            <span>{' }'}</span>
          </Typist>
        </div>



        <section className='about-section'>
          <div className='brand-statement' >
            <p>
              {brandStatement}
            </p>
          </div>
        </section>

       
        
       
        <Projects />

        <ScrollAnimation 
          offset={300}
          animateIn='flipInX'>
          <div id='tech' className='devicon-container' >
            <h1>The tech I use</h1>
            <ol className='icon-list'>
              <li className='devicon '><DevIcon  icon='git' />Git</li>
              <li className='devicon '><DevIcon  icon='nodejs' />Node.js</li>
              <li className='devicon '><DevIcon  icon='javascript' />JavaScript</li>
              <li className='devicon '><DevIcon  icon='sass' />Sass</li>
              <li className='devicon '><DevIcon  icon='react' />React Hooks</li>
              <li className='devicon '><DevIcon  icon='python' />Python</li>
              <li className='devicon '><DevIcon  icon='html5' />HTML5</li>
              <li className='devicon '><DevIcon  icon='css3' />CSS3</li>
              <li className='devicon '><DevIcon  icon='github_badge' />Github</li>
              <li className='devicon '><DevIcon  icon='npm' />npm</li>
              <li className='devicon '><DevIcon  icon="mongodb" />MongoDb</li>
              <li className='devicon '><DevIcon  icon="heroku" />Heroku</li>
              <li className='devicon '><DevIcon  icon="postgresql" />PostgreSQL</li>
            </ol>
          </div>
        </ScrollAnimation>
      
        <Contact/>

      
      </div> 
    </>
  )
}

export default Home
