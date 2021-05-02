import React from 'react'
import DevIcon from 'devicon-react-svg'
import twitter from '../assets/twitterlogo.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contact-items'>
        <h1>Get in touch 😀</h1>

        <div className='contact-buttons'>
          



          <ScrollAnimation
            offset={10}
            duration={1}
            animateIn='animate__rollIn'>
            <a target="_blank" href='https://www.linkedin.com/in/samihakim' rel="noreferrer" >
              <DevIcon className='icon-contact linkedin-icon' icon='linkedin' />
            </a>
          </ScrollAnimation>




          <ScrollAnimation
            offset={10}
            duration={1}
            animateIn='animate__slideInUp'>
            <a target="_blank" href='https://www.twitter.com/Hamisakim2' rel="noreferrer" >
              <img className='icon-contact twitter-icon' src={twitter}/>
            </a>
          </ScrollAnimation>


          <ScrollAnimation
            offset={10}
            duration={1}
            animateIn='animate__slideInUp'>
            <a target="_blank" href='mailto:samishakim@gmail.com' rel="noreferrer"><DevIcon className='icon-contact' icon='email' /></a>
          </ScrollAnimation>
          
          <ScrollAnimation
            offset={10}
            duration={1}
            animateIn='animate__rotateInDownRight'>
            <a target="_blank" href='https://www.github.com/hamisakim' rel="noreferrer">
              <DevIcon className='icon-contact github-icon-contact' icon='github_badge' />
            </a>

          </ScrollAnimation>

        </div>
      </div>



      
    </div>
  )
}

export default Contact
