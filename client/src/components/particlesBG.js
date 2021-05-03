import React from 'react'
import '../styles/main.scss'
import Particles from 'react-particles-js'

const ParticlesBg = () => {
  // var randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return (
    <Particles
      className="particles-wrapper"
      params={{
        'particles': {
          'number': {
            'value': 20,
            'density': {
              'enable': true
            }
          },
          'color': {
            // 'value': `#${randomColor}` 
            'value': '#64cef5'

          },
          'size': {
            'value': 20,
            'random': true,
            'anim': {
              'speed': 5,
              'size_min': 0.4
            }
          },
          'line_linked': {
            'enable': false,
            'opacity': 0.1,
            'distance': 280
          },
          'move': {
            'random': true,
            'speed': 2.5,
            'direction': 'top',
            'out_mode': 'out'
          }
        },
        'interactivity': {
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'bubble'
            },
            'onclick': { 
              'enable': true,
              'mode': 'repulse'
            }
          },
          'modes': {
            'bubble': {
              'distance': 250,
              'duration': 2,
              'size': 0,
              'opacity': 0.1
            },
            'repulse': {
              'distance': 300,
              'duration': 4
            }
          }
        }
      }} />
  )
}

export default ParticlesBg
