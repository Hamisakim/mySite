import React from 'react'
// eslint-disable-next-line no-unused-vars

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-items'>
        This is the end
          {`Sami Hakim  ${new Date().getFullYear()}`}
        </div>
      </footer>

    </>

  )
}

export default Footer
