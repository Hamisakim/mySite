/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import DevIcon from 'devicon-react-svg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Projects from './Projects'
import MouseParticles from 'react-mouse-particles'
import Typist from 'react-typist'
import Contact from './Contact'
// import heroDesktopImg from '../assets/bg.png'
import ParticlesBg from './particlesBG'
import MoreAbout from './MoreAbout'
import Experience from './Experience'
import Tech from './Tech'
// import ContactForm from './contactForm/ContactForm'
import blobby  from './fish/blobby.gif'
import fish0 from './fish/fish0.gif'
import fishes  from './fish/fishes.gif'
import goldfish  from './fish/goldfish.gif'
import mantaRay from './fish/manta-ray.gif'
import jellyfish  from './fish/jellyfish.gif'
import shark  from './fish/shark.gif'
import squid0  from './fish/squid0.gif'
import squid1  from './fish/squid1.gif'
import sub  from './fish/sub.gif'
// ⌵
const Home = () => {
  //#region //* brand statement 
  // eslint-disable-next-line quotes
  const brandStatement = `Throughout life, my passions have been my motivators. While a mechanical engineering student, my knowledge grew in one. During my time as part of the e-Commerce team at Warner Music Group, I worked in one. And being immersed in an intense three months of coding – I found a new one. As my previous role exposed me to web development, the pandemic allowed me to re-evaluate my career and think about my future, which led me to a career change.\vBeing a fresh full-stack developer allows me to be a stronger creative thinker, utilise my technical skills and more importantly, keeps me learning (and humble).`
  //#endregion
  // eslint-disable-next-line no-unused-vars
  const [typingEnded, setTypingEnded] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  //* this will autoscroll if user has not already scrolled away from top of page
  const handleTypingEnded = () => {
    setTypingEnded(true)

    if (scrollPosition < 130 ){
      setTimeout(() => {
        setTypingEnded(true)
      }, 2500)      
      // setTimeout(() => {
      //   window.scroll({
      //     top: 200,
      //     behavior: 'smooth'
      //   })
      // }, 2000) 
    }
  }
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  // const styles = {
  //   height: '200px',
  //   width: '50%',
  //   margin: '10px',
  //   padding: '4px',
  //   backgroundColor: '#EEE',
  //   position: 'relative'
  // }
  const handleDownArrow = () => {
    window.scroll({
      top: 800,
      behavior: 'smooth'
    })
  }
  const handleJellyFishExit = () => {
    const getJellyfish = document.getElementsByClassName('jellyfish')
    console.log('🐝 ~ jellyfish', getJellyfish)
    const jellyfish = getJellyfish[0]
    jellyfish.classList.add('animate__animated',  'animate__backOutUp')
    // jellyfish.classList.remove('animate__animated',  'animate__fadeOutDown')
    setInterval(() => {
      jellyfish.classList.add('animate__animated',  'animate__fadeInLeft')
      // jellyfish.classList.remove('animate__animated',  'animate__fadeInLeft')
    }, 3000)
  }
  return (
    <>
      <ParticlesBg/>
      <MouseParticles g={-5} life={0.5} color={['#38adec','#8c9cac'] }cull="no-mouse-effect"/>
      <div className='homepage'>
        <div className='hero'>
          <div className={!typingEnded ? 'typist-container' : 'typist-container animate__animated  animate__fadeOutRight' }> 
            {/* <div className='hero'> */}
            {/* <img className='desktop-img' /> */}
            <Typist 
              onTypingDone={()=>handleTypingEnded()}
              startDelay={1000}
              avgTypingDelay={80}
              cursor={{
                show: true,
                blink: true,
                element: '|'
              }}>
              <span>{'const developer = {'}</span>
              <br/>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;firstName: &#39;Sami&#39;,</span>
              <br/>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;lastName: &#39;Hakim&#39;,</span>
              <br/>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;location: &#39;Lonfon</span>
              <Typist.Backspace count={3} delay={200} />
              <span>don&#39;,</span>
              {/* <br/>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;availableToWork: true</span> */}
              {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;currently: &#39;Full-stack Developer&#39;</span> */}
              {/* <br/> */}
              {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;{'hobbies: [\'Music\',\'Travel\',\'Reading\']'}</span> */}
              <br/>
              <span>{' }'}</span>
            </Typist>
          </div>      
          <div className={!typingEnded ? 'hide' : 'animate__animated animate__fadeInLeft ' }> 
            <header 
              className='header'>
              <h1>Sami Hakim </h1><br/> 
              <h2>Full-stack Developer</h2>
              <div className='button-container'>
                <h3 className='down-arrow-btn animate__animated animate__heartBeat animate__infinite animate__slower' onClick={handleDownArrow}>
                ⌵
                </h3>
              </div>
            </header>
          </div>
        </div>
        {/* <ScrollAnimation initiallyVisible={false}
          offset={200}
          animateIn='animate__rotateInUpLeft'
          animateOut='animate__backOutLeft'> */}
        <div id='about' className='about-section'>
          <h1>A little about me...</h1>
          <div className='brand-statement' >
            <p>
              {brandStatement}
              <br/>
              <a href='#more-about'>Learn  more</a>
            </p>
          </div>
        </div>
        {/* </ScrollAnimation> */}
        <ScrollAnimation initiallyVisible={false}
          offset={200}
          animateIn='animate__rotateInUpLeft'
          animateOut='animate__backOutLeft'>
          <div className='fish jellyfish '>
            <img onMouseOver={handleJellyFishExit} src={jellyfish} />
          </div>
        </ScrollAnimation>
        <Projects />
        <ScrollAnimation 
          initiallyVisible={true}
          offset={200}
          animateOut='animate__fadeOutTopRight animate__slower'
          animateOnce={true}
        >
          <div className='fish fish-right sub'>
            <img src={sub} />
          </div>
        </ScrollAnimation>
        <Tech DevIcon={DevIcon}/>
        {/* {        <div className='fish '>
          <img src={blobby} />
        </div>
        <div className='fish '>
          <img src={squid0} />
        </div>
        <div className='fish '>
          <img src={squid1} />
        </div>
       */}
        {/* <div className='fish '>
          <img src={goldfish} />
        </div> */}
        {/* <div className='fish '>
          <img src={mantaRay} />
        </div> */}
        {/* <div className='fish '>
          <img src={fishes} />
        </div> */}
        {/* <div className='fish blow-fish'>
          <img src={fish0} />
        </div> */}
        <Experience/>
        <Contact/>
        <div className='z-index'>
          <ScrollAnimation className=''
            offset={300}
            animateIn='animate__fadeInUp'>
            <MoreAbout />
          </ScrollAnimation>
          <ScrollAnimation initiallyVisible={false}
            offset={20}
            animateIn='animate__fadeInBottomRight'
            animateOut='animate__fadeOutBottomRight animate__slower'
          >
            <div className='bottom-squid'>
              <img src={squid0} />
            </div>
          </ScrollAnimation>
        </div>
      </div> 
    </>
  )
}
export default Home
