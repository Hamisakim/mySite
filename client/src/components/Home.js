import React from 'react'
import DevIcon from 'devicon-react-svg'

const Home = () => {
  const devIconStyle = {
    fill: 'purple',
    width: '150px'
  }
  return (
    <div>
      <div className='devicons' style={devIconStyle}>
        <DevIcon icon='git' />
        <DevIcon icon='nodejs' />
        <DevIcon icon='javascript' />
        <DevIcon icon='sass' />
        <DevIcon icon='react' />
        <DevIcon icon='python' />
        <DevIcon icon='html5' />
        <DevIcon icon='css3' />
        <DevIcon icon='github' />
        <DevIcon icon='npm' />
        <DevIcon icon="linkedin" />
        <DevIcon icon="mongodb" />
        <DevIcon icon="heroku" />
        <DevIcon icon="postgresql" />

        
      </div>
    </div>
  )
}

export default Home
