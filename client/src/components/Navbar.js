/* eslint-disable no-unused-vars */
import React from 'react'
import { layoutGenerator } from 'react-break'
import '../styles/navbar.scss'
const Navbar = () => {
  // get break point and make hidden in here or in csss? 
  // show lines on break point
  // give them animation
  // drop down menu animation
  // okay

  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992
  })
  console.log('🐝 ~ layout', layout)

  const OnMobile = layout.is('mobile')
  const OnAtLeastTablet = layout.isAtLeast('tablet')
  const OnAtMostPhablet = layout.isAtMost('phablet')
  const OnDesktop = layout.is('desktop')


  const [isActive, setIsActive] = React.useState(false)
  console.log('🐝 ~ isActive', isActive)
  return (
    <>
 
      <OnMobile>

        <nav className='mob-nav'>
          <div className='mob-nav-brand'>
              🦈
          </div>
          <div className='mob-nav-items'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#tech'>Tech skills</a>
            <a href='#experience'>Experience</a>
            <a href='#contact'>Get in touch</a>
            <a href=''>Restart</a>
          </div>
          
          <div
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} 
            onClick={() => {
              setIsActive(!isActive) 
            }}
          
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </nav>







      </OnMobile>





      <OnAtLeastTablet>
        <nav className='navbar'>
          <div className='navbar-items'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#tech'>Tech skills</a>
            <a href='#experience'>Experience</a>
            <a href='#contact'>Get in touch</a>
            <a href=''>Restart</a>
          </div>
          <div>
          </div>
        </nav>
      </OnAtLeastTablet>


    </>
  )
}

export default Navbar
