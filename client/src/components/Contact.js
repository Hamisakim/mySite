/* eslint-disable no-unused-vars */
import React,{  useState } from 'react'
import DevIcon from 'devicon-react-svg'
// eslint-disable-next-line no-unused-vars
import twitter from '../assets/twitterlogo.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import picture from '../assets/Cropped Linkedin.png'

const Contact = () => {


  const handleCopyEmail = () => {
    const copyText = 'samishakim@gmail.com'
    window.clipboardData.setData('samishakim@gmail.com')
    alert('Copied email to clipboard ' + copyText.value)
  }


  const [copySuccess, setCopySuccess] = useState('')
  console.log('🐝 ~ copySuccess', copySuccess)
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText('samishakim@gmail.com')
      setCopySuccess('Copied!')
      alert('Email copied: samishakim@gmail.com')
    } catch (err) {
      alert('Error')
    }
  }



  return (
    <div id='contact' className='contact'>
      <div className='contact-items'>
        <a href='#contact'><h1>Get in touch 😀</h1></a>
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
            <div className='email-icon-container'>
              <a target="_blank" href='mailto:samishakim@gmail.com' rel="noreferrer"><DevIcon className='icon-contact email-icon' icon='email' />
              </a>
              <h4 className='contact-mailto' onClick={copyToClipBoard}>Mail to - click here to copy!
              </h4>

            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={10}
            duration={1}
            animateIn='animate__slideInUp'>
            <a target="_blank" href='https://www.twitter.com/Hamisakim2' rel="noreferrer" >
              {/* <img className='icon-contact twitter-icon' src={twitter}/> */}
              <svg className='twitter-svg icon-contact' viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
                <path d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
                />
              </svg>
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            offset={10}
            duration={1}
            animateIn='animate__rotateInDownRight'>
            <a className='github-icon-contact' target="_blank" href='https://www.github.com/hamisakim' rel="noreferrer">
              <DevIcon className='icon-contact github-icon-contact ' icon='github' />
            </a>
          </ScrollAnimation>
        </div>
      </div>
      <img className='linkedin-img' src={picture} />

    </div>
  )
}
export default Contact
