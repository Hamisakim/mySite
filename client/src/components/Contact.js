import React from 'react'
import DevIcon from 'devicon-react-svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <ol>
        <li> <a target="_blank" href='https://www.linkedin.com/in/samihakim' rel="noreferrer" ><DevIcon className='icon-contact' icon='linkedin' /></a></li>

        <li> <a target="_blank" href='https://www.twitter.com/Hamisakim2' rel="noreferrer"><DevIcon className='icon-contact' icon='twitter' /></a></li>

        <li> <a target="_blank" href='mailto:samishakim@gmail.com' rel="noreferrer">samishakim@gmail.com</a></li>

        <li> <a target="_blank" href='https://www.github.com/hamisakim' rel="noreferrer">
          <DevIcon className='icon-contact' icon='github_badge' />
        </a>
        </li>
      </ol>

      
    </div>
  )
}

export default Contact
