/* eslint-disable no-unused-vars */
import React from 'react'
import { layoutGenerator } from 'react-break'

import '../styles/navbar.scss'
import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss'

const Navbar = () => {
  // get break point and make hidden in here or in csss? 
  // show lines on break point
  // give them animation
  // drop down menu animation
  // okay

  const layout = layoutGenerator({
    mobile: 0,
    tablet: 600,
    desktop: 992
  })
  console.log('🐝 ~ layout', layout)

  const OnMobile = layout.is('mobile')
  const OnAtLeastTablet = layout.isAtLeast('tablet')
  // const isAtLeastPhablet = layout.isAtLeast('phablet')
  const OnDesktop = layout.is('desktop')


  const [isActive, setIsActive] = React.useState(false)
  console.log('🐝 ~ isActive', isActive)

  const handleBurger = () => {
    setIsActive(!isActive)
  }


  return (
    <>

      <OnMobile>

        <nav className='mob-nav'>
          <div className=''>
            <button
              className={`hamburger--collapse hamburger ${isActive ? 'is-active' : ''}`}
              type="button"
              onClick={handleBurger}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>



            {/* <div id="nav-icon3"
              className={`${isActive ? 'open' : ''}`} 
              onClick={handleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
          </div>
          <div className={`mob-nav-items dropdown ${!isActive ? 'hide' : ''}`}>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#tech'>Tech skills</a>
            <a href='#experience'>Experience</a>
            <a href='#contact'>Get in touch</a>
            <a href=''>Restart</a>
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
