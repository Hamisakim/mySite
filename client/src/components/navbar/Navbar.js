/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './navbar.scss'
const Navbar = () => {

  //#region 
  // <nav className='navbar'>
  //   <div className='navbar-items'>
  //     <a href='#about'>About</a>
  //     <a href='#projects'>Projects</a>
  //     <a href='#tech'>Tech skills</a>
  //     <a href='#experience'>Experience</a>
  //     <a href='#contact'>Get in touch</a>
  //     <a href=''>Restart</a>
  //   </div>
  //   <div>
      
  
  //   </div>
  // </nav>
  //#endregion
  const [isActive, setIsActive] = React.useState(false)
  return (
    <nav className="navbar custom-nav">
     
      <div className="container">
        <div className="navbar-brand">

          
          <a onClick={() => {
            setIsActive(!isActive)
          }}role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a to="/doodle-new" className="navbar-item">Doodle</a>
            <a to="/gallery" className="navbar-item">Gallery</a>
          </div>

          <div className="navbar-end">
         
            <>
              <a to="/join" className="navbar-item">
            Sign Up
              </a>

              <a to="/login" className="navbar-item">
            Login
              </a>
            </>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
